/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const DataServerBlackJackProto = $root.DataServerBlackJackProto = (() => {

    /**
     * Namespace DataServerBlackJackProto.
     * @exports DataServerBlackJackProto
     * @namespace
     */
    const DataServerBlackJackProto = {};

    DataServerBlackJackProto.BJGameSnapshot = (function() {

        /**
         * Properties of a BJGameSnapshot.
         * @memberof DataServerBlackJackProto
         * @interface IBJGameSnapshot
         * @property {number|null} [version] BJGameSnapshot version
         * @property {string|null} [vid] BJGameSnapshot vid
         * @property {string|null} [gmcode] BJGameSnapshot gmcode
         * @property {number|null} [timeout] BJGameSnapshot timeout
         * @property {number|null} [maxtimeout] BJGameSnapshot maxtimeout
         * @property {number|null} [handindex] BJGameSnapshot handindex
         * @property {number|null} [gmstatus] BJGameSnapshot gmstatus
         * @property {Array.<DataServerBlackJackProto.BJGameSnapshot.IBJSeat>|null} [bjseat] BJGameSnapshot bjseat
         * @property {DataServerBlackJackProto.BJGameSnapshot.ICardList|null} [dealercards] BJGameSnapshot dealercards
         */

        /**
         * Constructs a new BJGameSnapshot.
         * @memberof DataServerBlackJackProto
         * @classdesc Represents a BJGameSnapshot.
         * @implements IBJGameSnapshot
         * @constructor
         * @param {DataServerBlackJackProto.IBJGameSnapshot=} [properties] Properties to set
         */
        function BJGameSnapshot(properties) {
            this.bjseat = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJGameSnapshot version.
         * @member {number} version
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.version = 0;

        /**
         * BJGameSnapshot vid.
         * @member {string} vid
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.vid = "";

        /**
         * BJGameSnapshot gmcode.
         * @member {string} gmcode
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.gmcode = "";

        /**
         * BJGameSnapshot timeout.
         * @member {number} timeout
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.timeout = 0;

        /**
         * BJGameSnapshot maxtimeout.
         * @member {number} maxtimeout
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.maxtimeout = 0;

        /**
         * BJGameSnapshot handindex.
         * @member {number} handindex
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.handindex = 0;

        /**
         * BJGameSnapshot gmstatus.
         * @member {number} gmstatus
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.gmstatus = 0;

        /**
         * BJGameSnapshot bjseat.
         * @member {Array.<DataServerBlackJackProto.BJGameSnapshot.IBJSeat>} bjseat
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.bjseat = $util.emptyArray;

        /**
         * BJGameSnapshot dealercards.
         * @member {DataServerBlackJackProto.BJGameSnapshot.ICardList|null|undefined} dealercards
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         */
        BJGameSnapshot.prototype.dealercards = null;

        /**
         * Creates a new BJGameSnapshot instance using the specified properties.
         * @function create
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {DataServerBlackJackProto.IBJGameSnapshot=} [properties] Properties to set
         * @returns {DataServerBlackJackProto.BJGameSnapshot} BJGameSnapshot instance
         */
        BJGameSnapshot.create = function create(properties) {
            return new BJGameSnapshot(properties);
        };

        /**
         * Encodes the specified BJGameSnapshot message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.verify|verify} messages.
         * @function encode
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {DataServerBlackJackProto.IBJGameSnapshot} message BJGameSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJGameSnapshot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gmcode);
            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeout);
            if (message.maxtimeout != null && Object.hasOwnProperty.call(message, "maxtimeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxtimeout);
            if (message.handindex != null && Object.hasOwnProperty.call(message, "handindex"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.handindex);
            if (message.gmstatus != null && Object.hasOwnProperty.call(message, "gmstatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gmstatus);
            if (message.bjseat != null && message.bjseat.length)
                for (let i = 0; i < message.bjseat.length; ++i)
                    $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.encode(message.bjseat[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.dealercards != null && Object.hasOwnProperty.call(message, "dealercards"))
                $root.DataServerBlackJackProto.BJGameSnapshot.CardList.encode(message.dealercards, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJGameSnapshot message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {DataServerBlackJackProto.IBJGameSnapshot} message BJGameSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJGameSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJGameSnapshot message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerBlackJackProto.BJGameSnapshot} BJGameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJGameSnapshot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.BJGameSnapshot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.int32();
                        break;
                    }
                case 2: {
                        message.vid = reader.string();
                        break;
                    }
                case 3: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 4: {
                        message.timeout = reader.int32();
                        break;
                    }
                case 5: {
                        message.maxtimeout = reader.int32();
                        break;
                    }
                case 6: {
                        message.handindex = reader.int32();
                        break;
                    }
                case 7: {
                        message.gmstatus = reader.int32();
                        break;
                    }
                case 8: {
                        if (!(message.bjseat && message.bjseat.length))
                            message.bjseat = [];
                        message.bjseat.push($root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        message.dealercards = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BJGameSnapshot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerBlackJackProto.BJGameSnapshot} BJGameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJGameSnapshot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJGameSnapshot message.
         * @function verify
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJGameSnapshot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.maxtimeout != null && message.hasOwnProperty("maxtimeout"))
                if (!$util.isInteger(message.maxtimeout))
                    return "maxtimeout: integer expected";
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                if (!$util.isInteger(message.handindex))
                    return "handindex: integer expected";
            if (message.gmstatus != null && message.hasOwnProperty("gmstatus"))
                if (!$util.isInteger(message.gmstatus))
                    return "gmstatus: integer expected";
            if (message.bjseat != null && message.hasOwnProperty("bjseat")) {
                if (!Array.isArray(message.bjseat))
                    return "bjseat: array expected";
                for (let i = 0; i < message.bjseat.length; ++i) {
                    let error = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.verify(message.bjseat[i]);
                    if (error)
                        return "bjseat." + error;
                }
            }
            if (message.dealercards != null && message.hasOwnProperty("dealercards")) {
                let error = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.verify(message.dealercards);
                if (error)
                    return "dealercards." + error;
            }
            return null;
        };

        /**
         * Creates a BJGameSnapshot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerBlackJackProto.BJGameSnapshot} BJGameSnapshot
         */
        BJGameSnapshot.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerBlackJackProto.BJGameSnapshot)
                return object;
            let message = new $root.DataServerBlackJackProto.BJGameSnapshot();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.maxtimeout != null)
                message.maxtimeout = object.maxtimeout | 0;
            if (object.handindex != null)
                message.handindex = object.handindex | 0;
            if (object.gmstatus != null)
                message.gmstatus = object.gmstatus | 0;
            if (object.bjseat) {
                if (!Array.isArray(object.bjseat))
                    throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.bjseat: array expected");
                message.bjseat = [];
                for (let i = 0; i < object.bjseat.length; ++i) {
                    if (typeof object.bjseat[i] !== "object")
                        throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.bjseat: object expected");
                    message.bjseat[i] = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.fromObject(object.bjseat[i]);
                }
            }
            if (object.dealercards != null) {
                if (typeof object.dealercards !== "object")
                    throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.dealercards: object expected");
                message.dealercards = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.fromObject(object.dealercards);
            }
            return message;
        };

        /**
         * Creates a plain object from a BJGameSnapshot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {DataServerBlackJackProto.BJGameSnapshot} message BJGameSnapshot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJGameSnapshot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.bjseat = [];
            if (options.defaults) {
                object.version = 0;
                object.vid = "";
                object.gmcode = "";
                object.timeout = 0;
                object.maxtimeout = 0;
                object.handindex = 0;
                object.gmstatus = 0;
                object.dealercards = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.maxtimeout != null && message.hasOwnProperty("maxtimeout"))
                object.maxtimeout = message.maxtimeout;
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                object.handindex = message.handindex;
            if (message.gmstatus != null && message.hasOwnProperty("gmstatus"))
                object.gmstatus = message.gmstatus;
            if (message.bjseat && message.bjseat.length) {
                object.bjseat = [];
                for (let j = 0; j < message.bjseat.length; ++j)
                    object.bjseat[j] = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.toObject(message.bjseat[j], options);
            }
            if (message.dealercards != null && message.hasOwnProperty("dealercards"))
                object.dealercards = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.toObject(message.dealercards, options);
            return object;
        };

        /**
         * Converts this BJGameSnapshot to JSON.
         * @function toJSON
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJGameSnapshot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BJGameSnapshot
         * @function getTypeUrl
         * @memberof DataServerBlackJackProto.BJGameSnapshot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BJGameSnapshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerBlackJackProto.BJGameSnapshot";
        };

        BJGameSnapshot.CardList = (function() {

            /**
             * Properties of a CardList.
             * @memberof DataServerBlackJackProto.BJGameSnapshot
             * @interface ICardList
             * @property {Array.<number>|null} [cards] CardList cards
             * @property {number|null} [handflags] CardList handflags
             */

            /**
             * Constructs a new CardList.
             * @memberof DataServerBlackJackProto.BJGameSnapshot
             * @classdesc Represents a CardList.
             * @implements ICardList
             * @constructor
             * @param {DataServerBlackJackProto.BJGameSnapshot.ICardList=} [properties] Properties to set
             */
            function CardList(properties) {
                this.cards = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CardList cards.
             * @member {Array.<number>} cards
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @instance
             */
            CardList.prototype.cards = $util.emptyArray;

            /**
             * CardList handflags.
             * @member {number} handflags
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @instance
             */
            CardList.prototype.handflags = 0;

            /**
             * Creates a new CardList instance using the specified properties.
             * @function create
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.ICardList=} [properties] Properties to set
             * @returns {DataServerBlackJackProto.BJGameSnapshot.CardList} CardList instance
             */
            CardList.create = function create(properties) {
                return new CardList(properties);
            };

            /**
             * Encodes the specified CardList message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.CardList.verify|verify} messages.
             * @function encode
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.ICardList} message CardList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.handflags != null && Object.hasOwnProperty.call(message, "handflags"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.handflags);
                return writer;
            };

            /**
             * Encodes the specified CardList message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.CardList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.ICardList} message CardList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CardList message from the specified reader or buffer.
             * @function decode
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DataServerBlackJackProto.BJGameSnapshot.CardList} CardList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.BJGameSnapshot.CardList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.cards && message.cards.length))
                                message.cards = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.cards.push(reader.int32());
                            } else
                                message.cards.push(reader.int32());
                            break;
                        }
                    case 2: {
                            message.handflags = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CardList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DataServerBlackJackProto.BJGameSnapshot.CardList} CardList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CardList message.
             * @function verify
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CardList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (let i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.handflags != null && message.hasOwnProperty("handflags"))
                    if (!$util.isInteger(message.handflags))
                        return "handflags: integer expected";
                return null;
            };

            /**
             * Creates a CardList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DataServerBlackJackProto.BJGameSnapshot.CardList} CardList
             */
            CardList.fromObject = function fromObject(object) {
                if (object instanceof $root.DataServerBlackJackProto.BJGameSnapshot.CardList)
                    return object;
                let message = new $root.DataServerBlackJackProto.BJGameSnapshot.CardList();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.CardList.cards: array expected");
                    message.cards = [];
                    for (let i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.handflags != null)
                    message.handflags = object.handflags | 0;
                return message;
            };

            /**
             * Creates a plain object from a CardList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.CardList} message CardList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CardList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults)
                    object.handflags = 0;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (let j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.handflags != null && message.hasOwnProperty("handflags"))
                    object.handflags = message.handflags;
                return object;
            };

            /**
             * Converts this CardList to JSON.
             * @function toJSON
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CardList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CardList
             * @function getTypeUrl
             * @memberof DataServerBlackJackProto.BJGameSnapshot.CardList
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CardList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DataServerBlackJackProto.BJGameSnapshot.CardList";
            };

            return CardList;
        })();

        BJGameSnapshot.BJSeat = (function() {

            /**
             * Properties of a BJSeat.
             * @memberof DataServerBlackJackProto.BJGameSnapshot
             * @interface IBJSeat
             * @property {Array.<DataServerBlackJackProto.BJGameSnapshot.ICardList>|null} [cardlist] BJSeat cardlist
             * @property {Array.<number>|null} [wintypes] BJSeat wintypes
             * @property {number|null} [wininfo] BJSeat wininfo
             * @property {number|null} [seat] BJSeat seat
             * @property {string|null} [loginname] BJSeat loginname
             * @property {string|null} [nickname] BJSeat nickname
             * @property {boolean|null} [isself] BJSeat isself
             * @property {string|null} [currency] BJSeat currency
             * @property {number|null} [left] BJSeat left
             * @property {number|null} [creditseq] BJSeat creditseq
             * @property {Array.<DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet>|null} [bets] BJSeat bets
             * @property {Array.<DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon>|null} [reckons] BJSeat reckons
             * @property {number|null} [winround] BJSeat winround
             * @property {number|null} [totalround] BJSeat totalround
             * @property {number|null} [cardlistkey] BJSeat cardlistkey
             */

            /**
             * Constructs a new BJSeat.
             * @memberof DataServerBlackJackProto.BJGameSnapshot
             * @classdesc Represents a BJSeat.
             * @implements IBJSeat
             * @constructor
             * @param {DataServerBlackJackProto.BJGameSnapshot.IBJSeat=} [properties] Properties to set
             */
            function BJSeat(properties) {
                this.cardlist = [];
                this.wintypes = [];
                this.bets = [];
                this.reckons = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BJSeat cardlist.
             * @member {Array.<DataServerBlackJackProto.BJGameSnapshot.ICardList>} cardlist
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.cardlist = $util.emptyArray;

            /**
             * BJSeat wintypes.
             * @member {Array.<number>} wintypes
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.wintypes = $util.emptyArray;

            /**
             * BJSeat wininfo.
             * @member {number} wininfo
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.wininfo = 0;

            /**
             * BJSeat seat.
             * @member {number} seat
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.seat = 0;

            /**
             * BJSeat loginname.
             * @member {string} loginname
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.loginname = "";

            /**
             * BJSeat nickname.
             * @member {string} nickname
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.nickname = "";

            /**
             * BJSeat isself.
             * @member {boolean} isself
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.isself = false;

            /**
             * BJSeat currency.
             * @member {string} currency
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.currency = "";

            /**
             * BJSeat left.
             * @member {number} left
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.left = 0;

            /**
             * BJSeat creditseq.
             * @member {number} creditseq
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.creditseq = 0;

            /**
             * BJSeat bets.
             * @member {Array.<DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet>} bets
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.bets = $util.emptyArray;

            /**
             * BJSeat reckons.
             * @member {Array.<DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon>} reckons
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.reckons = $util.emptyArray;

            /**
             * BJSeat winround.
             * @member {number} winround
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.winround = 0;

            /**
             * BJSeat totalround.
             * @member {number} totalround
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.totalround = 0;

            /**
             * BJSeat cardlistkey.
             * @member {number} cardlistkey
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             */
            BJSeat.prototype.cardlistkey = 0;

            /**
             * Creates a new BJSeat instance using the specified properties.
             * @function create
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.IBJSeat=} [properties] Properties to set
             * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat} BJSeat instance
             */
            BJSeat.create = function create(properties) {
                return new BJSeat(properties);
            };

            /**
             * Encodes the specified BJSeat message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.verify|verify} messages.
             * @function encode
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.IBJSeat} message BJSeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BJSeat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cardlist != null && message.cardlist.length)
                    for (let i = 0; i < message.cardlist.length; ++i)
                        $root.DataServerBlackJackProto.BJGameSnapshot.CardList.encode(message.cardlist[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.wintypes != null && message.wintypes.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (let i = 0; i < message.wintypes.length; ++i)
                        writer.int32(message.wintypes[i]);
                    writer.ldelim();
                }
                if (message.wininfo != null && Object.hasOwnProperty.call(message, "wininfo"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wininfo);
                if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.seat);
                if (message.loginname != null && Object.hasOwnProperty.call(message, "loginname"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.loginname);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.nickname);
                if (message.isself != null && Object.hasOwnProperty.call(message, "isself"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isself);
                if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.currency);
                if (message.left != null && Object.hasOwnProperty.call(message, "left"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.left);
                if (message.creditseq != null && Object.hasOwnProperty.call(message, "creditseq"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.creditseq);
                if (message.bets != null && message.bets.length)
                    for (let i = 0; i < message.bets.length; ++i)
                        $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.encode(message.bets[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.reckons != null && message.reckons.length)
                    for (let i = 0; i < message.reckons.length; ++i)
                        $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.encode(message.reckons[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.winround != null && Object.hasOwnProperty.call(message, "winround"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.winround);
                if (message.totalround != null && Object.hasOwnProperty.call(message, "totalround"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.totalround);
                if (message.cardlistkey != null && Object.hasOwnProperty.call(message, "cardlistkey"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.cardlistkey);
                return writer;
            };

            /**
             * Encodes the specified BJSeat message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.IBJSeat} message BJSeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BJSeat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BJSeat message from the specified reader or buffer.
             * @function decode
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat} BJSeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BJSeat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.cardlist && message.cardlist.length))
                                message.cardlist = [];
                            message.cardlist.push($root.DataServerBlackJackProto.BJGameSnapshot.CardList.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(message.wintypes && message.wintypes.length))
                                message.wintypes = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.wintypes.push(reader.int32());
                            } else
                                message.wintypes.push(reader.int32());
                            break;
                        }
                    case 3: {
                            message.wininfo = reader.int32();
                            break;
                        }
                    case 4: {
                            message.seat = reader.int32();
                            break;
                        }
                    case 5: {
                            message.loginname = reader.string();
                            break;
                        }
                    case 6: {
                            message.nickname = reader.string();
                            break;
                        }
                    case 7: {
                            message.isself = reader.bool();
                            break;
                        }
                    case 8: {
                            message.currency = reader.string();
                            break;
                        }
                    case 9: {
                            message.left = reader.double();
                            break;
                        }
                    case 10: {
                            message.creditseq = reader.int32();
                            break;
                        }
                    case 11: {
                            if (!(message.bets && message.bets.length))
                                message.bets = [];
                            message.bets.push($root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.decode(reader, reader.uint32()));
                            break;
                        }
                    case 12: {
                            if (!(message.reckons && message.reckons.length))
                                message.reckons = [];
                            message.reckons.push($root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.decode(reader, reader.uint32()));
                            break;
                        }
                    case 13: {
                            message.winround = reader.int32();
                            break;
                        }
                    case 14: {
                            message.totalround = reader.int32();
                            break;
                        }
                    case 15: {
                            message.cardlistkey = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BJSeat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat} BJSeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BJSeat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BJSeat message.
             * @function verify
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BJSeat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cardlist != null && message.hasOwnProperty("cardlist")) {
                    if (!Array.isArray(message.cardlist))
                        return "cardlist: array expected";
                    for (let i = 0; i < message.cardlist.length; ++i) {
                        let error = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.verify(message.cardlist[i]);
                        if (error)
                            return "cardlist." + error;
                    }
                }
                if (message.wintypes != null && message.hasOwnProperty("wintypes")) {
                    if (!Array.isArray(message.wintypes))
                        return "wintypes: array expected";
                    for (let i = 0; i < message.wintypes.length; ++i)
                        if (!$util.isInteger(message.wintypes[i]))
                            return "wintypes: integer[] expected";
                }
                if (message.wininfo != null && message.hasOwnProperty("wininfo"))
                    if (!$util.isInteger(message.wininfo))
                        return "wininfo: integer expected";
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                if (message.loginname != null && message.hasOwnProperty("loginname"))
                    if (!$util.isString(message.loginname))
                        return "loginname: string expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.isself != null && message.hasOwnProperty("isself"))
                    if (typeof message.isself !== "boolean")
                        return "isself: boolean expected";
                if (message.currency != null && message.hasOwnProperty("currency"))
                    if (!$util.isString(message.currency))
                        return "currency: string expected";
                if (message.left != null && message.hasOwnProperty("left"))
                    if (typeof message.left !== "number")
                        return "left: number expected";
                if (message.creditseq != null && message.hasOwnProperty("creditseq"))
                    if (!$util.isInteger(message.creditseq))
                        return "creditseq: integer expected";
                if (message.bets != null && message.hasOwnProperty("bets")) {
                    if (!Array.isArray(message.bets))
                        return "bets: array expected";
                    for (let i = 0; i < message.bets.length; ++i) {
                        let error = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.verify(message.bets[i]);
                        if (error)
                            return "bets." + error;
                    }
                }
                if (message.reckons != null && message.hasOwnProperty("reckons")) {
                    if (!Array.isArray(message.reckons))
                        return "reckons: array expected";
                    for (let i = 0; i < message.reckons.length; ++i) {
                        let error = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.verify(message.reckons[i]);
                        if (error)
                            return "reckons." + error;
                    }
                }
                if (message.winround != null && message.hasOwnProperty("winround"))
                    if (!$util.isInteger(message.winround))
                        return "winround: integer expected";
                if (message.totalround != null && message.hasOwnProperty("totalround"))
                    if (!$util.isInteger(message.totalround))
                        return "totalround: integer expected";
                if (message.cardlistkey != null && message.hasOwnProperty("cardlistkey"))
                    if (!$util.isInteger(message.cardlistkey))
                        return "cardlistkey: integer expected";
                return null;
            };

            /**
             * Creates a BJSeat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat} BJSeat
             */
            BJSeat.fromObject = function fromObject(object) {
                if (object instanceof $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat)
                    return object;
                let message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat();
                if (object.cardlist) {
                    if (!Array.isArray(object.cardlist))
                        throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.cardlist: array expected");
                    message.cardlist = [];
                    for (let i = 0; i < object.cardlist.length; ++i) {
                        if (typeof object.cardlist[i] !== "object")
                            throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.cardlist: object expected");
                        message.cardlist[i] = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.fromObject(object.cardlist[i]);
                    }
                }
                if (object.wintypes) {
                    if (!Array.isArray(object.wintypes))
                        throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.wintypes: array expected");
                    message.wintypes = [];
                    for (let i = 0; i < object.wintypes.length; ++i)
                        message.wintypes[i] = object.wintypes[i] | 0;
                }
                if (object.wininfo != null)
                    message.wininfo = object.wininfo | 0;
                if (object.seat != null)
                    message.seat = object.seat | 0;
                if (object.loginname != null)
                    message.loginname = String(object.loginname);
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.isself != null)
                    message.isself = Boolean(object.isself);
                if (object.currency != null)
                    message.currency = String(object.currency);
                if (object.left != null)
                    message.left = Number(object.left);
                if (object.creditseq != null)
                    message.creditseq = object.creditseq | 0;
                if (object.bets) {
                    if (!Array.isArray(object.bets))
                        throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.bets: array expected");
                    message.bets = [];
                    for (let i = 0; i < object.bets.length; ++i) {
                        if (typeof object.bets[i] !== "object")
                            throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.bets: object expected");
                        message.bets[i] = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.fromObject(object.bets[i]);
                    }
                }
                if (object.reckons) {
                    if (!Array.isArray(object.reckons))
                        throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.reckons: array expected");
                    message.reckons = [];
                    for (let i = 0; i < object.reckons.length; ++i) {
                        if (typeof object.reckons[i] !== "object")
                            throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.reckons: object expected");
                        message.reckons[i] = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.fromObject(object.reckons[i]);
                    }
                }
                if (object.winround != null)
                    message.winround = object.winround | 0;
                if (object.totalround != null)
                    message.totalround = object.totalround | 0;
                if (object.cardlistkey != null)
                    message.cardlistkey = object.cardlistkey | 0;
                return message;
            };

            /**
             * Creates a plain object from a BJSeat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat} message BJSeat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BJSeat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.cardlist = [];
                    object.wintypes = [];
                    object.bets = [];
                    object.reckons = [];
                }
                if (options.defaults) {
                    object.wininfo = 0;
                    object.seat = 0;
                    object.loginname = "";
                    object.nickname = "";
                    object.isself = false;
                    object.currency = "";
                    object.left = 0;
                    object.creditseq = 0;
                    object.winround = 0;
                    object.totalround = 0;
                    object.cardlistkey = 0;
                }
                if (message.cardlist && message.cardlist.length) {
                    object.cardlist = [];
                    for (let j = 0; j < message.cardlist.length; ++j)
                        object.cardlist[j] = $root.DataServerBlackJackProto.BJGameSnapshot.CardList.toObject(message.cardlist[j], options);
                }
                if (message.wintypes && message.wintypes.length) {
                    object.wintypes = [];
                    for (let j = 0; j < message.wintypes.length; ++j)
                        object.wintypes[j] = message.wintypes[j];
                }
                if (message.wininfo != null && message.hasOwnProperty("wininfo"))
                    object.wininfo = message.wininfo;
                if (message.seat != null && message.hasOwnProperty("seat"))
                    object.seat = message.seat;
                if (message.loginname != null && message.hasOwnProperty("loginname"))
                    object.loginname = message.loginname;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.isself != null && message.hasOwnProperty("isself"))
                    object.isself = message.isself;
                if (message.currency != null && message.hasOwnProperty("currency"))
                    object.currency = message.currency;
                if (message.left != null && message.hasOwnProperty("left"))
                    object.left = options.json && !isFinite(message.left) ? String(message.left) : message.left;
                if (message.creditseq != null && message.hasOwnProperty("creditseq"))
                    object.creditseq = message.creditseq;
                if (message.bets && message.bets.length) {
                    object.bets = [];
                    for (let j = 0; j < message.bets.length; ++j)
                        object.bets[j] = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.toObject(message.bets[j], options);
                }
                if (message.reckons && message.reckons.length) {
                    object.reckons = [];
                    for (let j = 0; j < message.reckons.length; ++j)
                        object.reckons[j] = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.toObject(message.reckons[j], options);
                }
                if (message.winround != null && message.hasOwnProperty("winround"))
                    object.winround = message.winround;
                if (message.totalround != null && message.hasOwnProperty("totalround"))
                    object.totalround = message.totalround;
                if (message.cardlistkey != null && message.hasOwnProperty("cardlistkey"))
                    object.cardlistkey = message.cardlistkey;
                return object;
            };

            /**
             * Converts this BJSeat to JSON.
             * @function toJSON
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BJSeat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BJSeat
             * @function getTypeUrl
             * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BJSeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DataServerBlackJackProto.BJGameSnapshot.BJSeat";
            };

            BJSeat.Bet = (function() {

                /**
                 * Properties of a Bet.
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
                 * @interface IBet
                 * @property {number|null} [playtype] Bet playtype
                 * @property {number|null} [jetton] Bet jetton
                 * @property {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo|null} [extra] Bet extra
                 */

                /**
                 * Constructs a new Bet.
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
                 * @classdesc Represents a Bet.
                 * @implements IBet
                 * @constructor
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet=} [properties] Properties to set
                 */
                function Bet(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Bet playtype.
                 * @member {number} playtype
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @instance
                 */
                Bet.prototype.playtype = 0;

                /**
                 * Bet jetton.
                 * @member {number} jetton
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @instance
                 */
                Bet.prototype.jetton = 0;

                /**
                 * Bet extra.
                 * @member {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo|null|undefined} extra
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @instance
                 */
                Bet.prototype.extra = null;

                /**
                 * Creates a new Bet instance using the specified properties.
                 * @function create
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet=} [properties] Properties to set
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet} Bet instance
                 */
                Bet.create = function create(properties) {
                    return new Bet(properties);
                };

                /**
                 * Encodes the specified Bet message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.verify|verify} messages.
                 * @function encode
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet} message Bet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Bet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.playtype != null && Object.hasOwnProperty.call(message, "playtype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playtype);
                    if (message.jetton != null && Object.hasOwnProperty.call(message, "jetton"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.jetton);
                    if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                        $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.encode(message.extra, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Bet message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet} message Bet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Bet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Bet message from the specified reader or buffer.
                 * @function decode
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet} Bet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Bet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.playtype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.jetton = reader.double();
                                break;
                            }
                        case 3: {
                                message.extra = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Bet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet} Bet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Bet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Bet message.
                 * @function verify
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Bet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.playtype != null && message.hasOwnProperty("playtype"))
                        if (!$util.isInteger(message.playtype))
                            return "playtype: integer expected";
                    if (message.jetton != null && message.hasOwnProperty("jetton"))
                        if (typeof message.jetton !== "number")
                            return "jetton: number expected";
                    if (message.extra != null && message.hasOwnProperty("extra")) {
                        let error = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.verify(message.extra);
                        if (error)
                            return "extra." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Bet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet} Bet
                 */
                Bet.fromObject = function fromObject(object) {
                    if (object instanceof $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet)
                        return object;
                    let message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet();
                    if (object.playtype != null)
                        message.playtype = object.playtype | 0;
                    if (object.jetton != null)
                        message.jetton = Number(object.jetton);
                    if (object.extra != null) {
                        if (typeof object.extra !== "object")
                            throw TypeError(".DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.extra: object expected");
                        message.extra = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.fromObject(object.extra);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Bet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet} message Bet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Bet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.playtype = 0;
                        object.jetton = 0;
                        object.extra = null;
                    }
                    if (message.playtype != null && message.hasOwnProperty("playtype"))
                        object.playtype = message.playtype;
                    if (message.jetton != null && message.hasOwnProperty("jetton"))
                        object.jetton = options.json && !isFinite(message.jetton) ? String(message.jetton) : message.jetton;
                    if (message.extra != null && message.hasOwnProperty("extra"))
                        object.extra = $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.toObject(message.extra, options);
                    return object;
                };

                /**
                 * Converts this Bet to JSON.
                 * @function toJSON
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Bet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Bet
                 * @function getTypeUrl
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Bet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet";
                };

                Bet.ExtraInfo = (function() {

                    /**
                     * Properties of an ExtraInfo.
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                     * @interface IExtraInfo
                     * @property {string|null} [remark] ExtraInfo remark
                     */

                    /**
                     * Constructs a new ExtraInfo.
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet
                     * @classdesc Represents an ExtraInfo.
                     * @implements IExtraInfo
                     * @constructor
                     * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo=} [properties] Properties to set
                     */
                    function ExtraInfo(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ExtraInfo remark.
                     * @member {string} remark
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @instance
                     */
                    ExtraInfo.prototype.remark = "";

                    /**
                     * Creates a new ExtraInfo instance using the specified properties.
                     * @function create
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo=} [properties] Properties to set
                     * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo} ExtraInfo instance
                     */
                    ExtraInfo.create = function create(properties) {
                        return new ExtraInfo(properties);
                    };

                    /**
                     * Encodes the specified ExtraInfo message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.verify|verify} messages.
                     * @function encode
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo} message ExtraInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtraInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.remark);
                        return writer;
                    };

                    /**
                     * Encodes the specified ExtraInfo message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo} message ExtraInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtraInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ExtraInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo} ExtraInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtraInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.remark = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ExtraInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo} ExtraInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtraInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ExtraInfo message.
                     * @function verify
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtraInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.remark != null && message.hasOwnProperty("remark"))
                            if (!$util.isString(message.remark))
                                return "remark: string expected";
                        return null;
                    };

                    /**
                     * Creates an ExtraInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo} ExtraInfo
                     */
                    ExtraInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo)
                            return object;
                        let message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo();
                        if (object.remark != null)
                            message.remark = String(object.remark);
                        return message;
                    };

                    /**
                     * Creates a plain object from an ExtraInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo} message ExtraInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtraInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults)
                            object.remark = "";
                        if (message.remark != null && message.hasOwnProperty("remark"))
                            object.remark = message.remark;
                        return object;
                    };

                    /**
                     * Converts this ExtraInfo to JSON.
                     * @function toJSON
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtraInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ExtraInfo
                     * @function getTypeUrl
                     * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExtraInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo";
                    };

                    return ExtraInfo;
                })();

                return Bet;
            })();

            BJSeat.Reckon = (function() {

                /**
                 * Properties of a Reckon.
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
                 * @interface IReckon
                 * @property {number|null} [playtype] Reckon playtype
                 * @property {number|null} [win] Reckon win
                 */

                /**
                 * Constructs a new Reckon.
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat
                 * @classdesc Represents a Reckon.
                 * @implements IReckon
                 * @constructor
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon=} [properties] Properties to set
                 */
                function Reckon(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Reckon playtype.
                 * @member {number} playtype
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @instance
                 */
                Reckon.prototype.playtype = 0;

                /**
                 * Reckon win.
                 * @member {number} win
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @instance
                 */
                Reckon.prototype.win = 0;

                /**
                 * Creates a new Reckon instance using the specified properties.
                 * @function create
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon=} [properties] Properties to set
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon} Reckon instance
                 */
                Reckon.create = function create(properties) {
                    return new Reckon(properties);
                };

                /**
                 * Encodes the specified Reckon message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.verify|verify} messages.
                 * @function encode
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon} message Reckon message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reckon.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.playtype != null && Object.hasOwnProperty.call(message, "playtype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playtype);
                    if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.win);
                    return writer;
                };

                /**
                 * Encodes the specified Reckon message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon} message Reckon message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reckon.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Reckon message from the specified reader or buffer.
                 * @function decode
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon} Reckon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reckon.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.playtype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.win = reader.double();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Reckon message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon} Reckon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reckon.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Reckon message.
                 * @function verify
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Reckon.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.playtype != null && message.hasOwnProperty("playtype"))
                        if (!$util.isInteger(message.playtype))
                            return "playtype: integer expected";
                    if (message.win != null && message.hasOwnProperty("win"))
                        if (typeof message.win !== "number")
                            return "win: number expected";
                    return null;
                };

                /**
                 * Creates a Reckon message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon} Reckon
                 */
                Reckon.fromObject = function fromObject(object) {
                    if (object instanceof $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon)
                        return object;
                    let message = new $root.DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon();
                    if (object.playtype != null)
                        message.playtype = object.playtype | 0;
                    if (object.win != null)
                        message.win = Number(object.win);
                    return message;
                };

                /**
                 * Creates a plain object from a Reckon message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon} message Reckon
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Reckon.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.playtype = 0;
                        object.win = 0;
                    }
                    if (message.playtype != null && message.hasOwnProperty("playtype"))
                        object.playtype = message.playtype;
                    if (message.win != null && message.hasOwnProperty("win"))
                        object.win = options.json && !isFinite(message.win) ? String(message.win) : message.win;
                    return object;
                };

                /**
                 * Converts this Reckon to JSON.
                 * @function toJSON
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Reckon.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Reckon
                 * @function getTypeUrl
                 * @memberof DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Reckon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon";
                };

                return Reckon;
            })();

            return BJSeat;
        })();

        return BJGameSnapshot;
    })();

    DataServerBlackJackProto.RoomStateItem = (function() {

        /**
         * Properties of a RoomStateItem.
         * @memberof DataServerBlackJackProto
         * @interface IRoomStateItem
         * @property {number|null} [key] RoomStateItem key
         * @property {Array.<number>|null} [count] RoomStateItem count
         */

        /**
         * Constructs a new RoomStateItem.
         * @memberof DataServerBlackJackProto
         * @classdesc Represents a RoomStateItem.
         * @implements IRoomStateItem
         * @constructor
         * @param {DataServerBlackJackProto.IRoomStateItem=} [properties] Properties to set
         */
        function RoomStateItem(properties) {
            this.count = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomStateItem key.
         * @member {number} key
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @instance
         */
        RoomStateItem.prototype.key = 0;

        /**
         * RoomStateItem count.
         * @member {Array.<number>} count
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @instance
         */
        RoomStateItem.prototype.count = $util.emptyArray;

        /**
         * Creates a new RoomStateItem instance using the specified properties.
         * @function create
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {DataServerBlackJackProto.IRoomStateItem=} [properties] Properties to set
         * @returns {DataServerBlackJackProto.RoomStateItem} RoomStateItem instance
         */
        RoomStateItem.create = function create(properties) {
            return new RoomStateItem(properties);
        };

        /**
         * Encodes the specified RoomStateItem message. Does not implicitly {@link DataServerBlackJackProto.RoomStateItem.verify|verify} messages.
         * @function encode
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {DataServerBlackJackProto.IRoomStateItem} message RoomStateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomStateItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
            if (message.count != null && message.count.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (let i = 0; i < message.count.length; ++i)
                    writer.int32(message.count[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RoomStateItem message, length delimited. Does not implicitly {@link DataServerBlackJackProto.RoomStateItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {DataServerBlackJackProto.IRoomStateItem} message RoomStateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomStateItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomStateItem message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerBlackJackProto.RoomStateItem} RoomStateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomStateItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.RoomStateItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.int32();
                        break;
                    }
                case 10: {
                        if (!(message.count && message.count.length))
                            message.count = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.count.push(reader.int32());
                        } else
                            message.count.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomStateItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerBlackJackProto.RoomStateItem} RoomStateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomStateItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomStateItem message.
         * @function verify
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomStateItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.count != null && message.hasOwnProperty("count")) {
                if (!Array.isArray(message.count))
                    return "count: array expected";
                for (let i = 0; i < message.count.length; ++i)
                    if (!$util.isInteger(message.count[i]))
                        return "count: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RoomStateItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerBlackJackProto.RoomStateItem} RoomStateItem
         */
        RoomStateItem.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerBlackJackProto.RoomStateItem)
                return object;
            let message = new $root.DataServerBlackJackProto.RoomStateItem();
            if (object.key != null)
                message.key = object.key | 0;
            if (object.count) {
                if (!Array.isArray(object.count))
                    throw TypeError(".DataServerBlackJackProto.RoomStateItem.count: array expected");
                message.count = [];
                for (let i = 0; i < object.count.length; ++i)
                    message.count[i] = object.count[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomStateItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {DataServerBlackJackProto.RoomStateItem} message RoomStateItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomStateItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.count = [];
            if (options.defaults)
                object.key = 0;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.count && message.count.length) {
                object.count = [];
                for (let j = 0; j < message.count.length; ++j)
                    object.count[j] = message.count[j];
            }
            return object;
        };

        /**
         * Converts this RoomStateItem to JSON.
         * @function toJSON
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomStateItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomStateItem
         * @function getTypeUrl
         * @memberof DataServerBlackJackProto.RoomStateItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomStateItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerBlackJackProto.RoomStateItem";
        };

        return RoomStateItem;
    })();

    DataServerBlackJackProto.RoomState = (function() {

        /**
         * Properties of a RoomState.
         * @memberof DataServerBlackJackProto
         * @interface IRoomState
         * @property {string|null} [vid] RoomState vid
         * @property {string|null} [gmcode] RoomState gmcode
         * @property {DataServerBlackJackProto.IRoomStateItem|null} [room] RoomState room
         * @property {Array.<DataServerBlackJackProto.IRoomStateItem>|null} [cardlists] RoomState cardlists
         */

        /**
         * Constructs a new RoomState.
         * @memberof DataServerBlackJackProto
         * @classdesc Represents a RoomState.
         * @implements IRoomState
         * @constructor
         * @param {DataServerBlackJackProto.IRoomState=} [properties] Properties to set
         */
        function RoomState(properties) {
            this.cardlists = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomState vid.
         * @member {string} vid
         * @memberof DataServerBlackJackProto.RoomState
         * @instance
         */
        RoomState.prototype.vid = "";

        /**
         * RoomState gmcode.
         * @member {string} gmcode
         * @memberof DataServerBlackJackProto.RoomState
         * @instance
         */
        RoomState.prototype.gmcode = "";

        /**
         * RoomState room.
         * @member {DataServerBlackJackProto.IRoomStateItem|null|undefined} room
         * @memberof DataServerBlackJackProto.RoomState
         * @instance
         */
        RoomState.prototype.room = null;

        /**
         * RoomState cardlists.
         * @member {Array.<DataServerBlackJackProto.IRoomStateItem>} cardlists
         * @memberof DataServerBlackJackProto.RoomState
         * @instance
         */
        RoomState.prototype.cardlists = $util.emptyArray;

        /**
         * Creates a new RoomState instance using the specified properties.
         * @function create
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {DataServerBlackJackProto.IRoomState=} [properties] Properties to set
         * @returns {DataServerBlackJackProto.RoomState} RoomState instance
         */
        RoomState.create = function create(properties) {
            return new RoomState(properties);
        };

        /**
         * Encodes the specified RoomState message. Does not implicitly {@link DataServerBlackJackProto.RoomState.verify|verify} messages.
         * @function encode
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {DataServerBlackJackProto.IRoomState} message RoomState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.DataServerBlackJackProto.RoomStateItem.encode(message.room, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.cardlists != null && message.cardlists.length)
                for (let i = 0; i < message.cardlists.length; ++i)
                    $root.DataServerBlackJackProto.RoomStateItem.encode(message.cardlists[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomState message, length delimited. Does not implicitly {@link DataServerBlackJackProto.RoomState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {DataServerBlackJackProto.IRoomState} message RoomState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomState message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerBlackJackProto.RoomState} RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.RoomState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 11: {
                        message.room = $root.DataServerBlackJackProto.RoomStateItem.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        if (!(message.cardlists && message.cardlists.length))
                            message.cardlists = [];
                        message.cardlists.push($root.DataServerBlackJackProto.RoomStateItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerBlackJackProto.RoomState} RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomState message.
         * @function verify
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.room != null && message.hasOwnProperty("room")) {
                let error = $root.DataServerBlackJackProto.RoomStateItem.verify(message.room);
                if (error)
                    return "room." + error;
            }
            if (message.cardlists != null && message.hasOwnProperty("cardlists")) {
                if (!Array.isArray(message.cardlists))
                    return "cardlists: array expected";
                for (let i = 0; i < message.cardlists.length; ++i) {
                    let error = $root.DataServerBlackJackProto.RoomStateItem.verify(message.cardlists[i]);
                    if (error)
                        return "cardlists." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerBlackJackProto.RoomState} RoomState
         */
        RoomState.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerBlackJackProto.RoomState)
                return object;
            let message = new $root.DataServerBlackJackProto.RoomState();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".DataServerBlackJackProto.RoomState.room: object expected");
                message.room = $root.DataServerBlackJackProto.RoomStateItem.fromObject(object.room);
            }
            if (object.cardlists) {
                if (!Array.isArray(object.cardlists))
                    throw TypeError(".DataServerBlackJackProto.RoomState.cardlists: array expected");
                message.cardlists = [];
                for (let i = 0; i < object.cardlists.length; ++i) {
                    if (typeof object.cardlists[i] !== "object")
                        throw TypeError(".DataServerBlackJackProto.RoomState.cardlists: object expected");
                    message.cardlists[i] = $root.DataServerBlackJackProto.RoomStateItem.fromObject(object.cardlists[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {DataServerBlackJackProto.RoomState} message RoomState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.cardlists = [];
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.room = null;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.DataServerBlackJackProto.RoomStateItem.toObject(message.room, options);
            if (message.cardlists && message.cardlists.length) {
                object.cardlists = [];
                for (let j = 0; j < message.cardlists.length; ++j)
                    object.cardlists[j] = $root.DataServerBlackJackProto.RoomStateItem.toObject(message.cardlists[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomState to JSON.
         * @function toJSON
         * @memberof DataServerBlackJackProto.RoomState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomState
         * @function getTypeUrl
         * @memberof DataServerBlackJackProto.RoomState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerBlackJackProto.RoomState";
        };

        return RoomState;
    })();

    DataServerBlackJackProto.DealerToolStat = (function() {

        /**
         * Properties of a DealerToolStat.
         * @memberof DataServerBlackJackProto
         * @interface IDealerToolStat
         * @property {string|null} [vid] DealerToolStat vid
         * @property {string|null} [gmcode] DealerToolStat gmcode
         * @property {DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats|null} [abjstat] DealerToolStat abjstat
         */

        /**
         * Constructs a new DealerToolStat.
         * @memberof DataServerBlackJackProto
         * @classdesc Represents a DealerToolStat.
         * @implements IDealerToolStat
         * @constructor
         * @param {DataServerBlackJackProto.IDealerToolStat=} [properties] Properties to set
         */
        function DealerToolStat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DealerToolStat vid.
         * @member {string} vid
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @instance
         */
        DealerToolStat.prototype.vid = "";

        /**
         * DealerToolStat gmcode.
         * @member {string} gmcode
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @instance
         */
        DealerToolStat.prototype.gmcode = "";

        /**
         * DealerToolStat abjstat.
         * @member {DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats|null|undefined} abjstat
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @instance
         */
        DealerToolStat.prototype.abjstat = null;

        /**
         * Creates a new DealerToolStat instance using the specified properties.
         * @function create
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {DataServerBlackJackProto.IDealerToolStat=} [properties] Properties to set
         * @returns {DataServerBlackJackProto.DealerToolStat} DealerToolStat instance
         */
        DealerToolStat.create = function create(properties) {
            return new DealerToolStat(properties);
        };

        /**
         * Encodes the specified DealerToolStat message. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.verify|verify} messages.
         * @function encode
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {DataServerBlackJackProto.IDealerToolStat} message DealerToolStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerToolStat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.abjstat != null && Object.hasOwnProperty.call(message, "abjstat"))
                $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.encode(message.abjstat, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DealerToolStat message, length delimited. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {DataServerBlackJackProto.IDealerToolStat} message DealerToolStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerToolStat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DealerToolStat message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerBlackJackProto.DealerToolStat} DealerToolStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerToolStat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.DealerToolStat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.abjstat = $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DealerToolStat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerBlackJackProto.DealerToolStat} DealerToolStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerToolStat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DealerToolStat message.
         * @function verify
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DealerToolStat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.abjstat != null && message.hasOwnProperty("abjstat")) {
                let error = $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.verify(message.abjstat);
                if (error)
                    return "abjstat." + error;
            }
            return null;
        };

        /**
         * Creates a DealerToolStat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerBlackJackProto.DealerToolStat} DealerToolStat
         */
        DealerToolStat.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerBlackJackProto.DealerToolStat)
                return object;
            let message = new $root.DataServerBlackJackProto.DealerToolStat();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.abjstat != null) {
                if (typeof object.abjstat !== "object")
                    throw TypeError(".DataServerBlackJackProto.DealerToolStat.abjstat: object expected");
                message.abjstat = $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.fromObject(object.abjstat);
            }
            return message;
        };

        /**
         * Creates a plain object from a DealerToolStat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {DataServerBlackJackProto.DealerToolStat} message DealerToolStat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DealerToolStat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.abjstat = null;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.abjstat != null && message.hasOwnProperty("abjstat"))
                object.abjstat = $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.toObject(message.abjstat, options);
            return object;
        };

        /**
         * Converts this DealerToolStat to JSON.
         * @function toJSON
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DealerToolStat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DealerToolStat
         * @function getTypeUrl
         * @memberof DataServerBlackJackProto.DealerToolStat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DealerToolStat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerBlackJackProto.DealerToolStat";
        };

        DealerToolStat.ABJDealerToolStats = (function() {

            /**
             * Properties of a ABJDealerToolStats.
             * @memberof DataServerBlackJackProto.DealerToolStat
             * @interface IABJDealerToolStats
             * @property {number|null} [insuredplayers] ABJDealerToolStats insuredplayers
             * @property {number|null} [totalplayers] ABJDealerToolStats totalplayers
             */

            /**
             * Constructs a new ABJDealerToolStats.
             * @memberof DataServerBlackJackProto.DealerToolStat
             * @classdesc Represents a ABJDealerToolStats.
             * @implements IABJDealerToolStats
             * @constructor
             * @param {DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats=} [properties] Properties to set
             */
            function ABJDealerToolStats(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ABJDealerToolStats insuredplayers.
             * @member {number} insuredplayers
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @instance
             */
            ABJDealerToolStats.prototype.insuredplayers = 0;

            /**
             * ABJDealerToolStats totalplayers.
             * @member {number} totalplayers
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @instance
             */
            ABJDealerToolStats.prototype.totalplayers = 0;

            /**
             * Creates a new ABJDealerToolStats instance using the specified properties.
             * @function create
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats=} [properties] Properties to set
             * @returns {DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats} ABJDealerToolStats instance
             */
            ABJDealerToolStats.create = function create(properties) {
                return new ABJDealerToolStats(properties);
            };

            /**
             * Encodes the specified ABJDealerToolStats message. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.verify|verify} messages.
             * @function encode
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats} message ABJDealerToolStats message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ABJDealerToolStats.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.insuredplayers != null && Object.hasOwnProperty.call(message, "insuredplayers"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.insuredplayers);
                if (message.totalplayers != null && Object.hasOwnProperty.call(message, "totalplayers"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalplayers);
                return writer;
            };

            /**
             * Encodes the specified ABJDealerToolStats message, length delimited. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats} message ABJDealerToolStats message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ABJDealerToolStats.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ABJDealerToolStats message from the specified reader or buffer.
             * @function decode
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats} ABJDealerToolStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ABJDealerToolStats.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.insuredplayers = reader.int32();
                            break;
                        }
                    case 2: {
                            message.totalplayers = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ABJDealerToolStats message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats} ABJDealerToolStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ABJDealerToolStats.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ABJDealerToolStats message.
             * @function verify
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ABJDealerToolStats.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.insuredplayers != null && message.hasOwnProperty("insuredplayers"))
                    if (!$util.isInteger(message.insuredplayers))
                        return "insuredplayers: integer expected";
                if (message.totalplayers != null && message.hasOwnProperty("totalplayers"))
                    if (!$util.isInteger(message.totalplayers))
                        return "totalplayers: integer expected";
                return null;
            };

            /**
             * Creates a ABJDealerToolStats message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats} ABJDealerToolStats
             */
            ABJDealerToolStats.fromObject = function fromObject(object) {
                if (object instanceof $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats)
                    return object;
                let message = new $root.DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats();
                if (object.insuredplayers != null)
                    message.insuredplayers = object.insuredplayers | 0;
                if (object.totalplayers != null)
                    message.totalplayers = object.totalplayers | 0;
                return message;
            };

            /**
             * Creates a plain object from a ABJDealerToolStats message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats} message ABJDealerToolStats
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ABJDealerToolStats.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.insuredplayers = 0;
                    object.totalplayers = 0;
                }
                if (message.insuredplayers != null && message.hasOwnProperty("insuredplayers"))
                    object.insuredplayers = message.insuredplayers;
                if (message.totalplayers != null && message.hasOwnProperty("totalplayers"))
                    object.totalplayers = message.totalplayers;
                return object;
            };

            /**
             * Converts this ABJDealerToolStats to JSON.
             * @function toJSON
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ABJDealerToolStats.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ABJDealerToolStats
             * @function getTypeUrl
             * @memberof DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ABJDealerToolStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats";
            };

            return ABJDealerToolStats;
        })();

        return DealerToolStat;
    })();

    return DataServerBlackJackProto;
})();

export const BonusProto = $root.BonusProto = (() => {

    /**
     * Namespace BonusProto.
     * @exports BonusProto
     * @namespace
     */
    const BonusProto = {};

    /**
     * BonusState enum.
     * @name BonusProto.BonusState
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} PICK=1 PICK value
     * @property {number} PICK_ENDED=2 PICK_ENDED value
     * @property {number} FLIP=4 FLIP value
     * @property {number} FLIP_ENDED=8 FLIP_ENDED value
     */
    BonusProto.BonusState = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "PICK"] = 1;
        values[valuesById[2] = "PICK_ENDED"] = 2;
        values[valuesById[4] = "FLIP"] = 4;
        values[valuesById[8] = "FLIP_ENDED"] = 8;
        return values;
    })();

    BonusProto.BonusCoinFlip = (function() {

        /**
         * Properties of a BonusCoinFlip.
         * @memberof BonusProto
         * @interface IBonusCoinFlip
         * @property {number|null} [result] BonusCoinFlip result
         * @property {Array.<number>|null} [odds] BonusCoinFlip odds
         */

        /**
         * Constructs a new BonusCoinFlip.
         * @memberof BonusProto
         * @classdesc Represents a BonusCoinFlip.
         * @implements IBonusCoinFlip
         * @constructor
         * @param {BonusProto.IBonusCoinFlip=} [properties] Properties to set
         */
        function BonusCoinFlip(properties) {
            this.odds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BonusCoinFlip result.
         * @member {number} result
         * @memberof BonusProto.BonusCoinFlip
         * @instance
         */
        BonusCoinFlip.prototype.result = 0;

        /**
         * BonusCoinFlip odds.
         * @member {Array.<number>} odds
         * @memberof BonusProto.BonusCoinFlip
         * @instance
         */
        BonusCoinFlip.prototype.odds = $util.emptyArray;

        /**
         * Creates a new BonusCoinFlip instance using the specified properties.
         * @function create
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {BonusProto.IBonusCoinFlip=} [properties] Properties to set
         * @returns {BonusProto.BonusCoinFlip} BonusCoinFlip instance
         */
        BonusCoinFlip.create = function create(properties) {
            return new BonusCoinFlip(properties);
        };

        /**
         * Encodes the specified BonusCoinFlip message. Does not implicitly {@link BonusProto.BonusCoinFlip.verify|verify} messages.
         * @function encode
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {BonusProto.IBonusCoinFlip} message BonusCoinFlip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BonusCoinFlip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.odds != null && message.odds.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.odds.length; ++i)
                    writer.uint32(message.odds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BonusCoinFlip message, length delimited. Does not implicitly {@link BonusProto.BonusCoinFlip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {BonusProto.IBonusCoinFlip} message BonusCoinFlip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BonusCoinFlip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BonusCoinFlip message from the specified reader or buffer.
         * @function decode
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BonusProto.BonusCoinFlip} BonusCoinFlip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BonusCoinFlip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BonusProto.BonusCoinFlip();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.result = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.odds && message.odds.length))
                            message.odds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.odds.push(reader.uint32());
                        } else
                            message.odds.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BonusCoinFlip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BonusProto.BonusCoinFlip} BonusCoinFlip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BonusCoinFlip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BonusCoinFlip message.
         * @function verify
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BonusCoinFlip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.odds != null && message.hasOwnProperty("odds")) {
                if (!Array.isArray(message.odds))
                    return "odds: array expected";
                for (let i = 0; i < message.odds.length; ++i)
                    if (!$util.isInteger(message.odds[i]))
                        return "odds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a BonusCoinFlip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BonusProto.BonusCoinFlip} BonusCoinFlip
         */
        BonusCoinFlip.fromObject = function fromObject(object) {
            if (object instanceof $root.BonusProto.BonusCoinFlip)
                return object;
            let message = new $root.BonusProto.BonusCoinFlip();
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.odds) {
                if (!Array.isArray(object.odds))
                    throw TypeError(".BonusProto.BonusCoinFlip.odds: array expected");
                message.odds = [];
                for (let i = 0; i < object.odds.length; ++i)
                    message.odds[i] = object.odds[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a BonusCoinFlip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {BonusProto.BonusCoinFlip} message BonusCoinFlip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BonusCoinFlip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.odds = [];
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.odds && message.odds.length) {
                object.odds = [];
                for (let j = 0; j < message.odds.length; ++j)
                    object.odds[j] = message.odds[j];
            }
            return object;
        };

        /**
         * Converts this BonusCoinFlip to JSON.
         * @function toJSON
         * @memberof BonusProto.BonusCoinFlip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BonusCoinFlip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BonusCoinFlip
         * @function getTypeUrl
         * @memberof BonusProto.BonusCoinFlip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BonusCoinFlip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/BonusProto.BonusCoinFlip";
        };

        return BonusCoinFlip;
    })();

    BonusProto.BonusPick = (function() {

        /**
         * Properties of a BonusPick.
         * @memberof BonusProto
         * @interface IBonusPick
         * @property {Array.<number>|null} [odds] BonusPick odds
         */

        /**
         * Constructs a new BonusPick.
         * @memberof BonusProto
         * @classdesc Represents a BonusPick.
         * @implements IBonusPick
         * @constructor
         * @param {BonusProto.IBonusPick=} [properties] Properties to set
         */
        function BonusPick(properties) {
            this.odds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BonusPick odds.
         * @member {Array.<number>} odds
         * @memberof BonusProto.BonusPick
         * @instance
         */
        BonusPick.prototype.odds = $util.emptyArray;

        /**
         * Creates a new BonusPick instance using the specified properties.
         * @function create
         * @memberof BonusProto.BonusPick
         * @static
         * @param {BonusProto.IBonusPick=} [properties] Properties to set
         * @returns {BonusProto.BonusPick} BonusPick instance
         */
        BonusPick.create = function create(properties) {
            return new BonusPick(properties);
        };

        /**
         * Encodes the specified BonusPick message. Does not implicitly {@link BonusProto.BonusPick.verify|verify} messages.
         * @function encode
         * @memberof BonusProto.BonusPick
         * @static
         * @param {BonusProto.IBonusPick} message BonusPick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BonusPick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.odds != null && message.odds.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.odds.length; ++i)
                    writer.uint32(message.odds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BonusPick message, length delimited. Does not implicitly {@link BonusProto.BonusPick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BonusProto.BonusPick
         * @static
         * @param {BonusProto.IBonusPick} message BonusPick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BonusPick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BonusPick message from the specified reader or buffer.
         * @function decode
         * @memberof BonusProto.BonusPick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BonusProto.BonusPick} BonusPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BonusPick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BonusProto.BonusPick();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.odds && message.odds.length))
                            message.odds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.odds.push(reader.uint32());
                        } else
                            message.odds.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BonusPick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BonusProto.BonusPick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BonusProto.BonusPick} BonusPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BonusPick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BonusPick message.
         * @function verify
         * @memberof BonusProto.BonusPick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BonusPick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.odds != null && message.hasOwnProperty("odds")) {
                if (!Array.isArray(message.odds))
                    return "odds: array expected";
                for (let i = 0; i < message.odds.length; ++i)
                    if (!$util.isInteger(message.odds[i]))
                        return "odds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a BonusPick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BonusProto.BonusPick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BonusProto.BonusPick} BonusPick
         */
        BonusPick.fromObject = function fromObject(object) {
            if (object instanceof $root.BonusProto.BonusPick)
                return object;
            let message = new $root.BonusProto.BonusPick();
            if (object.odds) {
                if (!Array.isArray(object.odds))
                    throw TypeError(".BonusProto.BonusPick.odds: array expected");
                message.odds = [];
                for (let i = 0; i < object.odds.length; ++i)
                    message.odds[i] = object.odds[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a BonusPick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BonusProto.BonusPick
         * @static
         * @param {BonusProto.BonusPick} message BonusPick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BonusPick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.odds = [];
            if (message.odds && message.odds.length) {
                object.odds = [];
                for (let j = 0; j < message.odds.length; ++j)
                    object.odds[j] = message.odds[j];
            }
            return object;
        };

        /**
         * Converts this BonusPick to JSON.
         * @function toJSON
         * @memberof BonusProto.BonusPick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BonusPick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BonusPick
         * @function getTypeUrl
         * @memberof BonusProto.BonusPick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BonusPick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/BonusProto.BonusPick";
        };

        return BonusPick;
    })();

    BonusProto.Bonus = (function() {

        /**
         * Properties of a Bonus.
         * @memberof BonusProto
         * @interface IBonus
         * @property {number|null} [state] Bonus state
         * @property {Array.<number>|null} [counters] Bonus counters
         * @property {BonusProto.IBonusPick|null} [pick] Bonus pick
         * @property {BonusProto.IBonusCoinFlip|null} [coinflip] Bonus coinflip
         */

        /**
         * Constructs a new Bonus.
         * @memberof BonusProto
         * @classdesc Represents a Bonus.
         * @implements IBonus
         * @constructor
         * @param {BonusProto.IBonus=} [properties] Properties to set
         */
        function Bonus(properties) {
            this.counters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bonus state.
         * @member {number} state
         * @memberof BonusProto.Bonus
         * @instance
         */
        Bonus.prototype.state = 0;

        /**
         * Bonus counters.
         * @member {Array.<number>} counters
         * @memberof BonusProto.Bonus
         * @instance
         */
        Bonus.prototype.counters = $util.emptyArray;

        /**
         * Bonus pick.
         * @member {BonusProto.IBonusPick|null|undefined} pick
         * @memberof BonusProto.Bonus
         * @instance
         */
        Bonus.prototype.pick = null;

        /**
         * Bonus coinflip.
         * @member {BonusProto.IBonusCoinFlip|null|undefined} coinflip
         * @memberof BonusProto.Bonus
         * @instance
         */
        Bonus.prototype.coinflip = null;

        /**
         * Creates a new Bonus instance using the specified properties.
         * @function create
         * @memberof BonusProto.Bonus
         * @static
         * @param {BonusProto.IBonus=} [properties] Properties to set
         * @returns {BonusProto.Bonus} Bonus instance
         */
        Bonus.create = function create(properties) {
            return new Bonus(properties);
        };

        /**
         * Encodes the specified Bonus message. Does not implicitly {@link BonusProto.Bonus.verify|verify} messages.
         * @function encode
         * @memberof BonusProto.Bonus
         * @static
         * @param {BonusProto.IBonus} message Bonus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bonus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.state);
            if (message.counters != null && message.counters.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.counters.length; ++i)
                    writer.uint32(message.counters[i]);
                writer.ldelim();
            }
            if (message.pick != null && Object.hasOwnProperty.call(message, "pick"))
                $root.BonusProto.BonusPick.encode(message.pick, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.coinflip != null && Object.hasOwnProperty.call(message, "coinflip"))
                $root.BonusProto.BonusCoinFlip.encode(message.coinflip, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bonus message, length delimited. Does not implicitly {@link BonusProto.Bonus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BonusProto.Bonus
         * @static
         * @param {BonusProto.IBonus} message Bonus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bonus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bonus message from the specified reader or buffer.
         * @function decode
         * @memberof BonusProto.Bonus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BonusProto.Bonus} Bonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bonus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BonusProto.Bonus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.counters && message.counters.length))
                            message.counters = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.counters.push(reader.uint32());
                        } else
                            message.counters.push(reader.uint32());
                        break;
                    }
                case 10: {
                        message.pick = $root.BonusProto.BonusPick.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.coinflip = $root.BonusProto.BonusCoinFlip.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bonus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BonusProto.Bonus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BonusProto.Bonus} Bonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bonus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bonus message.
         * @function verify
         * @memberof BonusProto.Bonus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bonus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.counters != null && message.hasOwnProperty("counters")) {
                if (!Array.isArray(message.counters))
                    return "counters: array expected";
                for (let i = 0; i < message.counters.length; ++i)
                    if (!$util.isInteger(message.counters[i]))
                        return "counters: integer[] expected";
            }
            if (message.pick != null && message.hasOwnProperty("pick")) {
                let error = $root.BonusProto.BonusPick.verify(message.pick);
                if (error)
                    return "pick." + error;
            }
            if (message.coinflip != null && message.hasOwnProperty("coinflip")) {
                let error = $root.BonusProto.BonusCoinFlip.verify(message.coinflip);
                if (error)
                    return "coinflip." + error;
            }
            return null;
        };

        /**
         * Creates a Bonus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BonusProto.Bonus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BonusProto.Bonus} Bonus
         */
        Bonus.fromObject = function fromObject(object) {
            if (object instanceof $root.BonusProto.Bonus)
                return object;
            let message = new $root.BonusProto.Bonus();
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.counters) {
                if (!Array.isArray(object.counters))
                    throw TypeError(".BonusProto.Bonus.counters: array expected");
                message.counters = [];
                for (let i = 0; i < object.counters.length; ++i)
                    message.counters[i] = object.counters[i] >>> 0;
            }
            if (object.pick != null) {
                if (typeof object.pick !== "object")
                    throw TypeError(".BonusProto.Bonus.pick: object expected");
                message.pick = $root.BonusProto.BonusPick.fromObject(object.pick);
            }
            if (object.coinflip != null) {
                if (typeof object.coinflip !== "object")
                    throw TypeError(".BonusProto.Bonus.coinflip: object expected");
                message.coinflip = $root.BonusProto.BonusCoinFlip.fromObject(object.coinflip);
            }
            return message;
        };

        /**
         * Creates a plain object from a Bonus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BonusProto.Bonus
         * @static
         * @param {BonusProto.Bonus} message Bonus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bonus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.counters = [];
            if (options.defaults) {
                object.state = 0;
                object.pick = null;
                object.coinflip = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.counters && message.counters.length) {
                object.counters = [];
                for (let j = 0; j < message.counters.length; ++j)
                    object.counters[j] = message.counters[j];
            }
            if (message.pick != null && message.hasOwnProperty("pick"))
                object.pick = $root.BonusProto.BonusPick.toObject(message.pick, options);
            if (message.coinflip != null && message.hasOwnProperty("coinflip"))
                object.coinflip = $root.BonusProto.BonusCoinFlip.toObject(message.coinflip, options);
            return object;
        };

        /**
         * Converts this Bonus to JSON.
         * @function toJSON
         * @memberof BonusProto.Bonus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bonus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bonus
         * @function getTypeUrl
         * @memberof BonusProto.Bonus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bonus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/BonusProto.Bonus";
        };

        return Bonus;
    })();

    return BonusProto;
})();

export const CommonProto = $root.CommonProto = (() => {

    /**
     * Namespace CommonProto.
     * @exports CommonProto
     * @namespace
     */
    const CommonProto = {};

    CommonProto.GameSnapshot = (function() {

        /**
         * Properties of a GameSnapshot.
         * @memberof CommonProto
         * @interface IGameSnapshot
         * @property {string|null} [gmtype] GameSnapshot gmtype
         * @property {string|null} [gmcode] GameSnapshot gmcode
         * @property {number|null} [gmstatus] GameSnapshot gmstatus
         * @property {number|null} [maxtimeout] GameSnapshot maxtimeout
         * @property {number|null} [timeout] GameSnapshot timeout
         * @property {number|null} [shoecode] GameSnapshot shoecode
         * @property {Array.<number>|null} [bcard] GameSnapshot bcard
         * @property {Array.<number>|null} [pcard] GameSnapshot pcard
         * @property {number|null} [dispatch] GameSnapshot dispatch
         * @property {number|null} [hidden] GameSnapshot hidden
         * @property {BonusProto.IBonus|null} [bonus] GameSnapshot bonus
         */

        /**
         * Constructs a new GameSnapshot.
         * @memberof CommonProto
         * @classdesc Represents a GameSnapshot.
         * @implements IGameSnapshot
         * @constructor
         * @param {CommonProto.IGameSnapshot=} [properties] Properties to set
         */
        function GameSnapshot(properties) {
            this.bcard = [];
            this.pcard = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSnapshot gmtype.
         * @member {string} gmtype
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.gmtype = "";

        /**
         * GameSnapshot gmcode.
         * @member {string} gmcode
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.gmcode = "";

        /**
         * GameSnapshot gmstatus.
         * @member {number} gmstatus
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.gmstatus = 0;

        /**
         * GameSnapshot maxtimeout.
         * @member {number} maxtimeout
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.maxtimeout = 0;

        /**
         * GameSnapshot timeout.
         * @member {number} timeout
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.timeout = 0;

        /**
         * GameSnapshot shoecode.
         * @member {number} shoecode
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.shoecode = 0;

        /**
         * GameSnapshot bcard.
         * @member {Array.<number>} bcard
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.bcard = $util.emptyArray;

        /**
         * GameSnapshot pcard.
         * @member {Array.<number>} pcard
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.pcard = $util.emptyArray;

        /**
         * GameSnapshot dispatch.
         * @member {number} dispatch
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.dispatch = 0;

        /**
         * GameSnapshot hidden.
         * @member {number} hidden
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.hidden = 0;

        /**
         * GameSnapshot bonus.
         * @member {BonusProto.IBonus|null|undefined} bonus
         * @memberof CommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.bonus = null;

        /**
         * Creates a new GameSnapshot instance using the specified properties.
         * @function create
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {CommonProto.IGameSnapshot=} [properties] Properties to set
         * @returns {CommonProto.GameSnapshot} GameSnapshot instance
         */
        GameSnapshot.create = function create(properties) {
            return new GameSnapshot(properties);
        };

        /**
         * Encodes the specified GameSnapshot message. Does not implicitly {@link CommonProto.GameSnapshot.verify|verify} messages.
         * @function encode
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {CommonProto.IGameSnapshot} message GameSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSnapshot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gmtype != null && Object.hasOwnProperty.call(message, "gmtype"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gmtype);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.gmstatus != null && Object.hasOwnProperty.call(message, "gmstatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gmstatus);
            if (message.maxtimeout != null && Object.hasOwnProperty.call(message, "maxtimeout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxtimeout);
            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.timeout);
            if (message.shoecode != null && Object.hasOwnProperty.call(message, "shoecode"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.shoecode);
            if (message.bcard != null && message.bcard.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (let i = 0; i < message.bcard.length; ++i)
                    writer.int32(message.bcard[i]);
                writer.ldelim();
            }
            if (message.pcard != null && message.pcard.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (let i = 0; i < message.pcard.length; ++i)
                    writer.int32(message.pcard[i]);
                writer.ldelim();
            }
            if (message.dispatch != null && Object.hasOwnProperty.call(message, "dispatch"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.dispatch);
            if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.hidden);
            if (message.bonus != null && Object.hasOwnProperty.call(message, "bonus"))
                $root.BonusProto.Bonus.encode(message.bonus, writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameSnapshot message, length delimited. Does not implicitly {@link CommonProto.GameSnapshot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {CommonProto.IGameSnapshot} message GameSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer.
         * @function decode
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonProto.GameSnapshot} GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSnapshot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonProto.GameSnapshot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gmtype = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.gmstatus = reader.int32();
                        break;
                    }
                case 4: {
                        message.maxtimeout = reader.int32();
                        break;
                    }
                case 5: {
                        message.timeout = reader.int32();
                        break;
                    }
                case 6: {
                        message.shoecode = reader.uint32();
                        break;
                    }
                case 11: {
                        if (!(message.bcard && message.bcard.length))
                            message.bcard = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bcard.push(reader.int32());
                        } else
                            message.bcard.push(reader.int32());
                        break;
                    }
                case 12: {
                        if (!(message.pcard && message.pcard.length))
                            message.pcard = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.pcard.push(reader.int32());
                        } else
                            message.pcard.push(reader.int32());
                        break;
                    }
                case 21: {
                        message.dispatch = reader.uint32();
                        break;
                    }
                case 22: {
                        message.hidden = reader.uint32();
                        break;
                    }
                case 50: {
                        message.bonus = $root.BonusProto.Bonus.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonProto.GameSnapshot} GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSnapshot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSnapshot message.
         * @function verify
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSnapshot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gmtype != null && message.hasOwnProperty("gmtype"))
                if (!$util.isString(message.gmtype))
                    return "gmtype: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.gmstatus != null && message.hasOwnProperty("gmstatus"))
                if (!$util.isInteger(message.gmstatus))
                    return "gmstatus: integer expected";
            if (message.maxtimeout != null && message.hasOwnProperty("maxtimeout"))
                if (!$util.isInteger(message.maxtimeout))
                    return "maxtimeout: integer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.shoecode != null && message.hasOwnProperty("shoecode"))
                if (!$util.isInteger(message.shoecode))
                    return "shoecode: integer expected";
            if (message.bcard != null && message.hasOwnProperty("bcard")) {
                if (!Array.isArray(message.bcard))
                    return "bcard: array expected";
                for (let i = 0; i < message.bcard.length; ++i)
                    if (!$util.isInteger(message.bcard[i]))
                        return "bcard: integer[] expected";
            }
            if (message.pcard != null && message.hasOwnProperty("pcard")) {
                if (!Array.isArray(message.pcard))
                    return "pcard: array expected";
                for (let i = 0; i < message.pcard.length; ++i)
                    if (!$util.isInteger(message.pcard[i]))
                        return "pcard: integer[] expected";
            }
            if (message.dispatch != null && message.hasOwnProperty("dispatch"))
                if (!$util.isInteger(message.dispatch))
                    return "dispatch: integer expected";
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                if (!$util.isInteger(message.hidden))
                    return "hidden: integer expected";
            if (message.bonus != null && message.hasOwnProperty("bonus")) {
                let error = $root.BonusProto.Bonus.verify(message.bonus);
                if (error)
                    return "bonus." + error;
            }
            return null;
        };

        /**
         * Creates a GameSnapshot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonProto.GameSnapshot} GameSnapshot
         */
        GameSnapshot.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonProto.GameSnapshot)
                return object;
            let message = new $root.CommonProto.GameSnapshot();
            if (object.gmtype != null)
                message.gmtype = String(object.gmtype);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.gmstatus != null)
                message.gmstatus = object.gmstatus | 0;
            if (object.maxtimeout != null)
                message.maxtimeout = object.maxtimeout | 0;
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.shoecode != null)
                message.shoecode = object.shoecode >>> 0;
            if (object.bcard) {
                if (!Array.isArray(object.bcard))
                    throw TypeError(".CommonProto.GameSnapshot.bcard: array expected");
                message.bcard = [];
                for (let i = 0; i < object.bcard.length; ++i)
                    message.bcard[i] = object.bcard[i] | 0;
            }
            if (object.pcard) {
                if (!Array.isArray(object.pcard))
                    throw TypeError(".CommonProto.GameSnapshot.pcard: array expected");
                message.pcard = [];
                for (let i = 0; i < object.pcard.length; ++i)
                    message.pcard[i] = object.pcard[i] | 0;
            }
            if (object.dispatch != null)
                message.dispatch = object.dispatch >>> 0;
            if (object.hidden != null)
                message.hidden = object.hidden >>> 0;
            if (object.bonus != null) {
                if (typeof object.bonus !== "object")
                    throw TypeError(".CommonProto.GameSnapshot.bonus: object expected");
                message.bonus = $root.BonusProto.Bonus.fromObject(object.bonus);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameSnapshot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {CommonProto.GameSnapshot} message GameSnapshot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameSnapshot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.bcard = [];
                object.pcard = [];
            }
            if (options.defaults) {
                object.gmtype = "";
                object.gmcode = "";
                object.gmstatus = 0;
                object.maxtimeout = 0;
                object.timeout = 0;
                object.shoecode = 0;
                object.dispatch = 0;
                object.hidden = 0;
                object.bonus = null;
            }
            if (message.gmtype != null && message.hasOwnProperty("gmtype"))
                object.gmtype = message.gmtype;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.gmstatus != null && message.hasOwnProperty("gmstatus"))
                object.gmstatus = message.gmstatus;
            if (message.maxtimeout != null && message.hasOwnProperty("maxtimeout"))
                object.maxtimeout = message.maxtimeout;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.shoecode != null && message.hasOwnProperty("shoecode"))
                object.shoecode = message.shoecode;
            if (message.bcard && message.bcard.length) {
                object.bcard = [];
                for (let j = 0; j < message.bcard.length; ++j)
                    object.bcard[j] = message.bcard[j];
            }
            if (message.pcard && message.pcard.length) {
                object.pcard = [];
                for (let j = 0; j < message.pcard.length; ++j)
                    object.pcard[j] = message.pcard[j];
            }
            if (message.dispatch != null && message.hasOwnProperty("dispatch"))
                object.dispatch = message.dispatch;
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                object.hidden = message.hidden;
            if (message.bonus != null && message.hasOwnProperty("bonus"))
                object.bonus = $root.BonusProto.Bonus.toObject(message.bonus, options);
            return object;
        };

        /**
         * Converts this GameSnapshot to JSON.
         * @function toJSON
         * @memberof CommonProto.GameSnapshot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameSnapshot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameSnapshot
         * @function getTypeUrl
         * @memberof CommonProto.GameSnapshot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameSnapshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CommonProto.GameSnapshot";
        };

        return GameSnapshot;
    })();

    return CommonProto;
})();

export const DataServerCommonProto = $root.DataServerCommonProto = (() => {

    /**
     * Namespace DataServerCommonProto.
     * @exports DataServerCommonProto
     * @namespace
     */
    const DataServerCommonProto = {};

    DataServerCommonProto.DealerLogin = (function() {

        /**
         * Properties of a DealerLogin.
         * @memberof DataServerCommonProto
         * @interface IDealerLogin
         * @property {string|null} [dealername] DealerLogin dealername
         */

        /**
         * Constructs a new DealerLogin.
         * @memberof DataServerCommonProto
         * @classdesc Represents a DealerLogin.
         * @implements IDealerLogin
         * @constructor
         * @param {DataServerCommonProto.IDealerLogin=} [properties] Properties to set
         */
        function DealerLogin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DealerLogin dealername.
         * @member {string} dealername
         * @memberof DataServerCommonProto.DealerLogin
         * @instance
         */
        DealerLogin.prototype.dealername = "";

        /**
         * Creates a new DealerLogin instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {DataServerCommonProto.IDealerLogin=} [properties] Properties to set
         * @returns {DataServerCommonProto.DealerLogin} DealerLogin instance
         */
        DealerLogin.create = function create(properties) {
            return new DealerLogin(properties);
        };

        /**
         * Encodes the specified DealerLogin message. Does not implicitly {@link DataServerCommonProto.DealerLogin.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {DataServerCommonProto.IDealerLogin} message DealerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dealername != null && Object.hasOwnProperty.call(message, "dealername"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.dealername);
            return writer;
        };

        /**
         * Encodes the specified DealerLogin message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {DataServerCommonProto.IDealerLogin} message DealerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DealerLogin message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.DealerLogin} DealerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.DealerLogin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dealername = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DealerLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.DealerLogin} DealerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DealerLogin message.
         * @function verify
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DealerLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dealername != null && message.hasOwnProperty("dealername"))
                if (!$util.isString(message.dealername))
                    return "dealername: string expected";
            return null;
        };

        /**
         * Creates a DealerLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.DealerLogin} DealerLogin
         */
        DealerLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.DealerLogin)
                return object;
            let message = new $root.DataServerCommonProto.DealerLogin();
            if (object.dealername != null)
                message.dealername = String(object.dealername);
            return message;
        };

        /**
         * Creates a plain object from a DealerLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {DataServerCommonProto.DealerLogin} message DealerLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DealerLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.dealername = "";
            if (message.dealername != null && message.hasOwnProperty("dealername"))
                object.dealername = message.dealername;
            return object;
        };

        /**
         * Converts this DealerLogin to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.DealerLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DealerLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DealerLogin
         * @function getTypeUrl
         * @memberof DataServerCommonProto.DealerLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DealerLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.DealerLogin";
        };

        return DealerLogin;
    })();

    DataServerCommonProto.MultiplierItem = (function() {

        /**
         * Properties of a MultiplierItem.
         * @memberof DataServerCommonProto
         * @interface IMultiplierItem
         * @property {number|null} [val] MultiplierItem val
         * @property {number|null} [currOdds] MultiplierItem currOdds
         * @property {number|null} [oldOdds] MultiplierItem oldOdds
         * @property {number|null} [eventtype] MultiplierItem eventtype
         */

        /**
         * Constructs a new MultiplierItem.
         * @memberof DataServerCommonProto
         * @classdesc Represents a MultiplierItem.
         * @implements IMultiplierItem
         * @constructor
         * @param {DataServerCommonProto.IMultiplierItem=} [properties] Properties to set
         */
        function MultiplierItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultiplierItem val.
         * @member {number} val
         * @memberof DataServerCommonProto.MultiplierItem
         * @instance
         */
        MultiplierItem.prototype.val = 0;

        /**
         * MultiplierItem currOdds.
         * @member {number} currOdds
         * @memberof DataServerCommonProto.MultiplierItem
         * @instance
         */
        MultiplierItem.prototype.currOdds = 0;

        /**
         * MultiplierItem oldOdds.
         * @member {number} oldOdds
         * @memberof DataServerCommonProto.MultiplierItem
         * @instance
         */
        MultiplierItem.prototype.oldOdds = 0;

        /**
         * MultiplierItem eventtype.
         * @member {number} eventtype
         * @memberof DataServerCommonProto.MultiplierItem
         * @instance
         */
        MultiplierItem.prototype.eventtype = 0;

        /**
         * Creates a new MultiplierItem instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {DataServerCommonProto.IMultiplierItem=} [properties] Properties to set
         * @returns {DataServerCommonProto.MultiplierItem} MultiplierItem instance
         */
        MultiplierItem.create = function create(properties) {
            return new MultiplierItem(properties);
        };

        /**
         * Encodes the specified MultiplierItem message. Does not implicitly {@link DataServerCommonProto.MultiplierItem.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {DataServerCommonProto.IMultiplierItem} message MultiplierItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiplierItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.val);
            if (message.currOdds != null && Object.hasOwnProperty.call(message, "currOdds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currOdds);
            if (message.oldOdds != null && Object.hasOwnProperty.call(message, "oldOdds"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.oldOdds);
            if (message.eventtype != null && Object.hasOwnProperty.call(message, "eventtype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.eventtype);
            return writer;
        };

        /**
         * Encodes the specified MultiplierItem message, length delimited. Does not implicitly {@link DataServerCommonProto.MultiplierItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {DataServerCommonProto.IMultiplierItem} message MultiplierItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiplierItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MultiplierItem message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.MultiplierItem} MultiplierItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiplierItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.MultiplierItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.val = reader.int32();
                        break;
                    }
                case 2: {
                        message.currOdds = reader.int32();
                        break;
                    }
                case 3: {
                        message.oldOdds = reader.int32();
                        break;
                    }
                case 4: {
                        message.eventtype = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MultiplierItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.MultiplierItem} MultiplierItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiplierItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MultiplierItem message.
         * @function verify
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MultiplierItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val))
                    return "val: integer expected";
            if (message.currOdds != null && message.hasOwnProperty("currOdds"))
                if (!$util.isInteger(message.currOdds))
                    return "currOdds: integer expected";
            if (message.oldOdds != null && message.hasOwnProperty("oldOdds"))
                if (!$util.isInteger(message.oldOdds))
                    return "oldOdds: integer expected";
            if (message.eventtype != null && message.hasOwnProperty("eventtype"))
                if (!$util.isInteger(message.eventtype))
                    return "eventtype: integer expected";
            return null;
        };

        /**
         * Creates a MultiplierItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.MultiplierItem} MultiplierItem
         */
        MultiplierItem.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.MultiplierItem)
                return object;
            let message = new $root.DataServerCommonProto.MultiplierItem();
            if (object.val != null)
                message.val = object.val | 0;
            if (object.currOdds != null)
                message.currOdds = object.currOdds | 0;
            if (object.oldOdds != null)
                message.oldOdds = object.oldOdds | 0;
            if (object.eventtype != null)
                message.eventtype = object.eventtype | 0;
            return message;
        };

        /**
         * Creates a plain object from a MultiplierItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {DataServerCommonProto.MultiplierItem} message MultiplierItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MultiplierItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.val = 0;
                object.currOdds = 0;
                object.oldOdds = 0;
                object.eventtype = 0;
            }
            if (message.val != null && message.hasOwnProperty("val"))
                object.val = message.val;
            if (message.currOdds != null && message.hasOwnProperty("currOdds"))
                object.currOdds = message.currOdds;
            if (message.oldOdds != null && message.hasOwnProperty("oldOdds"))
                object.oldOdds = message.oldOdds;
            if (message.eventtype != null && message.hasOwnProperty("eventtype"))
                object.eventtype = message.eventtype;
            return object;
        };

        /**
         * Converts this MultiplierItem to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.MultiplierItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MultiplierItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MultiplierItem
         * @function getTypeUrl
         * @memberof DataServerCommonProto.MultiplierItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MultiplierItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.MultiplierItem";
        };

        return MultiplierItem;
    })();

    DataServerCommonProto.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof DataServerCommonProto
         * @interface ICard
         * @property {number|null} [val] Card val
         * @property {number|null} [handindex] Card handindex
         * @property {number|null} [cardindex] Card cardindex
         */

        /**
         * Constructs a new Card.
         * @memberof DataServerCommonProto
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {DataServerCommonProto.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card val.
         * @member {number} val
         * @memberof DataServerCommonProto.Card
         * @instance
         */
        Card.prototype.val = 0;

        /**
         * Card handindex.
         * @member {number} handindex
         * @memberof DataServerCommonProto.Card
         * @instance
         */
        Card.prototype.handindex = 0;

        /**
         * Card cardindex.
         * @member {number} cardindex
         * @memberof DataServerCommonProto.Card
         * @instance
         */
        Card.prototype.cardindex = 0;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {DataServerCommonProto.ICard=} [properties] Properties to set
         * @returns {DataServerCommonProto.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link DataServerCommonProto.Card.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {DataServerCommonProto.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.val);
            if (message.handindex != null && Object.hasOwnProperty.call(message, "handindex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.handindex);
            if (message.cardindex != null && Object.hasOwnProperty.call(message, "cardindex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardindex);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link DataServerCommonProto.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {DataServerCommonProto.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.Card();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.val = reader.int32();
                        break;
                    }
                case 2: {
                        message.handindex = reader.int32();
                        break;
                    }
                case 3: {
                        message.cardindex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val))
                    return "val: integer expected";
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                if (!$util.isInteger(message.handindex))
                    return "handindex: integer expected";
            if (message.cardindex != null && message.hasOwnProperty("cardindex"))
                if (!$util.isInteger(message.cardindex))
                    return "cardindex: integer expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.Card)
                return object;
            let message = new $root.DataServerCommonProto.Card();
            if (object.val != null)
                message.val = object.val | 0;
            if (object.handindex != null)
                message.handindex = object.handindex | 0;
            if (object.cardindex != null)
                message.cardindex = object.cardindex | 0;
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {DataServerCommonProto.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.val = 0;
                object.handindex = 0;
                object.cardindex = 0;
            }
            if (message.val != null && message.hasOwnProperty("val"))
                object.val = message.val;
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                object.handindex = message.handindex;
            if (message.cardindex != null && message.hasOwnProperty("cardindex"))
                object.cardindex = message.cardindex;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Card
         * @function getTypeUrl
         * @memberof DataServerCommonProto.Card
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Card.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.Card";
        };

        return Card;
    })();

    DataServerCommonProto.MultiplierEvent = (function() {

        /**
         * Properties of a MultiplierEvent.
         * @memberof DataServerCommonProto
         * @interface IMultiplierEvent
         * @property {string|null} [vid] MultiplierEvent vid
         * @property {string|null} [gmcode] MultiplierEvent gmcode
         * @property {Array.<DataServerCommonProto.IMultiplierItem>|null} [items] MultiplierEvent items
         */

        /**
         * Constructs a new MultiplierEvent.
         * @memberof DataServerCommonProto
         * @classdesc Represents a MultiplierEvent.
         * @implements IMultiplierEvent
         * @constructor
         * @param {DataServerCommonProto.IMultiplierEvent=} [properties] Properties to set
         */
        function MultiplierEvent(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultiplierEvent vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.MultiplierEvent
         * @instance
         */
        MultiplierEvent.prototype.vid = "";

        /**
         * MultiplierEvent gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.MultiplierEvent
         * @instance
         */
        MultiplierEvent.prototype.gmcode = "";

        /**
         * MultiplierEvent items.
         * @member {Array.<DataServerCommonProto.IMultiplierItem>} items
         * @memberof DataServerCommonProto.MultiplierEvent
         * @instance
         */
        MultiplierEvent.prototype.items = $util.emptyArray;

        /**
         * Creates a new MultiplierEvent instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {DataServerCommonProto.IMultiplierEvent=} [properties] Properties to set
         * @returns {DataServerCommonProto.MultiplierEvent} MultiplierEvent instance
         */
        MultiplierEvent.create = function create(properties) {
            return new MultiplierEvent(properties);
        };

        /**
         * Encodes the specified MultiplierEvent message. Does not implicitly {@link DataServerCommonProto.MultiplierEvent.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {DataServerCommonProto.IMultiplierEvent} message MultiplierEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiplierEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.DataServerCommonProto.MultiplierItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MultiplierEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.MultiplierEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {DataServerCommonProto.IMultiplierEvent} message MultiplierEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiplierEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MultiplierEvent message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.MultiplierEvent} MultiplierEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiplierEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.MultiplierEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.DataServerCommonProto.MultiplierItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MultiplierEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.MultiplierEvent} MultiplierEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiplierEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MultiplierEvent message.
         * @function verify
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MultiplierEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.DataServerCommonProto.MultiplierItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MultiplierEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.MultiplierEvent} MultiplierEvent
         */
        MultiplierEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.MultiplierEvent)
                return object;
            let message = new $root.DataServerCommonProto.MultiplierEvent();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".DataServerCommonProto.MultiplierEvent.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".DataServerCommonProto.MultiplierEvent.items: object expected");
                    message.items[i] = $root.DataServerCommonProto.MultiplierItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MultiplierEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {DataServerCommonProto.MultiplierEvent} message MultiplierEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MultiplierEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.DataServerCommonProto.MultiplierItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this MultiplierEvent to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.MultiplierEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MultiplierEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MultiplierEvent
         * @function getTypeUrl
         * @memberof DataServerCommonProto.MultiplierEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MultiplierEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.MultiplierEvent";
        };

        return MultiplierEvent;
    })();

    DataServerCommonProto.RequireNewCard = (function() {

        /**
         * Properties of a RequireNewCard.
         * @memberof DataServerCommonProto
         * @interface IRequireNewCard
         * @property {string|null} [vid] RequireNewCard vid
         * @property {string|null} [gmcode] RequireNewCard gmcode
         * @property {number|null} [handindex] RequireNewCard handindex
         * @property {number|null} [cardindex] RequireNewCard cardindex
         */

        /**
         * Constructs a new RequireNewCard.
         * @memberof DataServerCommonProto
         * @classdesc Represents a RequireNewCard.
         * @implements IRequireNewCard
         * @constructor
         * @param {DataServerCommonProto.IRequireNewCard=} [properties] Properties to set
         */
        function RequireNewCard(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequireNewCard vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.RequireNewCard
         * @instance
         */
        RequireNewCard.prototype.vid = "";

        /**
         * RequireNewCard gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.RequireNewCard
         * @instance
         */
        RequireNewCard.prototype.gmcode = "";

        /**
         * RequireNewCard handindex.
         * @member {number} handindex
         * @memberof DataServerCommonProto.RequireNewCard
         * @instance
         */
        RequireNewCard.prototype.handindex = 0;

        /**
         * RequireNewCard cardindex.
         * @member {number} cardindex
         * @memberof DataServerCommonProto.RequireNewCard
         * @instance
         */
        RequireNewCard.prototype.cardindex = 0;

        /**
         * Creates a new RequireNewCard instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {DataServerCommonProto.IRequireNewCard=} [properties] Properties to set
         * @returns {DataServerCommonProto.RequireNewCard} RequireNewCard instance
         */
        RequireNewCard.create = function create(properties) {
            return new RequireNewCard(properties);
        };

        /**
         * Encodes the specified RequireNewCard message. Does not implicitly {@link DataServerCommonProto.RequireNewCard.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {DataServerCommonProto.IRequireNewCard} message RequireNewCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequireNewCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.handindex != null && Object.hasOwnProperty.call(message, "handindex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handindex);
            if (message.cardindex != null && Object.hasOwnProperty.call(message, "cardindex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cardindex);
            return writer;
        };

        /**
         * Encodes the specified RequireNewCard message, length delimited. Does not implicitly {@link DataServerCommonProto.RequireNewCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {DataServerCommonProto.IRequireNewCard} message RequireNewCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequireNewCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequireNewCard message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.RequireNewCard} RequireNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequireNewCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.RequireNewCard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.handindex = reader.int32();
                        break;
                    }
                case 4: {
                        message.cardindex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequireNewCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.RequireNewCard} RequireNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequireNewCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequireNewCard message.
         * @function verify
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequireNewCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                if (!$util.isInteger(message.handindex))
                    return "handindex: integer expected";
            if (message.cardindex != null && message.hasOwnProperty("cardindex"))
                if (!$util.isInteger(message.cardindex))
                    return "cardindex: integer expected";
            return null;
        };

        /**
         * Creates a RequireNewCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.RequireNewCard} RequireNewCard
         */
        RequireNewCard.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.RequireNewCard)
                return object;
            let message = new $root.DataServerCommonProto.RequireNewCard();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.handindex != null)
                message.handindex = object.handindex | 0;
            if (object.cardindex != null)
                message.cardindex = object.cardindex | 0;
            return message;
        };

        /**
         * Creates a plain object from a RequireNewCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {DataServerCommonProto.RequireNewCard} message RequireNewCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequireNewCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.handindex = 0;
                object.cardindex = 0;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                object.handindex = message.handindex;
            if (message.cardindex != null && message.hasOwnProperty("cardindex"))
                object.cardindex = message.cardindex;
            return object;
        };

        /**
         * Converts this RequireNewCard to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.RequireNewCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequireNewCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequireNewCard
         * @function getTypeUrl
         * @memberof DataServerCommonProto.RequireNewCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequireNewCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.RequireNewCard";
        };

        return RequireNewCard;
    })();

    DataServerCommonProto.NewCard = (function() {

        /**
         * Properties of a NewCard.
         * @memberof DataServerCommonProto
         * @interface INewCard
         * @property {string|null} [vid] NewCard vid
         * @property {string|null} [gmcode] NewCard gmcode
         * @property {Array.<DataServerCommonProto.ICard>|null} [cards] NewCard cards
         * @property {Array.<DataServerCommonProto.IMultiplierItem>|null} [events] NewCard events
         * @property {DataServerCommonProto.NewCard.IExtraInfo|null} [extrainfo] NewCard extrainfo
         */

        /**
         * Constructs a new NewCard.
         * @memberof DataServerCommonProto
         * @classdesc Represents a NewCard.
         * @implements INewCard
         * @constructor
         * @param {DataServerCommonProto.INewCard=} [properties] Properties to set
         */
        function NewCard(properties) {
            this.cards = [];
            this.events = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewCard vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.NewCard
         * @instance
         */
        NewCard.prototype.vid = "";

        /**
         * NewCard gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.NewCard
         * @instance
         */
        NewCard.prototype.gmcode = "";

        /**
         * NewCard cards.
         * @member {Array.<DataServerCommonProto.ICard>} cards
         * @memberof DataServerCommonProto.NewCard
         * @instance
         */
        NewCard.prototype.cards = $util.emptyArray;

        /**
         * NewCard events.
         * @member {Array.<DataServerCommonProto.IMultiplierItem>} events
         * @memberof DataServerCommonProto.NewCard
         * @instance
         */
        NewCard.prototype.events = $util.emptyArray;

        /**
         * NewCard extrainfo.
         * @member {DataServerCommonProto.NewCard.IExtraInfo|null|undefined} extrainfo
         * @memberof DataServerCommonProto.NewCard
         * @instance
         */
        NewCard.prototype.extrainfo = null;

        /**
         * Creates a new NewCard instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {DataServerCommonProto.INewCard=} [properties] Properties to set
         * @returns {DataServerCommonProto.NewCard} NewCard instance
         */
        NewCard.create = function create(properties) {
            return new NewCard(properties);
        };

        /**
         * Encodes the specified NewCard message. Does not implicitly {@link DataServerCommonProto.NewCard.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {DataServerCommonProto.INewCard} message NewCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.cards != null && message.cards.length)
                for (let i = 0; i < message.cards.length; ++i)
                    $root.DataServerCommonProto.Card.encode(message.cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.events != null && message.events.length)
                for (let i = 0; i < message.events.length; ++i)
                    $root.DataServerCommonProto.MultiplierItem.encode(message.events[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.extrainfo != null && Object.hasOwnProperty.call(message, "extrainfo"))
                $root.DataServerCommonProto.NewCard.ExtraInfo.encode(message.extrainfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NewCard message, length delimited. Does not implicitly {@link DataServerCommonProto.NewCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {DataServerCommonProto.INewCard} message NewCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewCard message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.NewCard} NewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.NewCard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.DataServerCommonProto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.DataServerCommonProto.MultiplierItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.extrainfo = $root.DataServerCommonProto.NewCard.ExtraInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.NewCard} NewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewCard message.
         * @function verify
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (let i = 0; i < message.cards.length; ++i) {
                    let error = $root.DataServerCommonProto.Card.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (let i = 0; i < message.events.length; ++i) {
                    let error = $root.DataServerCommonProto.MultiplierItem.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            if (message.extrainfo != null && message.hasOwnProperty("extrainfo")) {
                let error = $root.DataServerCommonProto.NewCard.ExtraInfo.verify(message.extrainfo);
                if (error)
                    return "extrainfo." + error;
            }
            return null;
        };

        /**
         * Creates a NewCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.NewCard} NewCard
         */
        NewCard.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.NewCard)
                return object;
            let message = new $root.DataServerCommonProto.NewCard();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".DataServerCommonProto.NewCard.cards: array expected");
                message.cards = [];
                for (let i = 0; i < object.cards.length; ++i) {
                    if (typeof object.cards[i] !== "object")
                        throw TypeError(".DataServerCommonProto.NewCard.cards: object expected");
                    message.cards[i] = $root.DataServerCommonProto.Card.fromObject(object.cards[i]);
                }
            }
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".DataServerCommonProto.NewCard.events: array expected");
                message.events = [];
                for (let i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".DataServerCommonProto.NewCard.events: object expected");
                    message.events[i] = $root.DataServerCommonProto.MultiplierItem.fromObject(object.events[i]);
                }
            }
            if (object.extrainfo != null) {
                if (typeof object.extrainfo !== "object")
                    throw TypeError(".DataServerCommonProto.NewCard.extrainfo: object expected");
                message.extrainfo = $root.DataServerCommonProto.NewCard.ExtraInfo.fromObject(object.extrainfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a NewCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {DataServerCommonProto.NewCard} message NewCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.cards = [];
                object.events = [];
            }
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.extrainfo = null;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (let j = 0; j < message.cards.length; ++j)
                    object.cards[j] = $root.DataServerCommonProto.Card.toObject(message.cards[j], options);
            }
            if (message.events && message.events.length) {
                object.events = [];
                for (let j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.DataServerCommonProto.MultiplierItem.toObject(message.events[j], options);
            }
            if (message.extrainfo != null && message.hasOwnProperty("extrainfo"))
                object.extrainfo = $root.DataServerCommonProto.NewCard.ExtraInfo.toObject(message.extrainfo, options);
            return object;
        };

        /**
         * Converts this NewCard to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.NewCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NewCard
         * @function getTypeUrl
         * @memberof DataServerCommonProto.NewCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NewCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.NewCard";
        };

        NewCard.ExtraInfo = (function() {

            /**
             * Properties of an ExtraInfo.
             * @memberof DataServerCommonProto.NewCard
             * @interface IExtraInfo
             * @property {boolean|null} [isbj] ExtraInfo isbj
             */

            /**
             * Constructs a new ExtraInfo.
             * @memberof DataServerCommonProto.NewCard
             * @classdesc Represents an ExtraInfo.
             * @implements IExtraInfo
             * @constructor
             * @param {DataServerCommonProto.NewCard.IExtraInfo=} [properties] Properties to set
             */
            function ExtraInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExtraInfo isbj.
             * @member {boolean} isbj
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @instance
             */
            ExtraInfo.prototype.isbj = false;

            /**
             * Creates a new ExtraInfo instance using the specified properties.
             * @function create
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {DataServerCommonProto.NewCard.IExtraInfo=} [properties] Properties to set
             * @returns {DataServerCommonProto.NewCard.ExtraInfo} ExtraInfo instance
             */
            ExtraInfo.create = function create(properties) {
                return new ExtraInfo(properties);
            };

            /**
             * Encodes the specified ExtraInfo message. Does not implicitly {@link DataServerCommonProto.NewCard.ExtraInfo.verify|verify} messages.
             * @function encode
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {DataServerCommonProto.NewCard.IExtraInfo} message ExtraInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isbj != null && Object.hasOwnProperty.call(message, "isbj"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isbj);
                return writer;
            };

            /**
             * Encodes the specified ExtraInfo message, length delimited. Does not implicitly {@link DataServerCommonProto.NewCard.ExtraInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {DataServerCommonProto.NewCard.IExtraInfo} message ExtraInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExtraInfo message from the specified reader or buffer.
             * @function decode
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DataServerCommonProto.NewCard.ExtraInfo} ExtraInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.NewCard.ExtraInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.isbj = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExtraInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DataServerCommonProto.NewCard.ExtraInfo} ExtraInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtraInfo message.
             * @function verify
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isbj != null && message.hasOwnProperty("isbj"))
                    if (typeof message.isbj !== "boolean")
                        return "isbj: boolean expected";
                return null;
            };

            /**
             * Creates an ExtraInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DataServerCommonProto.NewCard.ExtraInfo} ExtraInfo
             */
            ExtraInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.DataServerCommonProto.NewCard.ExtraInfo)
                    return object;
                let message = new $root.DataServerCommonProto.NewCard.ExtraInfo();
                if (object.isbj != null)
                    message.isbj = Boolean(object.isbj);
                return message;
            };

            /**
             * Creates a plain object from an ExtraInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {DataServerCommonProto.NewCard.ExtraInfo} message ExtraInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.isbj = false;
                if (message.isbj != null && message.hasOwnProperty("isbj"))
                    object.isbj = message.isbj;
                return object;
            };

            /**
             * Converts this ExtraInfo to JSON.
             * @function toJSON
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ExtraInfo
             * @function getTypeUrl
             * @memberof DataServerCommonProto.NewCard.ExtraInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExtraInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DataServerCommonProto.NewCard.ExtraInfo";
            };

            return ExtraInfo;
        })();

        return NewCard;
    })();

    DataServerCommonProto.CloseRound = (function() {

        /**
         * Properties of a CloseRound.
         * @memberof DataServerCommonProto
         * @interface ICloseRound
         * @property {string|null} [vid] CloseRound vid
         * @property {string|null} [gmcode] CloseRound gmcode
         * @property {Array.<DataServerCommonProto.ICard>|null} [cards] CloseRound cards
         * @property {Array.<DataServerCommonProto.IMultiplierItem>|null} [items] CloseRound items
         */

        /**
         * Constructs a new CloseRound.
         * @memberof DataServerCommonProto
         * @classdesc Represents a CloseRound.
         * @implements ICloseRound
         * @constructor
         * @param {DataServerCommonProto.ICloseRound=} [properties] Properties to set
         */
        function CloseRound(properties) {
            this.cards = [];
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CloseRound vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.CloseRound
         * @instance
         */
        CloseRound.prototype.vid = "";

        /**
         * CloseRound gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.CloseRound
         * @instance
         */
        CloseRound.prototype.gmcode = "";

        /**
         * CloseRound cards.
         * @member {Array.<DataServerCommonProto.ICard>} cards
         * @memberof DataServerCommonProto.CloseRound
         * @instance
         */
        CloseRound.prototype.cards = $util.emptyArray;

        /**
         * CloseRound items.
         * @member {Array.<DataServerCommonProto.IMultiplierItem>} items
         * @memberof DataServerCommonProto.CloseRound
         * @instance
         */
        CloseRound.prototype.items = $util.emptyArray;

        /**
         * Creates a new CloseRound instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {DataServerCommonProto.ICloseRound=} [properties] Properties to set
         * @returns {DataServerCommonProto.CloseRound} CloseRound instance
         */
        CloseRound.create = function create(properties) {
            return new CloseRound(properties);
        };

        /**
         * Encodes the specified CloseRound message. Does not implicitly {@link DataServerCommonProto.CloseRound.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {DataServerCommonProto.ICloseRound} message CloseRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseRound.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.cards != null && message.cards.length)
                for (let i = 0; i < message.cards.length; ++i)
                    $root.DataServerCommonProto.Card.encode(message.cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.DataServerCommonProto.MultiplierItem.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CloseRound message, length delimited. Does not implicitly {@link DataServerCommonProto.CloseRound.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {DataServerCommonProto.ICloseRound} message CloseRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseRound.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CloseRound message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.CloseRound} CloseRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseRound.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.CloseRound();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.DataServerCommonProto.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.DataServerCommonProto.MultiplierItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CloseRound message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.CloseRound} CloseRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseRound.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CloseRound message.
         * @function verify
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CloseRound.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (let i = 0; i < message.cards.length; ++i) {
                    let error = $root.DataServerCommonProto.Card.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.DataServerCommonProto.MultiplierItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CloseRound message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.CloseRound} CloseRound
         */
        CloseRound.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.CloseRound)
                return object;
            let message = new $root.DataServerCommonProto.CloseRound();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".DataServerCommonProto.CloseRound.cards: array expected");
                message.cards = [];
                for (let i = 0; i < object.cards.length; ++i) {
                    if (typeof object.cards[i] !== "object")
                        throw TypeError(".DataServerCommonProto.CloseRound.cards: object expected");
                    message.cards[i] = $root.DataServerCommonProto.Card.fromObject(object.cards[i]);
                }
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".DataServerCommonProto.CloseRound.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".DataServerCommonProto.CloseRound.items: object expected");
                    message.items[i] = $root.DataServerCommonProto.MultiplierItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CloseRound message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {DataServerCommonProto.CloseRound} message CloseRound
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CloseRound.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.cards = [];
                object.items = [];
            }
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (let j = 0; j < message.cards.length; ++j)
                    object.cards[j] = $root.DataServerCommonProto.Card.toObject(message.cards[j], options);
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.DataServerCommonProto.MultiplierItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this CloseRound to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.CloseRound
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CloseRound.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CloseRound
         * @function getTypeUrl
         * @memberof DataServerCommonProto.CloseRound
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CloseRound.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.CloseRound";
        };

        return CloseRound;
    })();

    DataServerCommonProto.ModifyCard = (function() {

        /**
         * Properties of a ModifyCard.
         * @memberof DataServerCommonProto
         * @interface IModifyCard
         * @property {string|null} [vid] ModifyCard vid
         * @property {string|null} [gmcode] ModifyCard gmcode
         * @property {number|null} [cardval] ModifyCard cardval
         * @property {number|null} [index] ModifyCard index
         * @property {number|null} [handindex] ModifyCard handindex
         */

        /**
         * Constructs a new ModifyCard.
         * @memberof DataServerCommonProto
         * @classdesc Represents a ModifyCard.
         * @implements IModifyCard
         * @constructor
         * @param {DataServerCommonProto.IModifyCard=} [properties] Properties to set
         */
        function ModifyCard(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyCard vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.ModifyCard
         * @instance
         */
        ModifyCard.prototype.vid = "";

        /**
         * ModifyCard gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.ModifyCard
         * @instance
         */
        ModifyCard.prototype.gmcode = "";

        /**
         * ModifyCard cardval.
         * @member {number} cardval
         * @memberof DataServerCommonProto.ModifyCard
         * @instance
         */
        ModifyCard.prototype.cardval = 0;

        /**
         * ModifyCard index.
         * @member {number} index
         * @memberof DataServerCommonProto.ModifyCard
         * @instance
         */
        ModifyCard.prototype.index = 0;

        /**
         * ModifyCard handindex.
         * @member {number} handindex
         * @memberof DataServerCommonProto.ModifyCard
         * @instance
         */
        ModifyCard.prototype.handindex = 0;

        /**
         * Creates a new ModifyCard instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {DataServerCommonProto.IModifyCard=} [properties] Properties to set
         * @returns {DataServerCommonProto.ModifyCard} ModifyCard instance
         */
        ModifyCard.create = function create(properties) {
            return new ModifyCard(properties);
        };

        /**
         * Encodes the specified ModifyCard message. Does not implicitly {@link DataServerCommonProto.ModifyCard.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {DataServerCommonProto.IModifyCard} message ModifyCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.cardval != null && Object.hasOwnProperty.call(message, "cardval"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardval);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.index);
            if (message.handindex != null && Object.hasOwnProperty.call(message, "handindex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.handindex);
            return writer;
        };

        /**
         * Encodes the specified ModifyCard message, length delimited. Does not implicitly {@link DataServerCommonProto.ModifyCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {DataServerCommonProto.IModifyCard} message ModifyCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyCard message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.ModifyCard} ModifyCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.ModifyCard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.cardval = reader.int32();
                        break;
                    }
                case 4: {
                        message.index = reader.int32();
                        break;
                    }
                case 5: {
                        message.handindex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.ModifyCard} ModifyCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyCard message.
         * @function verify
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.cardval != null && message.hasOwnProperty("cardval"))
                if (!$util.isInteger(message.cardval))
                    return "cardval: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                if (!$util.isInteger(message.handindex))
                    return "handindex: integer expected";
            return null;
        };

        /**
         * Creates a ModifyCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.ModifyCard} ModifyCard
         */
        ModifyCard.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.ModifyCard)
                return object;
            let message = new $root.DataServerCommonProto.ModifyCard();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.cardval != null)
                message.cardval = object.cardval | 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.handindex != null)
                message.handindex = object.handindex | 0;
            return message;
        };

        /**
         * Creates a plain object from a ModifyCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {DataServerCommonProto.ModifyCard} message ModifyCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.cardval = 0;
                object.index = 0;
                object.handindex = 0;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.cardval != null && message.hasOwnProperty("cardval"))
                object.cardval = message.cardval;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                object.handindex = message.handindex;
            return object;
        };

        /**
         * Converts this ModifyCard to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.ModifyCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModifyCard
         * @function getTypeUrl
         * @memberof DataServerCommonProto.ModifyCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModifyCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.ModifyCard";
        };

        return ModifyCard;
    })();

    DataServerCommonProto.MaintenanceNotify = (function() {

        /**
         * Properties of a MaintenanceNotify.
         * @memberof DataServerCommonProto
         * @interface IMaintenanceNotify
         * @property {string|null} [vid] MaintenanceNotify vid
         * @property {number|null} [begintime] MaintenanceNotify begintime
         * @property {number|null} [duration] MaintenanceNotify duration
         * @property {DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType|null} [type] MaintenanceNotify type
         */

        /**
         * Constructs a new MaintenanceNotify.
         * @memberof DataServerCommonProto
         * @classdesc Represents a MaintenanceNotify.
         * @implements IMaintenanceNotify
         * @constructor
         * @param {DataServerCommonProto.IMaintenanceNotify=} [properties] Properties to set
         */
        function MaintenanceNotify(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaintenanceNotify vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @instance
         */
        MaintenanceNotify.prototype.vid = "";

        /**
         * MaintenanceNotify begintime.
         * @member {number} begintime
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @instance
         */
        MaintenanceNotify.prototype.begintime = 0;

        /**
         * MaintenanceNotify duration.
         * @member {number} duration
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @instance
         */
        MaintenanceNotify.prototype.duration = 0;

        /**
         * MaintenanceNotify type.
         * @member {DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType} type
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @instance
         */
        MaintenanceNotify.prototype.type = 0;

        /**
         * Creates a new MaintenanceNotify instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {DataServerCommonProto.IMaintenanceNotify=} [properties] Properties to set
         * @returns {DataServerCommonProto.MaintenanceNotify} MaintenanceNotify instance
         */
        MaintenanceNotify.create = function create(properties) {
            return new MaintenanceNotify(properties);
        };

        /**
         * Encodes the specified MaintenanceNotify message. Does not implicitly {@link DataServerCommonProto.MaintenanceNotify.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {DataServerCommonProto.IMaintenanceNotify} message MaintenanceNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaintenanceNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.begintime != null && Object.hasOwnProperty.call(message, "begintime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.begintime);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.duration);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified MaintenanceNotify message, length delimited. Does not implicitly {@link DataServerCommonProto.MaintenanceNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {DataServerCommonProto.IMaintenanceNotify} message MaintenanceNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaintenanceNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MaintenanceNotify message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.MaintenanceNotify} MaintenanceNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaintenanceNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.MaintenanceNotify();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.begintime = reader.int32();
                        break;
                    }
                case 3: {
                        message.duration = reader.int32();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MaintenanceNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.MaintenanceNotify} MaintenanceNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaintenanceNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaintenanceNotify message.
         * @function verify
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MaintenanceNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.begintime != null && message.hasOwnProperty("begintime"))
                if (!$util.isInteger(message.begintime))
                    return "begintime: integer expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a MaintenanceNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.MaintenanceNotify} MaintenanceNotify
         */
        MaintenanceNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.MaintenanceNotify)
                return object;
            let message = new $root.DataServerCommonProto.MaintenanceNotify();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.begintime != null)
                message.begintime = object.begintime | 0;
            if (object.duration != null)
                message.duration = object.duration | 0;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "WithdrawMaintenance":
            case 0:
                message.type = 0;
                break;
            case "ComingMaintenance":
            case 1:
                message.type = 1;
                break;
            case "CurrentMaintenance":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MaintenanceNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {DataServerCommonProto.MaintenanceNotify} message MaintenanceNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaintenanceNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.begintime = 0;
                object.duration = 0;
                object.type = options.enums === String ? "WithdrawMaintenance" : 0;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.begintime != null && message.hasOwnProperty("begintime"))
                object.begintime = message.begintime;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType[message.type] === undefined ? message.type : $root.DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this MaintenanceNotify to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaintenanceNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MaintenanceNotify
         * @function getTypeUrl
         * @memberof DataServerCommonProto.MaintenanceNotify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MaintenanceNotify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.MaintenanceNotify";
        };

        /**
         * MaintenanceNotifyType enum.
         * @name DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType
         * @enum {number}
         * @property {number} WithdrawMaintenance=0 WithdrawMaintenance value
         * @property {number} ComingMaintenance=1 ComingMaintenance value
         * @property {number} CurrentMaintenance=2 CurrentMaintenance value
         */
        MaintenanceNotify.MaintenanceNotifyType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WithdrawMaintenance"] = 0;
            values[valuesById[1] = "ComingMaintenance"] = 1;
            values[valuesById[2] = "CurrentMaintenance"] = 2;
            return values;
        })();

        return MaintenanceNotify;
    })();

    DataServerCommonProto.ResetCard = (function() {

        /**
         * Properties of a ResetCard.
         * @memberof DataServerCommonProto
         * @interface IResetCard
         * @property {string|null} [vid] ResetCard vid
         * @property {string|null} [gmcode] ResetCard gmcode
         * @property {number|null} [index] ResetCard index
         * @property {number|null} [handindex] ResetCard handindex
         */

        /**
         * Constructs a new ResetCard.
         * @memberof DataServerCommonProto
         * @classdesc Represents a ResetCard.
         * @implements IResetCard
         * @constructor
         * @param {DataServerCommonProto.IResetCard=} [properties] Properties to set
         */
        function ResetCard(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResetCard vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.ResetCard
         * @instance
         */
        ResetCard.prototype.vid = "";

        /**
         * ResetCard gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.ResetCard
         * @instance
         */
        ResetCard.prototype.gmcode = "";

        /**
         * ResetCard index.
         * @member {number} index
         * @memberof DataServerCommonProto.ResetCard
         * @instance
         */
        ResetCard.prototype.index = 0;

        /**
         * ResetCard handindex.
         * @member {number} handindex
         * @memberof DataServerCommonProto.ResetCard
         * @instance
         */
        ResetCard.prototype.handindex = 0;

        /**
         * Creates a new ResetCard instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {DataServerCommonProto.IResetCard=} [properties] Properties to set
         * @returns {DataServerCommonProto.ResetCard} ResetCard instance
         */
        ResetCard.create = function create(properties) {
            return new ResetCard(properties);
        };

        /**
         * Encodes the specified ResetCard message. Does not implicitly {@link DataServerCommonProto.ResetCard.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {DataServerCommonProto.IResetCard} message ResetCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.index);
            if (message.handindex != null && Object.hasOwnProperty.call(message, "handindex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.handindex);
            return writer;
        };

        /**
         * Encodes the specified ResetCard message, length delimited. Does not implicitly {@link DataServerCommonProto.ResetCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {DataServerCommonProto.IResetCard} message ResetCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetCard message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.ResetCard} ResetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.ResetCard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.index = reader.int32();
                        break;
                    }
                case 4: {
                        message.handindex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResetCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.ResetCard} ResetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetCard message.
         * @function verify
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                if (!$util.isInteger(message.handindex))
                    return "handindex: integer expected";
            return null;
        };

        /**
         * Creates a ResetCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.ResetCard} ResetCard
         */
        ResetCard.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.ResetCard)
                return object;
            let message = new $root.DataServerCommonProto.ResetCard();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.index != null)
                message.index = object.index | 0;
            if (object.handindex != null)
                message.handindex = object.handindex | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResetCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {DataServerCommonProto.ResetCard} message ResetCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.index = 0;
                object.handindex = 0;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.handindex != null && message.hasOwnProperty("handindex"))
                object.handindex = message.handindex;
            return object;
        };

        /**
         * Converts this ResetCard to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.ResetCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResetCard
         * @function getTypeUrl
         * @memberof DataServerCommonProto.ResetCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResetCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.ResetCard";
        };

        return ResetCard;
    })();

    DataServerCommonProto.CancelRound = (function() {

        /**
         * Properties of a CancelRound.
         * @memberof DataServerCommonProto
         * @interface ICancelRound
         * @property {string|null} [vid] CancelRound vid
         * @property {string|null} [gmcode] CancelRound gmcode
         * @property {string|null} [pitbossid] CancelRound pitbossid
         * @property {string|null} [remark] CancelRound remark
         */

        /**
         * Constructs a new CancelRound.
         * @memberof DataServerCommonProto
         * @classdesc Represents a CancelRound.
         * @implements ICancelRound
         * @constructor
         * @param {DataServerCommonProto.ICancelRound=} [properties] Properties to set
         */
        function CancelRound(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelRound vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.CancelRound
         * @instance
         */
        CancelRound.prototype.vid = "";

        /**
         * CancelRound gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.CancelRound
         * @instance
         */
        CancelRound.prototype.gmcode = "";

        /**
         * CancelRound pitbossid.
         * @member {string} pitbossid
         * @memberof DataServerCommonProto.CancelRound
         * @instance
         */
        CancelRound.prototype.pitbossid = "";

        /**
         * CancelRound remark.
         * @member {string} remark
         * @memberof DataServerCommonProto.CancelRound
         * @instance
         */
        CancelRound.prototype.remark = "";

        /**
         * Creates a new CancelRound instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {DataServerCommonProto.ICancelRound=} [properties] Properties to set
         * @returns {DataServerCommonProto.CancelRound} CancelRound instance
         */
        CancelRound.create = function create(properties) {
            return new CancelRound(properties);
        };

        /**
         * Encodes the specified CancelRound message. Does not implicitly {@link DataServerCommonProto.CancelRound.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {DataServerCommonProto.ICancelRound} message CancelRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelRound.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.pitbossid != null && Object.hasOwnProperty.call(message, "pitbossid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pitbossid);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified CancelRound message, length delimited. Does not implicitly {@link DataServerCommonProto.CancelRound.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {DataServerCommonProto.ICancelRound} message CancelRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelRound.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelRound message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.CancelRound} CancelRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelRound.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.CancelRound();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.pitbossid = reader.string();
                        break;
                    }
                case 4: {
                        message.remark = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelRound message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.CancelRound} CancelRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelRound.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelRound message.
         * @function verify
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelRound.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.pitbossid != null && message.hasOwnProperty("pitbossid"))
                if (!$util.isString(message.pitbossid))
                    return "pitbossid: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a CancelRound message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.CancelRound} CancelRound
         */
        CancelRound.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.CancelRound)
                return object;
            let message = new $root.DataServerCommonProto.CancelRound();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.pitbossid != null)
                message.pitbossid = String(object.pitbossid);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a CancelRound message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {DataServerCommonProto.CancelRound} message CancelRound
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelRound.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.pitbossid = "";
                object.remark = "";
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.pitbossid != null && message.hasOwnProperty("pitbossid"))
                object.pitbossid = message.pitbossid;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this CancelRound to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.CancelRound
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelRound.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CancelRound
         * @function getTypeUrl
         * @memberof DataServerCommonProto.CancelRound
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CancelRound.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.CancelRound";
        };

        return CancelRound;
    })();

    DataServerCommonProto.DealerMaintainAction = (function() {

        /**
         * Properties of a DealerMaintainAction.
         * @memberof DataServerCommonProto
         * @interface IDealerMaintainAction
         * @property {string|null} [vid] DealerMaintainAction vid
         * @property {DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType|null} [type] DealerMaintainAction type
         * @property {string|null} [pitbossid] DealerMaintainAction pitbossid
         * @property {string|null} [remark] DealerMaintainAction remark
         * @property {number|null} [begintime] DealerMaintainAction begintime
         * @property {number|null} [duration] DealerMaintainAction duration
         */

        /**
         * Constructs a new DealerMaintainAction.
         * @memberof DataServerCommonProto
         * @classdesc Represents a DealerMaintainAction.
         * @implements IDealerMaintainAction
         * @constructor
         * @param {DataServerCommonProto.IDealerMaintainAction=} [properties] Properties to set
         */
        function DealerMaintainAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DealerMaintainAction vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         */
        DealerMaintainAction.prototype.vid = "";

        /**
         * DealerMaintainAction type.
         * @member {DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType} type
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         */
        DealerMaintainAction.prototype.type = 0;

        /**
         * DealerMaintainAction pitbossid.
         * @member {string} pitbossid
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         */
        DealerMaintainAction.prototype.pitbossid = "";

        /**
         * DealerMaintainAction remark.
         * @member {string} remark
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         */
        DealerMaintainAction.prototype.remark = "";

        /**
         * DealerMaintainAction begintime.
         * @member {number} begintime
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         */
        DealerMaintainAction.prototype.begintime = 0;

        /**
         * DealerMaintainAction duration.
         * @member {number} duration
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         */
        DealerMaintainAction.prototype.duration = 0;

        /**
         * Creates a new DealerMaintainAction instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {DataServerCommonProto.IDealerMaintainAction=} [properties] Properties to set
         * @returns {DataServerCommonProto.DealerMaintainAction} DealerMaintainAction instance
         */
        DealerMaintainAction.create = function create(properties) {
            return new DealerMaintainAction(properties);
        };

        /**
         * Encodes the specified DealerMaintainAction message. Does not implicitly {@link DataServerCommonProto.DealerMaintainAction.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {DataServerCommonProto.IDealerMaintainAction} message DealerMaintainAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerMaintainAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.pitbossid != null && Object.hasOwnProperty.call(message, "pitbossid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pitbossid);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remark);
            if (message.begintime != null && Object.hasOwnProperty.call(message, "begintime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.begintime);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.duration);
            return writer;
        };

        /**
         * Encodes the specified DealerMaintainAction message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerMaintainAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {DataServerCommonProto.IDealerMaintainAction} message DealerMaintainAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerMaintainAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DealerMaintainAction message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.DealerMaintainAction} DealerMaintainAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerMaintainAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.DealerMaintainAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.pitbossid = reader.string();
                        break;
                    }
                case 4: {
                        message.remark = reader.string();
                        break;
                    }
                case 5: {
                        message.begintime = reader.int32();
                        break;
                    }
                case 6: {
                        message.duration = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DealerMaintainAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.DealerMaintainAction} DealerMaintainAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerMaintainAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DealerMaintainAction message.
         * @function verify
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DealerMaintainAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.pitbossid != null && message.hasOwnProperty("pitbossid"))
                if (!$util.isString(message.pitbossid))
                    return "pitbossid: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.begintime != null && message.hasOwnProperty("begintime"))
                if (!$util.isInteger(message.begintime))
                    return "begintime: integer expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            return null;
        };

        /**
         * Creates a DealerMaintainAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.DealerMaintainAction} DealerMaintainAction
         */
        DealerMaintainAction.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.DealerMaintainAction)
                return object;
            let message = new $root.DataServerCommonProto.DealerMaintainAction();
            if (object.vid != null)
                message.vid = String(object.vid);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "WithdrawMaintain":
            case 0:
                message.type = 0;
                break;
            case "StartMaintain":
            case 1:
                message.type = 1;
                break;
            }
            if (object.pitbossid != null)
                message.pitbossid = String(object.pitbossid);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.begintime != null)
                message.begintime = object.begintime | 0;
            if (object.duration != null)
                message.duration = object.duration | 0;
            return message;
        };

        /**
         * Creates a plain object from a DealerMaintainAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {DataServerCommonProto.DealerMaintainAction} message DealerMaintainAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DealerMaintainAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.type = options.enums === String ? "WithdrawMaintain" : 0;
                object.pitbossid = "";
                object.remark = "";
                object.begintime = 0;
                object.duration = 0;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType[message.type] === undefined ? message.type : $root.DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType[message.type] : message.type;
            if (message.pitbossid != null && message.hasOwnProperty("pitbossid"))
                object.pitbossid = message.pitbossid;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.begintime != null && message.hasOwnProperty("begintime"))
                object.begintime = message.begintime;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };

        /**
         * Converts this DealerMaintainAction to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DealerMaintainAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DealerMaintainAction
         * @function getTypeUrl
         * @memberof DataServerCommonProto.DealerMaintainAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DealerMaintainAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.DealerMaintainAction";
        };

        /**
         * DealerMaintainActionType enum.
         * @name DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType
         * @enum {number}
         * @property {number} WithdrawMaintain=0 WithdrawMaintain value
         * @property {number} StartMaintain=1 StartMaintain value
         */
        DealerMaintainAction.DealerMaintainActionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WithdrawMaintain"] = 0;
            values[valuesById[1] = "StartMaintain"] = 1;
            return values;
        })();

        return DealerMaintainAction;
    })();

    DataServerCommonProto.DealerMaintainEvent = (function() {

        /**
         * Properties of a DealerMaintainEvent.
         * @memberof DataServerCommonProto
         * @interface IDealerMaintainEvent
         */

        /**
         * Constructs a new DealerMaintainEvent.
         * @memberof DataServerCommonProto
         * @classdesc Represents a DealerMaintainEvent.
         * @implements IDealerMaintainEvent
         * @constructor
         * @param {DataServerCommonProto.IDealerMaintainEvent=} [properties] Properties to set
         */
        function DealerMaintainEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DealerMaintainEvent instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {DataServerCommonProto.IDealerMaintainEvent=} [properties] Properties to set
         * @returns {DataServerCommonProto.DealerMaintainEvent} DealerMaintainEvent instance
         */
        DealerMaintainEvent.create = function create(properties) {
            return new DealerMaintainEvent(properties);
        };

        /**
         * Encodes the specified DealerMaintainEvent message. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {DataServerCommonProto.IDealerMaintainEvent} message DealerMaintainEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerMaintainEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DealerMaintainEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {DataServerCommonProto.IDealerMaintainEvent} message DealerMaintainEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealerMaintainEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DealerMaintainEvent message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.DealerMaintainEvent} DealerMaintainEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerMaintainEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.DealerMaintainEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DealerMaintainEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.DealerMaintainEvent} DealerMaintainEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealerMaintainEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DealerMaintainEvent message.
         * @function verify
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DealerMaintainEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DealerMaintainEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.DealerMaintainEvent} DealerMaintainEvent
         */
        DealerMaintainEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.DealerMaintainEvent)
                return object;
            return new $root.DataServerCommonProto.DealerMaintainEvent();
        };

        /**
         * Creates a plain object from a DealerMaintainEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {DataServerCommonProto.DealerMaintainEvent} message DealerMaintainEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DealerMaintainEvent.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DealerMaintainEvent to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DealerMaintainEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DealerMaintainEvent
         * @function getTypeUrl
         * @memberof DataServerCommonProto.DealerMaintainEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DealerMaintainEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.DealerMaintainEvent";
        };

        DealerMaintainEvent.MaintainEvent = (function() {

            /**
             * Properties of a MaintainEvent.
             * @memberof DataServerCommonProto.DealerMaintainEvent
             * @interface IMaintainEvent
             * @property {string|null} [eventid] MaintainEvent eventid
             * @property {string|null} [vid] MaintainEvent vid
             * @property {string|null} [pitbossid] MaintainEvent pitbossid
             * @property {number|null} [begintime] MaintainEvent begintime
             * @property {number|null} [duration] MaintainEvent duration
             * @property {number|null} [flag] MaintainEvent flag
             */

            /**
             * Constructs a new MaintainEvent.
             * @memberof DataServerCommonProto.DealerMaintainEvent
             * @classdesc Represents a MaintainEvent.
             * @implements IMaintainEvent
             * @constructor
             * @param {DataServerCommonProto.DealerMaintainEvent.IMaintainEvent=} [properties] Properties to set
             */
            function MaintainEvent(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MaintainEvent eventid.
             * @member {string} eventid
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             */
            MaintainEvent.prototype.eventid = "";

            /**
             * MaintainEvent vid.
             * @member {string} vid
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             */
            MaintainEvent.prototype.vid = "";

            /**
             * MaintainEvent pitbossid.
             * @member {string} pitbossid
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             */
            MaintainEvent.prototype.pitbossid = "";

            /**
             * MaintainEvent begintime.
             * @member {number} begintime
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             */
            MaintainEvent.prototype.begintime = 0;

            /**
             * MaintainEvent duration.
             * @member {number} duration
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             */
            MaintainEvent.prototype.duration = 0;

            /**
             * MaintainEvent flag.
             * @member {number} flag
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             */
            MaintainEvent.prototype.flag = 0;

            /**
             * Creates a new MaintainEvent instance using the specified properties.
             * @function create
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {DataServerCommonProto.DealerMaintainEvent.IMaintainEvent=} [properties] Properties to set
             * @returns {DataServerCommonProto.DealerMaintainEvent.MaintainEvent} MaintainEvent instance
             */
            MaintainEvent.create = function create(properties) {
                return new MaintainEvent(properties);
            };

            /**
             * Encodes the specified MaintainEvent message. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.MaintainEvent.verify|verify} messages.
             * @function encode
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {DataServerCommonProto.DealerMaintainEvent.IMaintainEvent} message MaintainEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MaintainEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventid != null && Object.hasOwnProperty.call(message, "eventid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventid);
                if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.vid);
                if (message.pitbossid != null && Object.hasOwnProperty.call(message, "pitbossid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.pitbossid);
                if (message.begintime != null && Object.hasOwnProperty.call(message, "begintime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.begintime);
                if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.duration);
                if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.flag);
                return writer;
            };

            /**
             * Encodes the specified MaintainEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.MaintainEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {DataServerCommonProto.DealerMaintainEvent.IMaintainEvent} message MaintainEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MaintainEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MaintainEvent message from the specified reader or buffer.
             * @function decode
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DataServerCommonProto.DealerMaintainEvent.MaintainEvent} MaintainEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MaintainEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.DealerMaintainEvent.MaintainEvent();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.eventid = reader.string();
                            break;
                        }
                    case 2: {
                            message.vid = reader.string();
                            break;
                        }
                    case 3: {
                            message.pitbossid = reader.string();
                            break;
                        }
                    case 4: {
                            message.begintime = reader.int32();
                            break;
                        }
                    case 5: {
                            message.duration = reader.int32();
                            break;
                        }
                    case 6: {
                            message.flag = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MaintainEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DataServerCommonProto.DealerMaintainEvent.MaintainEvent} MaintainEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MaintainEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MaintainEvent message.
             * @function verify
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MaintainEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventid != null && message.hasOwnProperty("eventid"))
                    if (!$util.isString(message.eventid))
                        return "eventid: string expected";
                if (message.vid != null && message.hasOwnProperty("vid"))
                    if (!$util.isString(message.vid))
                        return "vid: string expected";
                if (message.pitbossid != null && message.hasOwnProperty("pitbossid"))
                    if (!$util.isString(message.pitbossid))
                        return "pitbossid: string expected";
                if (message.begintime != null && message.hasOwnProperty("begintime"))
                    if (!$util.isInteger(message.begintime))
                        return "begintime: integer expected";
                if (message.duration != null && message.hasOwnProperty("duration"))
                    if (!$util.isInteger(message.duration))
                        return "duration: integer expected";
                if (message.flag != null && message.hasOwnProperty("flag"))
                    if (!$util.isInteger(message.flag))
                        return "flag: integer expected";
                return null;
            };

            /**
             * Creates a MaintainEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DataServerCommonProto.DealerMaintainEvent.MaintainEvent} MaintainEvent
             */
            MaintainEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.DataServerCommonProto.DealerMaintainEvent.MaintainEvent)
                    return object;
                let message = new $root.DataServerCommonProto.DealerMaintainEvent.MaintainEvent();
                if (object.eventid != null)
                    message.eventid = String(object.eventid);
                if (object.vid != null)
                    message.vid = String(object.vid);
                if (object.pitbossid != null)
                    message.pitbossid = String(object.pitbossid);
                if (object.begintime != null)
                    message.begintime = object.begintime | 0;
                if (object.duration != null)
                    message.duration = object.duration | 0;
                if (object.flag != null)
                    message.flag = object.flag | 0;
                return message;
            };

            /**
             * Creates a plain object from a MaintainEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {DataServerCommonProto.DealerMaintainEvent.MaintainEvent} message MaintainEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MaintainEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.eventid = "";
                    object.vid = "";
                    object.pitbossid = "";
                    object.begintime = 0;
                    object.duration = 0;
                    object.flag = 0;
                }
                if (message.eventid != null && message.hasOwnProperty("eventid"))
                    object.eventid = message.eventid;
                if (message.vid != null && message.hasOwnProperty("vid"))
                    object.vid = message.vid;
                if (message.pitbossid != null && message.hasOwnProperty("pitbossid"))
                    object.pitbossid = message.pitbossid;
                if (message.begintime != null && message.hasOwnProperty("begintime"))
                    object.begintime = message.begintime;
                if (message.duration != null && message.hasOwnProperty("duration"))
                    object.duration = message.duration;
                if (message.flag != null && message.hasOwnProperty("flag"))
                    object.flag = message.flag;
                return object;
            };

            /**
             * Converts this MaintainEvent to JSON.
             * @function toJSON
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MaintainEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MaintainEvent
             * @function getTypeUrl
             * @memberof DataServerCommonProto.DealerMaintainEvent.MaintainEvent
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MaintainEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DataServerCommonProto.DealerMaintainEvent.MaintainEvent";
            };

            return MaintainEvent;
        })();

        return DealerMaintainEvent;
    })();

    DataServerCommonProto.GameSnapshot = (function() {

        /**
         * Properties of a GameSnapshot.
         * @memberof DataServerCommonProto
         * @interface IGameSnapshot
         * @property {string|null} [gmtype] GameSnapshot gmtype
         * @property {string|null} [gmcode] GameSnapshot gmcode
         * @property {number|null} [gmstatus] GameSnapshot gmstatus
         * @property {number|null} [maxtimeout] GameSnapshot maxtimeout
         * @property {number|null} [timeout] GameSnapshot timeout
         * @property {number|null} [timestamp] GameSnapshot timestamp
         * @property {Array.<number>|null} [cards] GameSnapshot cards
         * @property {number|null} [headcard] GameSnapshot headcard
         * @property {Array.<number>|null} [bcards] GameSnapshot bcards
         * @property {Array.<number>|null} [p1cards] GameSnapshot p1cards
         * @property {Array.<number>|null} [p2cards] GameSnapshot p2cards
         * @property {Array.<number>|null} [p3cards] GameSnapshot p3cards
         * @property {number|null} [bval] GameSnapshot bval
         * @property {number|null} [p1val] GameSnapshot p1val
         * @property {number|null} [p2val] GameSnapshot p2val
         * @property {number|null} [p3val] GameSnapshot p3val
         * @property {Array.<number>|null} [wintypes] GameSnapshot wintypes
         * @property {DataServerCommonProto.GameSnapshot.IExtraEvent|null} [event] GameSnapshot event
         */

        /**
         * Constructs a new GameSnapshot.
         * @memberof DataServerCommonProto
         * @classdesc Represents a GameSnapshot.
         * @implements IGameSnapshot
         * @constructor
         * @param {DataServerCommonProto.IGameSnapshot=} [properties] Properties to set
         */
        function GameSnapshot(properties) {
            this.cards = [];
            this.bcards = [];
            this.p1cards = [];
            this.p2cards = [];
            this.p3cards = [];
            this.wintypes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSnapshot gmtype.
         * @member {string} gmtype
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.gmtype = "";

        /**
         * GameSnapshot gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.gmcode = "";

        /**
         * GameSnapshot gmstatus.
         * @member {number} gmstatus
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.gmstatus = 0;

        /**
         * GameSnapshot maxtimeout.
         * @member {number} maxtimeout
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.maxtimeout = 0;

        /**
         * GameSnapshot timeout.
         * @member {number} timeout
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.timeout = 0;

        /**
         * GameSnapshot timestamp.
         * @member {number} timestamp
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.timestamp = 0;

        /**
         * GameSnapshot cards.
         * @member {Array.<number>} cards
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.cards = $util.emptyArray;

        /**
         * GameSnapshot headcard.
         * @member {number} headcard
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.headcard = 0;

        /**
         * GameSnapshot bcards.
         * @member {Array.<number>} bcards
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.bcards = $util.emptyArray;

        /**
         * GameSnapshot p1cards.
         * @member {Array.<number>} p1cards
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.p1cards = $util.emptyArray;

        /**
         * GameSnapshot p2cards.
         * @member {Array.<number>} p2cards
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.p2cards = $util.emptyArray;

        /**
         * GameSnapshot p3cards.
         * @member {Array.<number>} p3cards
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.p3cards = $util.emptyArray;

        /**
         * GameSnapshot bval.
         * @member {number} bval
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.bval = 0;

        /**
         * GameSnapshot p1val.
         * @member {number} p1val
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.p1val = 0;

        /**
         * GameSnapshot p2val.
         * @member {number} p2val
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.p2val = 0;

        /**
         * GameSnapshot p3val.
         * @member {number} p3val
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.p3val = 0;

        /**
         * GameSnapshot wintypes.
         * @member {Array.<number>} wintypes
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.wintypes = $util.emptyArray;

        /**
         * GameSnapshot event.
         * @member {DataServerCommonProto.GameSnapshot.IExtraEvent|null|undefined} event
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         */
        GameSnapshot.prototype.event = null;

        /**
         * Creates a new GameSnapshot instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {DataServerCommonProto.IGameSnapshot=} [properties] Properties to set
         * @returns {DataServerCommonProto.GameSnapshot} GameSnapshot instance
         */
        GameSnapshot.create = function create(properties) {
            return new GameSnapshot(properties);
        };

        /**
         * Encodes the specified GameSnapshot message. Does not implicitly {@link DataServerCommonProto.GameSnapshot.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {DataServerCommonProto.IGameSnapshot} message GameSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSnapshot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gmtype != null && Object.hasOwnProperty.call(message, "gmtype"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gmtype);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.gmstatus != null && Object.hasOwnProperty.call(message, "gmstatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gmstatus);
            if (message.maxtimeout != null && Object.hasOwnProperty.call(message, "maxtimeout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxtimeout);
            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.timeout);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.timestamp);
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            if (message.headcard != null && Object.hasOwnProperty.call(message, "headcard"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.headcard);
            if (message.bcards != null && message.bcards.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (let i = 0; i < message.bcards.length; ++i)
                    writer.int32(message.bcards[i]);
                writer.ldelim();
            }
            if (message.p1cards != null && message.p1cards.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (let i = 0; i < message.p1cards.length; ++i)
                    writer.int32(message.p1cards[i]);
                writer.ldelim();
            }
            if (message.p2cards != null && message.p2cards.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (let i = 0; i < message.p2cards.length; ++i)
                    writer.int32(message.p2cards[i]);
                writer.ldelim();
            }
            if (message.p3cards != null && message.p3cards.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (let i = 0; i < message.p3cards.length; ++i)
                    writer.int32(message.p3cards[i]);
                writer.ldelim();
            }
            if (message.bval != null && Object.hasOwnProperty.call(message, "bval"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.bval);
            if (message.p1val != null && Object.hasOwnProperty.call(message, "p1val"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.p1val);
            if (message.p2val != null && Object.hasOwnProperty.call(message, "p2val"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.p2val);
            if (message.p3val != null && Object.hasOwnProperty.call(message, "p3val"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.p3val);
            if (message.wintypes != null && message.wintypes.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (let i = 0; i < message.wintypes.length; ++i)
                    writer.int32(message.wintypes[i]);
                writer.ldelim();
            }
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.DataServerCommonProto.GameSnapshot.ExtraEvent.encode(message.event, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameSnapshot message, length delimited. Does not implicitly {@link DataServerCommonProto.GameSnapshot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {DataServerCommonProto.IGameSnapshot} message GameSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.GameSnapshot} GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSnapshot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.GameSnapshot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gmtype = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.gmstatus = reader.int32();
                        break;
                    }
                case 4: {
                        message.maxtimeout = reader.int32();
                        break;
                    }
                case 5: {
                        message.timeout = reader.int32();
                        break;
                    }
                case 6: {
                        message.timestamp = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    }
                case 8: {
                        message.headcard = reader.int32();
                        break;
                    }
                case 9: {
                        if (!(message.bcards && message.bcards.length))
                            message.bcards = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bcards.push(reader.int32());
                        } else
                            message.bcards.push(reader.int32());
                        break;
                    }
                case 10: {
                        if (!(message.p1cards && message.p1cards.length))
                            message.p1cards = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.p1cards.push(reader.int32());
                        } else
                            message.p1cards.push(reader.int32());
                        break;
                    }
                case 11: {
                        if (!(message.p2cards && message.p2cards.length))
                            message.p2cards = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.p2cards.push(reader.int32());
                        } else
                            message.p2cards.push(reader.int32());
                        break;
                    }
                case 12: {
                        if (!(message.p3cards && message.p3cards.length))
                            message.p3cards = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.p3cards.push(reader.int32());
                        } else
                            message.p3cards.push(reader.int32());
                        break;
                    }
                case 13: {
                        message.bval = reader.int32();
                        break;
                    }
                case 14: {
                        message.p1val = reader.int32();
                        break;
                    }
                case 15: {
                        message.p2val = reader.int32();
                        break;
                    }
                case 16: {
                        message.p3val = reader.int32();
                        break;
                    }
                case 17: {
                        if (!(message.wintypes && message.wintypes.length))
                            message.wintypes = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.wintypes.push(reader.int32());
                        } else
                            message.wintypes.push(reader.int32());
                        break;
                    }
                case 18: {
                        message.event = $root.DataServerCommonProto.GameSnapshot.ExtraEvent.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.GameSnapshot} GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSnapshot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSnapshot message.
         * @function verify
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSnapshot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gmtype != null && message.hasOwnProperty("gmtype"))
                if (!$util.isString(message.gmtype))
                    return "gmtype: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.gmstatus != null && message.hasOwnProperty("gmstatus"))
                if (!$util.isInteger(message.gmstatus))
                    return "gmstatus: integer expected";
            if (message.maxtimeout != null && message.hasOwnProperty("maxtimeout"))
                if (!$util.isInteger(message.maxtimeout))
                    return "maxtimeout: integer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (let i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (message.headcard != null && message.hasOwnProperty("headcard"))
                if (!$util.isInteger(message.headcard))
                    return "headcard: integer expected";
            if (message.bcards != null && message.hasOwnProperty("bcards")) {
                if (!Array.isArray(message.bcards))
                    return "bcards: array expected";
                for (let i = 0; i < message.bcards.length; ++i)
                    if (!$util.isInteger(message.bcards[i]))
                        return "bcards: integer[] expected";
            }
            if (message.p1cards != null && message.hasOwnProperty("p1cards")) {
                if (!Array.isArray(message.p1cards))
                    return "p1cards: array expected";
                for (let i = 0; i < message.p1cards.length; ++i)
                    if (!$util.isInteger(message.p1cards[i]))
                        return "p1cards: integer[] expected";
            }
            if (message.p2cards != null && message.hasOwnProperty("p2cards")) {
                if (!Array.isArray(message.p2cards))
                    return "p2cards: array expected";
                for (let i = 0; i < message.p2cards.length; ++i)
                    if (!$util.isInteger(message.p2cards[i]))
                        return "p2cards: integer[] expected";
            }
            if (message.p3cards != null && message.hasOwnProperty("p3cards")) {
                if (!Array.isArray(message.p3cards))
                    return "p3cards: array expected";
                for (let i = 0; i < message.p3cards.length; ++i)
                    if (!$util.isInteger(message.p3cards[i]))
                        return "p3cards: integer[] expected";
            }
            if (message.bval != null && message.hasOwnProperty("bval"))
                if (!$util.isInteger(message.bval))
                    return "bval: integer expected";
            if (message.p1val != null && message.hasOwnProperty("p1val"))
                if (!$util.isInteger(message.p1val))
                    return "p1val: integer expected";
            if (message.p2val != null && message.hasOwnProperty("p2val"))
                if (!$util.isInteger(message.p2val))
                    return "p2val: integer expected";
            if (message.p3val != null && message.hasOwnProperty("p3val"))
                if (!$util.isInteger(message.p3val))
                    return "p3val: integer expected";
            if (message.wintypes != null && message.hasOwnProperty("wintypes")) {
                if (!Array.isArray(message.wintypes))
                    return "wintypes: array expected";
                for (let i = 0; i < message.wintypes.length; ++i)
                    if (!$util.isInteger(message.wintypes[i]))
                        return "wintypes: integer[] expected";
            }
            if (message.event != null && message.hasOwnProperty("event")) {
                let error = $root.DataServerCommonProto.GameSnapshot.ExtraEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            return null;
        };

        /**
         * Creates a GameSnapshot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.GameSnapshot} GameSnapshot
         */
        GameSnapshot.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.GameSnapshot)
                return object;
            let message = new $root.DataServerCommonProto.GameSnapshot();
            if (object.gmtype != null)
                message.gmtype = String(object.gmtype);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.gmstatus != null)
                message.gmstatus = object.gmstatus | 0;
            if (object.maxtimeout != null)
                message.maxtimeout = object.maxtimeout | 0;
            if (object.timeout != null)
                message.timeout = object.timeout | 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".DataServerCommonProto.GameSnapshot.cards: array expected");
                message.cards = [];
                for (let i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            if (object.headcard != null)
                message.headcard = object.headcard | 0;
            if (object.bcards) {
                if (!Array.isArray(object.bcards))
                    throw TypeError(".DataServerCommonProto.GameSnapshot.bcards: array expected");
                message.bcards = [];
                for (let i = 0; i < object.bcards.length; ++i)
                    message.bcards[i] = object.bcards[i] | 0;
            }
            if (object.p1cards) {
                if (!Array.isArray(object.p1cards))
                    throw TypeError(".DataServerCommonProto.GameSnapshot.p1cards: array expected");
                message.p1cards = [];
                for (let i = 0; i < object.p1cards.length; ++i)
                    message.p1cards[i] = object.p1cards[i] | 0;
            }
            if (object.p2cards) {
                if (!Array.isArray(object.p2cards))
                    throw TypeError(".DataServerCommonProto.GameSnapshot.p2cards: array expected");
                message.p2cards = [];
                for (let i = 0; i < object.p2cards.length; ++i)
                    message.p2cards[i] = object.p2cards[i] | 0;
            }
            if (object.p3cards) {
                if (!Array.isArray(object.p3cards))
                    throw TypeError(".DataServerCommonProto.GameSnapshot.p3cards: array expected");
                message.p3cards = [];
                for (let i = 0; i < object.p3cards.length; ++i)
                    message.p3cards[i] = object.p3cards[i] | 0;
            }
            if (object.bval != null)
                message.bval = object.bval | 0;
            if (object.p1val != null)
                message.p1val = object.p1val | 0;
            if (object.p2val != null)
                message.p2val = object.p2val | 0;
            if (object.p3val != null)
                message.p3val = object.p3val | 0;
            if (object.wintypes) {
                if (!Array.isArray(object.wintypes))
                    throw TypeError(".DataServerCommonProto.GameSnapshot.wintypes: array expected");
                message.wintypes = [];
                for (let i = 0; i < object.wintypes.length; ++i)
                    message.wintypes[i] = object.wintypes[i] | 0;
            }
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".DataServerCommonProto.GameSnapshot.event: object expected");
                message.event = $root.DataServerCommonProto.GameSnapshot.ExtraEvent.fromObject(object.event);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameSnapshot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {DataServerCommonProto.GameSnapshot} message GameSnapshot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameSnapshot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.cards = [];
                object.bcards = [];
                object.p1cards = [];
                object.p2cards = [];
                object.p3cards = [];
                object.wintypes = [];
            }
            if (options.defaults) {
                object.gmtype = "";
                object.gmcode = "";
                object.gmstatus = 0;
                object.maxtimeout = 0;
                object.timeout = 0;
                object.timestamp = 0;
                object.headcard = 0;
                object.bval = 0;
                object.p1val = 0;
                object.p2val = 0;
                object.p3val = 0;
                object.event = null;
            }
            if (message.gmtype != null && message.hasOwnProperty("gmtype"))
                object.gmtype = message.gmtype;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.gmstatus != null && message.hasOwnProperty("gmstatus"))
                object.gmstatus = message.gmstatus;
            if (message.maxtimeout != null && message.hasOwnProperty("maxtimeout"))
                object.maxtimeout = message.maxtimeout;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (let j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            if (message.headcard != null && message.hasOwnProperty("headcard"))
                object.headcard = message.headcard;
            if (message.bcards && message.bcards.length) {
                object.bcards = [];
                for (let j = 0; j < message.bcards.length; ++j)
                    object.bcards[j] = message.bcards[j];
            }
            if (message.p1cards && message.p1cards.length) {
                object.p1cards = [];
                for (let j = 0; j < message.p1cards.length; ++j)
                    object.p1cards[j] = message.p1cards[j];
            }
            if (message.p2cards && message.p2cards.length) {
                object.p2cards = [];
                for (let j = 0; j < message.p2cards.length; ++j)
                    object.p2cards[j] = message.p2cards[j];
            }
            if (message.p3cards && message.p3cards.length) {
                object.p3cards = [];
                for (let j = 0; j < message.p3cards.length; ++j)
                    object.p3cards[j] = message.p3cards[j];
            }
            if (message.bval != null && message.hasOwnProperty("bval"))
                object.bval = message.bval;
            if (message.p1val != null && message.hasOwnProperty("p1val"))
                object.p1val = message.p1val;
            if (message.p2val != null && message.hasOwnProperty("p2val"))
                object.p2val = message.p2val;
            if (message.p3val != null && message.hasOwnProperty("p3val"))
                object.p3val = message.p3val;
            if (message.wintypes && message.wintypes.length) {
                object.wintypes = [];
                for (let j = 0; j < message.wintypes.length; ++j)
                    object.wintypes[j] = message.wintypes[j];
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.DataServerCommonProto.GameSnapshot.ExtraEvent.toObject(message.event, options);
            return object;
        };

        /**
         * Converts this GameSnapshot to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.GameSnapshot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameSnapshot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameSnapshot
         * @function getTypeUrl
         * @memberof DataServerCommonProto.GameSnapshot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameSnapshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.GameSnapshot";
        };

        GameSnapshot.ExtraEvent = (function() {

            /**
             * Properties of an ExtraEvent.
             * @memberof DataServerCommonProto.GameSnapshot
             * @interface IExtraEvent
             * @property {Array.<DataServerCommonProto.IMultiplierItem>|null} [multipliers] ExtraEvent multipliers
             */

            /**
             * Constructs a new ExtraEvent.
             * @memberof DataServerCommonProto.GameSnapshot
             * @classdesc Represents an ExtraEvent.
             * @implements IExtraEvent
             * @constructor
             * @param {DataServerCommonProto.GameSnapshot.IExtraEvent=} [properties] Properties to set
             */
            function ExtraEvent(properties) {
                this.multipliers = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExtraEvent multipliers.
             * @member {Array.<DataServerCommonProto.IMultiplierItem>} multipliers
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @instance
             */
            ExtraEvent.prototype.multipliers = $util.emptyArray;

            /**
             * Creates a new ExtraEvent instance using the specified properties.
             * @function create
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {DataServerCommonProto.GameSnapshot.IExtraEvent=} [properties] Properties to set
             * @returns {DataServerCommonProto.GameSnapshot.ExtraEvent} ExtraEvent instance
             */
            ExtraEvent.create = function create(properties) {
                return new ExtraEvent(properties);
            };

            /**
             * Encodes the specified ExtraEvent message. Does not implicitly {@link DataServerCommonProto.GameSnapshot.ExtraEvent.verify|verify} messages.
             * @function encode
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {DataServerCommonProto.GameSnapshot.IExtraEvent} message ExtraEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.multipliers != null && message.multipliers.length)
                    for (let i = 0; i < message.multipliers.length; ++i)
                        $root.DataServerCommonProto.MultiplierItem.encode(message.multipliers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ExtraEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.GameSnapshot.ExtraEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {DataServerCommonProto.GameSnapshot.IExtraEvent} message ExtraEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExtraEvent message from the specified reader or buffer.
             * @function decode
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DataServerCommonProto.GameSnapshot.ExtraEvent} ExtraEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.GameSnapshot.ExtraEvent();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.multipliers && message.multipliers.length))
                                message.multipliers = [];
                            message.multipliers.push($root.DataServerCommonProto.MultiplierItem.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExtraEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DataServerCommonProto.GameSnapshot.ExtraEvent} ExtraEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtraEvent message.
             * @function verify
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.multipliers != null && message.hasOwnProperty("multipliers")) {
                    if (!Array.isArray(message.multipliers))
                        return "multipliers: array expected";
                    for (let i = 0; i < message.multipliers.length; ++i) {
                        let error = $root.DataServerCommonProto.MultiplierItem.verify(message.multipliers[i]);
                        if (error)
                            return "multipliers." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an ExtraEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DataServerCommonProto.GameSnapshot.ExtraEvent} ExtraEvent
             */
            ExtraEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.DataServerCommonProto.GameSnapshot.ExtraEvent)
                    return object;
                let message = new $root.DataServerCommonProto.GameSnapshot.ExtraEvent();
                if (object.multipliers) {
                    if (!Array.isArray(object.multipliers))
                        throw TypeError(".DataServerCommonProto.GameSnapshot.ExtraEvent.multipliers: array expected");
                    message.multipliers = [];
                    for (let i = 0; i < object.multipliers.length; ++i) {
                        if (typeof object.multipliers[i] !== "object")
                            throw TypeError(".DataServerCommonProto.GameSnapshot.ExtraEvent.multipliers: object expected");
                        message.multipliers[i] = $root.DataServerCommonProto.MultiplierItem.fromObject(object.multipliers[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an ExtraEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {DataServerCommonProto.GameSnapshot.ExtraEvent} message ExtraEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.multipliers = [];
                if (message.multipliers && message.multipliers.length) {
                    object.multipliers = [];
                    for (let j = 0; j < message.multipliers.length; ++j)
                        object.multipliers[j] = $root.DataServerCommonProto.MultiplierItem.toObject(message.multipliers[j], options);
                }
                return object;
            };

            /**
             * Converts this ExtraEvent to JSON.
             * @function toJSON
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ExtraEvent
             * @function getTypeUrl
             * @memberof DataServerCommonProto.GameSnapshot.ExtraEvent
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExtraEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DataServerCommonProto.GameSnapshot.ExtraEvent";
            };

            return ExtraEvent;
        })();

        return GameSnapshot;
    })();

    DataServerCommonProto.BacResult = (function() {

        /**
         * Properties of a BacResult.
         * @memberof DataServerCommonProto
         * @interface IBacResult
         * @property {string|null} [vid] BacResult vid
         * @property {string|null} [gmcode] BacResult gmcode
         * @property {number|null} [result] BacResult result
         */

        /**
         * Constructs a new BacResult.
         * @memberof DataServerCommonProto
         * @classdesc Represents a BacResult.
         * @implements IBacResult
         * @constructor
         * @param {DataServerCommonProto.IBacResult=} [properties] Properties to set
         */
        function BacResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BacResult vid.
         * @member {string} vid
         * @memberof DataServerCommonProto.BacResult
         * @instance
         */
        BacResult.prototype.vid = "";

        /**
         * BacResult gmcode.
         * @member {string} gmcode
         * @memberof DataServerCommonProto.BacResult
         * @instance
         */
        BacResult.prototype.gmcode = "";

        /**
         * BacResult result.
         * @member {number} result
         * @memberof DataServerCommonProto.BacResult
         * @instance
         */
        BacResult.prototype.result = 0;

        /**
         * Creates a new BacResult instance using the specified properties.
         * @function create
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {DataServerCommonProto.IBacResult=} [properties] Properties to set
         * @returns {DataServerCommonProto.BacResult} BacResult instance
         */
        BacResult.create = function create(properties) {
            return new BacResult(properties);
        };

        /**
         * Encodes the specified BacResult message. Does not implicitly {@link DataServerCommonProto.BacResult.verify|verify} messages.
         * @function encode
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {DataServerCommonProto.IBacResult} message BacResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BacResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vid != null && Object.hasOwnProperty.call(message, "vid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vid);
            if (message.gmcode != null && Object.hasOwnProperty.call(message, "gmcode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gmcode);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified BacResult message, length delimited. Does not implicitly {@link DataServerCommonProto.BacResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {DataServerCommonProto.IBacResult} message BacResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BacResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BacResult message from the specified reader or buffer.
         * @function decode
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataServerCommonProto.BacResult} BacResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BacResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataServerCommonProto.BacResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vid = reader.string();
                        break;
                    }
                case 2: {
                        message.gmcode = reader.string();
                        break;
                    }
                case 3: {
                        message.result = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BacResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataServerCommonProto.BacResult} BacResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BacResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BacResult message.
         * @function verify
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BacResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vid != null && message.hasOwnProperty("vid"))
                if (!$util.isString(message.vid))
                    return "vid: string expected";
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                if (!$util.isString(message.gmcode))
                    return "gmcode: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a BacResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataServerCommonProto.BacResult} BacResult
         */
        BacResult.fromObject = function fromObject(object) {
            if (object instanceof $root.DataServerCommonProto.BacResult)
                return object;
            let message = new $root.DataServerCommonProto.BacResult();
            if (object.vid != null)
                message.vid = String(object.vid);
            if (object.gmcode != null)
                message.gmcode = String(object.gmcode);
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a BacResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {DataServerCommonProto.BacResult} message BacResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BacResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vid = "";
                object.gmcode = "";
                object.result = 0;
            }
            if (message.vid != null && message.hasOwnProperty("vid"))
                object.vid = message.vid;
            if (message.gmcode != null && message.hasOwnProperty("gmcode"))
                object.gmcode = message.gmcode;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this BacResult to JSON.
         * @function toJSON
         * @memberof DataServerCommonProto.BacResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BacResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BacResult
         * @function getTypeUrl
         * @memberof DataServerCommonProto.BacResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BacResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataServerCommonProto.BacResult";
        };

        return BacResult;
    })();

    return DataServerCommonProto;
})();

export { $root as default };
