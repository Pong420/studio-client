/* eslint-disable */
import EventEmitter from 'eventemitter3';
import { Event, ReadyState } from '@ct/socket-emitter';
import { globalTimer } from '@ct/global-utils';
import { ByteArray } from '@ct/socket-emitter/esm//ByteArray';
import { PacketAssembler } from '@ct/socket-emitter/esm/PacketAssembler';
import { PacketParser } from '@ct/socket-emitter/esm/PacketParser';
import { HeartBeater } from '@ct/socket-emitter/esm/HeartBeater';
import { GateHeartBeater } from '@ct/socket-emitter/esm/GateHeartBeater';
import { ParsePlugin } from '@ct/socket-emitter/esm/interface';
import { ResponseBase } from '@ct/socket-emitter/esm/ResponseBase';

export interface SocketEmitterOptions {
    heartbeat?: boolean;
    gateHeartbeat?: boolean;
}

export class SocketEmitter extends EventEmitter {
    public port: number = -1
    public lines: string[]
    private lineIndex: number = 0

    /**
     * default 0, means retry for infinite times
     */
    public retryLimit: number = 0

    /**
     * default 5, emit DIE event if reconnect fail for 5 times
     */
    public deathLimit: number = 5

    /**
     * socket died after reconnect fail for many times, and revive if reconnect success
     */
    public get isDead(): boolean {
        return this._isDead;
    }
    private _isDead: boolean = false;

    private socket: WebSocket
    private handler: SocketEmitter['handleEvent']

    private readyStateChecker: number = -1

    private respMap: Map<number, typeof ResponseBase> = new Map()
    private byteCache: ByteArray
    private packetAssembler: PacketAssembler
    private packetParser: PacketParser

    private closeEvtReceived: boolean = false; // every OPEN should have corresponding CLOSE

    /**
     *  log options
     */
    public shouldLogSend: boolean = false

    constructor(option: SocketEmitterOptions = {}) {
        super()
        this.handler = (evt) => this.handleEvent(evt)

        /**
         * setup packet parser
         */
        this.byteCache = new ByteArray()
        this.packetAssembler = PacketAssembler(this.byteCache)
        this.packetParser = PacketParser(this.respMap)

        /**
         * setup heart beater
         */
        option.heartbeat !== false && new HeartBeater(this)
        option.gateHeartbeat !== false && new GateHeartBeater(this)
    }

    protected setupRespMap(...entries: ([number, typeof ResponseBase])[]) {
        entries.forEach(entry => this.respMap.set(entry[0], entry[1]))
    }

    public get readyState(): ReadyState {
        return this.socket ? this.socket.readyState : ReadyState.CLOSED
    }

    public get isOpen(): boolean {
        return this.readyState === ReadyState.OPEN
    }

    public get url(): string {
        if (!this.lines || this.lines.length <= 0 || this.port < 0) {
            // @ts-ignore
            return null
        } else {
            if (this.lineIndex >= this.lines.length) {
                this.lineIndex = 0 // reset if index out of range
            }
            return `${this.lines[this.lineIndex]}:${this.port}`
        }
    }

    /** use internal, normaly use autoConnect instead */
    public connect() {
        const url = this.url
        if (!url) {
            throw new Error('must assign lines & port before connect!')
        }

        /** reset */
        this.disconnect()

        this.socket = new WebSocket(url)
        this.bindEvent()
        this.socket.binaryType = 'arraybuffer'

        return new Promise<void>((resolve, reject) => {
            const timeout = globalTimer.setTimeout(() => {
                this.off(Event.ERROR, onError)
                this.off(Event.OPEN, onOpen)
                reject(new Error('connecting timeout!'))
            }, 5000)

            const onOpen = () => {
                globalTimer.clearTimeout(timeout)
                resolve()
                this.off(Event.ERROR, onError)
            }
            const onError = (err: unknown) => {
                globalTimer.clearTimeout(timeout)
                this.off(Event.OPEN, onOpen)
                // avoid high frequency reconnect
                globalTimer.setTimeout(() => {
                    reject(err)
                }, 5000);
            }
            this.once(Event.OPEN, onOpen)
            this.once(Event.ERROR, onError)
        })
    }

    public disconnect() {
        if (this.socket) {
            this.unbindEvent()
            if (!this.closeEvtReceived) {
                this.emit(Event.CLOSE)
            }
            if (this.socket.readyState === ReadyState.OPEN
                || this.socket.readyState === ReadyState.CONNECTING) {
                console.log(`${this.url} close by client!`)
                this.socket.close()
            }
            // @ts-ignore
            this.socket = null
        }
    }

    public async autoConnect() {
        if (!this.url) {
            throw new Error('must assign lines & port before connect!')
        }

        /** reset */
        this._kill()
  
        await this.tryConnect()

        /** connect success, Event.OPEN triggered here */

        this.readyStateChecker = globalTimer.setInterval(() => {
            if (this.readyState !== ReadyState.OPEN) {
                this.nextLine()
                this.tryConnect()
            }
        }, 5000)
    }

    public kill() {
        /** make sure socket is killed from outside, not from module inside as reset */
        console.log(`${this.url} is killed manually!`)
        this._kill()
    }

    /** @internal */
    public _kill() {
        if (globalTimer.validate(this.readyStateChecker)) {
            globalTimer.clearInterval(this.readyStateChecker)
            this.readyStateChecker = -1
        }

        this.disconnect()
    }

    private nextLine() {
        this.lineIndex = (this.lineIndex + 1) % this.lines.length
    }

    protected async tryConnect(count = 0) {
        try {
            await this.connect()
            this._isDead = false;
        } catch (e) {
            if (this.retryLimit <= 0 || count < this.retryLimit) {
                if (count === this.deathLimit) {
                    this._isDead = true;
                    this.emit(Event.DIE);
                }
                this.nextLine()
                await this.tryConnect(count + 1)
            } else {
                this.disconnect()
                throw new Error(`all urls are unavailabe! ${JSON.stringify(this.lines)}`)
            }
        }
    }

    /** trigger a reconnect manually */
    public reconnect() {
        // this.lineIndex = (this.lineIndex + 1) % this.urls.length
        this.nextLine()
        this.autoConnect()
    }

    public send(bytes: ByteArray) {
        if (this.readyState === ReadyState.OPEN) {
            if (this.shouldLogSend) {
                bytes.position = 0;
                console.log(`${this.url} send ${bytes.readUnsignedInt().toString(16)}, length: ${bytes.length}`)
            }
            this.socket.send(bytes.buffer)
        } else {
            throw new Error('socket not open!')
        }
    }

    private bindEvent() {
        this.socket.addEventListener('open', this.handler)
        this.socket.addEventListener('message', this.handler)
        this.socket.addEventListener('close', this.handler)
        this.socket.addEventListener('error', this.handler)
    }

    private unbindEvent() {
        this.socket.removeEventListener('open', this.handler)
        this.socket.removeEventListener('message', this.handler)
        this.socket.removeEventListener('close', this.handler)
        this.socket.removeEventListener('error', this.handler)
    }

    private handleEvent(evt: Event | MessageEvent | CloseEvent) {
        switch (evt.type) {
            case 'open':
                this.byteCache.clear() // clear cache before receive new data
                this.closeEvtReceived = false
                this.emit(Event.OPEN)
                break
            case 'message':
                this.onMessage(new ByteArray((evt as MessageEvent).data))
                break
            case 'close':
                console.log(`${this.url} socket is closed!`)
                this.closeEvtReceived = true
                this.emit(Event.CLOSE)
                break
            case 'error':
                this.emit(Event.ERROR, evt)
                break
        }
    }

    private onMessage(bytes: ByteArray) {
        const packets = this.packetAssembler(bytes)
        packets.forEach(bytes => {

            this.pluginArray.forEach(plugin => {
                if (bytes) { // bytes could be null after plugin
                    bytes = plugin(bytes)
                }
            })
            if (bytes) {
                this.emit(Event.PACKET, this.packetParser(bytes))
            }
        })
    }

    /**
     * Manage Plugin
     */
    private pluginArray: ParsePlugin[] = []
    public usePlugin(plugin: ParsePlugin) {
        this.pluginArray.push(plugin)
    }
}