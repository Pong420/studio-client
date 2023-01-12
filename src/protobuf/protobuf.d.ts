// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace DataServerBlackJackProto. */
export namespace DataServerBlackJackProto {

    /** Properties of a BJGameSnapshot. */
    interface IBJGameSnapshot {

        /** BJGameSnapshot version */
        version?: (number|null);

        /** BJGameSnapshot vid */
        vid?: (string|null);

        /** BJGameSnapshot gmcode */
        gmcode?: (string|null);

        /** BJGameSnapshot timeout */
        timeout?: (number|null);

        /** BJGameSnapshot maxtimeout */
        maxtimeout?: (number|null);

        /** BJGameSnapshot handindex */
        handindex?: (number|null);

        /** BJGameSnapshot gmstatus */
        gmstatus?: (number|null);

        /** BJGameSnapshot bjseat */
        bjseat?: (DataServerBlackJackProto.BJGameSnapshot.IBJSeat[]|null);

        /** BJGameSnapshot dealercards */
        dealercards?: (DataServerBlackJackProto.BJGameSnapshot.ICardList|null);
    }

    /** Represents a BJGameSnapshot. */
    class BJGameSnapshot implements IBJGameSnapshot {

        /**
         * Constructs a new BJGameSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerBlackJackProto.IBJGameSnapshot);

        /** BJGameSnapshot version. */
        public version: number;

        /** BJGameSnapshot vid. */
        public vid: string;

        /** BJGameSnapshot gmcode. */
        public gmcode: string;

        /** BJGameSnapshot timeout. */
        public timeout: number;

        /** BJGameSnapshot maxtimeout. */
        public maxtimeout: number;

        /** BJGameSnapshot handindex. */
        public handindex: number;

        /** BJGameSnapshot gmstatus. */
        public gmstatus: number;

        /** BJGameSnapshot bjseat. */
        public bjseat: DataServerBlackJackProto.BJGameSnapshot.IBJSeat[];

        /** BJGameSnapshot dealercards. */
        public dealercards?: (DataServerBlackJackProto.BJGameSnapshot.ICardList|null);

        /**
         * Creates a new BJGameSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BJGameSnapshot instance
         */
        public static create(properties?: DataServerBlackJackProto.IBJGameSnapshot): DataServerBlackJackProto.BJGameSnapshot;

        /**
         * Encodes the specified BJGameSnapshot message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.verify|verify} messages.
         * @param message BJGameSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerBlackJackProto.IBJGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BJGameSnapshot message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.verify|verify} messages.
         * @param message BJGameSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerBlackJackProto.IBJGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BJGameSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BJGameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.BJGameSnapshot;

        /**
         * Decodes a BJGameSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BJGameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.BJGameSnapshot;

        /**
         * Verifies a BJGameSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BJGameSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BJGameSnapshot
         */
        public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.BJGameSnapshot;

        /**
         * Creates a plain object from a BJGameSnapshot message. Also converts values to other types if specified.
         * @param message BJGameSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerBlackJackProto.BJGameSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BJGameSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BJGameSnapshot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BJGameSnapshot {

        /** Properties of a CardList. */
        interface ICardList {

            /** CardList cards */
            cards?: (number[]|null);

            /** CardList handflags */
            handflags?: (number|null);
        }

        /** Represents a CardList. */
        class CardList implements ICardList {

            /**
             * Constructs a new CardList.
             * @param [properties] Properties to set
             */
            constructor(properties?: DataServerBlackJackProto.BJGameSnapshot.ICardList);

            /** CardList cards. */
            public cards: number[];

            /** CardList handflags. */
            public handflags: number;

            /**
             * Creates a new CardList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CardList instance
             */
            public static create(properties?: DataServerBlackJackProto.BJGameSnapshot.ICardList): DataServerBlackJackProto.BJGameSnapshot.CardList;

            /**
             * Encodes the specified CardList message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.CardList.verify|verify} messages.
             * @param message CardList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DataServerBlackJackProto.BJGameSnapshot.ICardList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CardList message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.CardList.verify|verify} messages.
             * @param message CardList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DataServerBlackJackProto.BJGameSnapshot.ICardList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CardList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CardList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.BJGameSnapshot.CardList;

            /**
             * Decodes a CardList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CardList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.BJGameSnapshot.CardList;

            /**
             * Verifies a CardList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CardList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CardList
             */
            public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.BJGameSnapshot.CardList;

            /**
             * Creates a plain object from a CardList message. Also converts values to other types if specified.
             * @param message CardList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DataServerBlackJackProto.BJGameSnapshot.CardList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CardList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CardList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BJSeat. */
        interface IBJSeat {

            /** BJSeat cardlist */
            cardlist?: (DataServerBlackJackProto.BJGameSnapshot.ICardList[]|null);

            /** BJSeat wintypes */
            wintypes?: (number[]|null);

            /** BJSeat wininfo */
            wininfo?: (number|null);

            /** BJSeat seat */
            seat?: (number|null);

            /** BJSeat loginname */
            loginname?: (string|null);

            /** BJSeat nickname */
            nickname?: (string|null);

            /** BJSeat isself */
            isself?: (boolean|null);

            /** BJSeat currency */
            currency?: (string|null);

            /** BJSeat left */
            left?: (number|null);

            /** BJSeat creditseq */
            creditseq?: (number|null);

            /** BJSeat bets */
            bets?: (DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet[]|null);

            /** BJSeat reckons */
            reckons?: (DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon[]|null);

            /** BJSeat winround */
            winround?: (number|null);

            /** BJSeat totalround */
            totalround?: (number|null);

            /** BJSeat cardlistkey */
            cardlistkey?: (number|null);
        }

        /** Represents a BJSeat. */
        class BJSeat implements IBJSeat {

            /**
             * Constructs a new BJSeat.
             * @param [properties] Properties to set
             */
            constructor(properties?: DataServerBlackJackProto.BJGameSnapshot.IBJSeat);

            /** BJSeat cardlist. */
            public cardlist: DataServerBlackJackProto.BJGameSnapshot.ICardList[];

            /** BJSeat wintypes. */
            public wintypes: number[];

            /** BJSeat wininfo. */
            public wininfo: number;

            /** BJSeat seat. */
            public seat: number;

            /** BJSeat loginname. */
            public loginname: string;

            /** BJSeat nickname. */
            public nickname: string;

            /** BJSeat isself. */
            public isself: boolean;

            /** BJSeat currency. */
            public currency: string;

            /** BJSeat left. */
            public left: number;

            /** BJSeat creditseq. */
            public creditseq: number;

            /** BJSeat bets. */
            public bets: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet[];

            /** BJSeat reckons. */
            public reckons: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon[];

            /** BJSeat winround. */
            public winround: number;

            /** BJSeat totalround. */
            public totalround: number;

            /** BJSeat cardlistkey. */
            public cardlistkey: number;

            /**
             * Creates a new BJSeat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BJSeat instance
             */
            public static create(properties?: DataServerBlackJackProto.BJGameSnapshot.IBJSeat): DataServerBlackJackProto.BJGameSnapshot.BJSeat;

            /**
             * Encodes the specified BJSeat message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.verify|verify} messages.
             * @param message BJSeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DataServerBlackJackProto.BJGameSnapshot.IBJSeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BJSeat message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.verify|verify} messages.
             * @param message BJSeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DataServerBlackJackProto.BJGameSnapshot.IBJSeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BJSeat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BJSeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.BJGameSnapshot.BJSeat;

            /**
             * Decodes a BJSeat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BJSeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.BJGameSnapshot.BJSeat;

            /**
             * Verifies a BJSeat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BJSeat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BJSeat
             */
            public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.BJGameSnapshot.BJSeat;

            /**
             * Creates a plain object from a BJSeat message. Also converts values to other types if specified.
             * @param message BJSeat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BJSeat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BJSeat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BJSeat {

            /** Properties of a Bet. */
            interface IBet {

                /** Bet playtype */
                playtype?: (number|null);

                /** Bet jetton */
                jetton?: (number|null);

                /** Bet extra */
                extra?: (DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo|null);
            }

            /** Represents a Bet. */
            class Bet implements IBet {

                /**
                 * Constructs a new Bet.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet);

                /** Bet playtype. */
                public playtype: number;

                /** Bet jetton. */
                public jetton: number;

                /** Bet extra. */
                public extra?: (DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo|null);

                /**
                 * Creates a new Bet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Bet instance
                 */
                public static create(properties?: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet;

                /**
                 * Encodes the specified Bet message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.verify|verify} messages.
                 * @param message Bet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Bet message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.verify|verify} messages.
                 * @param message Bet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Bet message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Bet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet;

                /**
                 * Decodes a Bet message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Bet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet;

                /**
                 * Verifies a Bet message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Bet message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Bet
                 */
                public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet;

                /**
                 * Creates a plain object from a Bet message. Also converts values to other types if specified.
                 * @param message Bet
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Bet to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Bet
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Bet {

                /** Properties of an ExtraInfo. */
                interface IExtraInfo {

                    /** ExtraInfo remark */
                    remark?: (string|null);
                }

                /** Represents an ExtraInfo. */
                class ExtraInfo implements IExtraInfo {

                    /**
                     * Constructs a new ExtraInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo);

                    /** ExtraInfo remark. */
                    public remark: string;

                    /**
                     * Creates a new ExtraInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExtraInfo instance
                     */
                    public static create(properties?: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo;

                    /**
                     * Encodes the specified ExtraInfo message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.verify|verify} messages.
                     * @param message ExtraInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExtraInfo message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo.verify|verify} messages.
                     * @param message ExtraInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.IExtraInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExtraInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExtraInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo;

                    /**
                     * Decodes an ExtraInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExtraInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo;

                    /**
                     * Verifies an ExtraInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExtraInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExtraInfo
                     */
                    public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo;

                    /**
                     * Creates a plain object from an ExtraInfo message. Also converts values to other types if specified.
                     * @param message ExtraInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Bet.ExtraInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExtraInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExtraInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a Reckon. */
            interface IReckon {

                /** Reckon playtype */
                playtype?: (number|null);

                /** Reckon win */
                win?: (number|null);
            }

            /** Represents a Reckon. */
            class Reckon implements IReckon {

                /**
                 * Constructs a new Reckon.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon);

                /** Reckon playtype. */
                public playtype: number;

                /** Reckon win. */
                public win: number;

                /**
                 * Creates a new Reckon instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reckon instance
                 */
                public static create(properties?: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon;

                /**
                 * Encodes the specified Reckon message. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.verify|verify} messages.
                 * @param message Reckon message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reckon message, length delimited. Does not implicitly {@link DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon.verify|verify} messages.
                 * @param message Reckon message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.IReckon, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reckon message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reckon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon;

                /**
                 * Decodes a Reckon message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reckon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon;

                /**
                 * Verifies a Reckon message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reckon message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reckon
                 */
                public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon;

                /**
                 * Creates a plain object from a Reckon message. Also converts values to other types if specified.
                 * @param message Reckon
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: DataServerBlackJackProto.BJGameSnapshot.BJSeat.Reckon, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reckon to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Reckon
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a RoomStateItem. */
    interface IRoomStateItem {

        /** RoomStateItem key */
        key?: (number|null);

        /** RoomStateItem count */
        count?: (number[]|null);
    }

    /** Represents a RoomStateItem. */
    class RoomStateItem implements IRoomStateItem {

        /**
         * Constructs a new RoomStateItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerBlackJackProto.IRoomStateItem);

        /** RoomStateItem key. */
        public key: number;

        /** RoomStateItem count. */
        public count: number[];

        /**
         * Creates a new RoomStateItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomStateItem instance
         */
        public static create(properties?: DataServerBlackJackProto.IRoomStateItem): DataServerBlackJackProto.RoomStateItem;

        /**
         * Encodes the specified RoomStateItem message. Does not implicitly {@link DataServerBlackJackProto.RoomStateItem.verify|verify} messages.
         * @param message RoomStateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerBlackJackProto.IRoomStateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomStateItem message, length delimited. Does not implicitly {@link DataServerBlackJackProto.RoomStateItem.verify|verify} messages.
         * @param message RoomStateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerBlackJackProto.IRoomStateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomStateItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomStateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.RoomStateItem;

        /**
         * Decodes a RoomStateItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomStateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.RoomStateItem;

        /**
         * Verifies a RoomStateItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomStateItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomStateItem
         */
        public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.RoomStateItem;

        /**
         * Creates a plain object from a RoomStateItem message. Also converts values to other types if specified.
         * @param message RoomStateItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerBlackJackProto.RoomStateItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomStateItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomStateItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoomState. */
    interface IRoomState {

        /** RoomState vid */
        vid?: (string|null);

        /** RoomState gmcode */
        gmcode?: (string|null);

        /** RoomState room */
        room?: (DataServerBlackJackProto.IRoomStateItem|null);

        /** RoomState cardlists */
        cardlists?: (DataServerBlackJackProto.IRoomStateItem[]|null);
    }

    /** Represents a RoomState. */
    class RoomState implements IRoomState {

        /**
         * Constructs a new RoomState.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerBlackJackProto.IRoomState);

        /** RoomState vid. */
        public vid: string;

        /** RoomState gmcode. */
        public gmcode: string;

        /** RoomState room. */
        public room?: (DataServerBlackJackProto.IRoomStateItem|null);

        /** RoomState cardlists. */
        public cardlists: DataServerBlackJackProto.IRoomStateItem[];

        /**
         * Creates a new RoomState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomState instance
         */
        public static create(properties?: DataServerBlackJackProto.IRoomState): DataServerBlackJackProto.RoomState;

        /**
         * Encodes the specified RoomState message. Does not implicitly {@link DataServerBlackJackProto.RoomState.verify|verify} messages.
         * @param message RoomState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerBlackJackProto.IRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomState message, length delimited. Does not implicitly {@link DataServerBlackJackProto.RoomState.verify|verify} messages.
         * @param message RoomState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerBlackJackProto.IRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.RoomState;

        /**
         * Decodes a RoomState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.RoomState;

        /**
         * Verifies a RoomState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomState
         */
        public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.RoomState;

        /**
         * Creates a plain object from a RoomState message. Also converts values to other types if specified.
         * @param message RoomState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerBlackJackProto.RoomState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DealerToolStat. */
    interface IDealerToolStat {

        /** DealerToolStat vid */
        vid?: (string|null);

        /** DealerToolStat gmcode */
        gmcode?: (string|null);

        /** DealerToolStat abjstat */
        abjstat?: (DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats|null);
    }

    /** Represents a DealerToolStat. */
    class DealerToolStat implements IDealerToolStat {

        /**
         * Constructs a new DealerToolStat.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerBlackJackProto.IDealerToolStat);

        /** DealerToolStat vid. */
        public vid: string;

        /** DealerToolStat gmcode. */
        public gmcode: string;

        /** DealerToolStat abjstat. */
        public abjstat?: (DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats|null);

        /**
         * Creates a new DealerToolStat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DealerToolStat instance
         */
        public static create(properties?: DataServerBlackJackProto.IDealerToolStat): DataServerBlackJackProto.DealerToolStat;

        /**
         * Encodes the specified DealerToolStat message. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.verify|verify} messages.
         * @param message DealerToolStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerBlackJackProto.IDealerToolStat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DealerToolStat message, length delimited. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.verify|verify} messages.
         * @param message DealerToolStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerBlackJackProto.IDealerToolStat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DealerToolStat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DealerToolStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.DealerToolStat;

        /**
         * Decodes a DealerToolStat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DealerToolStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.DealerToolStat;

        /**
         * Verifies a DealerToolStat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DealerToolStat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DealerToolStat
         */
        public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.DealerToolStat;

        /**
         * Creates a plain object from a DealerToolStat message. Also converts values to other types if specified.
         * @param message DealerToolStat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerBlackJackProto.DealerToolStat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DealerToolStat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DealerToolStat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DealerToolStat {

        /** Properties of a ABJDealerToolStats. */
        interface IABJDealerToolStats {

            /** ABJDealerToolStats insuredplayers */
            insuredplayers?: (number|null);

            /** ABJDealerToolStats totalplayers */
            totalplayers?: (number|null);
        }

        /** Represents a ABJDealerToolStats. */
        class ABJDealerToolStats implements IABJDealerToolStats {

            /**
             * Constructs a new ABJDealerToolStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats);

            /** ABJDealerToolStats insuredplayers. */
            public insuredplayers: number;

            /** ABJDealerToolStats totalplayers. */
            public totalplayers: number;

            /**
             * Creates a new ABJDealerToolStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ABJDealerToolStats instance
             */
            public static create(properties?: DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats): DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats;

            /**
             * Encodes the specified ABJDealerToolStats message. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.verify|verify} messages.
             * @param message ABJDealerToolStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ABJDealerToolStats message, length delimited. Does not implicitly {@link DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats.verify|verify} messages.
             * @param message ABJDealerToolStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DataServerBlackJackProto.DealerToolStat.IABJDealerToolStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ABJDealerToolStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ABJDealerToolStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats;

            /**
             * Decodes a ABJDealerToolStats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ABJDealerToolStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats;

            /**
             * Verifies a ABJDealerToolStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ABJDealerToolStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ABJDealerToolStats
             */
            public static fromObject(object: { [k: string]: any }): DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats;

            /**
             * Creates a plain object from a ABJDealerToolStats message. Also converts values to other types if specified.
             * @param message ABJDealerToolStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DataServerBlackJackProto.DealerToolStat.ABJDealerToolStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ABJDealerToolStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ABJDealerToolStats
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace BonusProto. */
export namespace BonusProto {

    /** BonusState enum. */
    enum BonusState {
        NONE = 0,
        PICK = 1,
        PICK_ENDED = 2,
        FLIP = 4,
        FLIP_ENDED = 8
    }

    /** Properties of a BonusCoinFlip. */
    interface IBonusCoinFlip {

        /** BonusCoinFlip result */
        result?: (number|null);

        /** BonusCoinFlip odds */
        odds?: (number[]|null);
    }

    /** Represents a BonusCoinFlip. */
    class BonusCoinFlip implements IBonusCoinFlip {

        /**
         * Constructs a new BonusCoinFlip.
         * @param [properties] Properties to set
         */
        constructor(properties?: BonusProto.IBonusCoinFlip);

        /** BonusCoinFlip result. */
        public result: number;

        /** BonusCoinFlip odds. */
        public odds: number[];

        /**
         * Creates a new BonusCoinFlip instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BonusCoinFlip instance
         */
        public static create(properties?: BonusProto.IBonusCoinFlip): BonusProto.BonusCoinFlip;

        /**
         * Encodes the specified BonusCoinFlip message. Does not implicitly {@link BonusProto.BonusCoinFlip.verify|verify} messages.
         * @param message BonusCoinFlip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BonusProto.IBonusCoinFlip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BonusCoinFlip message, length delimited. Does not implicitly {@link BonusProto.BonusCoinFlip.verify|verify} messages.
         * @param message BonusCoinFlip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BonusProto.IBonusCoinFlip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BonusCoinFlip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusCoinFlip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BonusProto.BonusCoinFlip;

        /**
         * Decodes a BonusCoinFlip message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BonusCoinFlip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BonusProto.BonusCoinFlip;

        /**
         * Verifies a BonusCoinFlip message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BonusCoinFlip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusCoinFlip
         */
        public static fromObject(object: { [k: string]: any }): BonusProto.BonusCoinFlip;

        /**
         * Creates a plain object from a BonusCoinFlip message. Also converts values to other types if specified.
         * @param message BonusCoinFlip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BonusProto.BonusCoinFlip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusCoinFlip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BonusCoinFlip
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BonusPick. */
    interface IBonusPick {

        /** BonusPick odds */
        odds?: (number[]|null);
    }

    /** Represents a BonusPick. */
    class BonusPick implements IBonusPick {

        /**
         * Constructs a new BonusPick.
         * @param [properties] Properties to set
         */
        constructor(properties?: BonusProto.IBonusPick);

        /** BonusPick odds. */
        public odds: number[];

        /**
         * Creates a new BonusPick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BonusPick instance
         */
        public static create(properties?: BonusProto.IBonusPick): BonusProto.BonusPick;

        /**
         * Encodes the specified BonusPick message. Does not implicitly {@link BonusProto.BonusPick.verify|verify} messages.
         * @param message BonusPick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BonusProto.IBonusPick, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BonusPick message, length delimited. Does not implicitly {@link BonusProto.BonusPick.verify|verify} messages.
         * @param message BonusPick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BonusProto.IBonusPick, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BonusPick message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BonusProto.BonusPick;

        /**
         * Decodes a BonusPick message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BonusPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BonusProto.BonusPick;

        /**
         * Verifies a BonusPick message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BonusPick message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusPick
         */
        public static fromObject(object: { [k: string]: any }): BonusProto.BonusPick;

        /**
         * Creates a plain object from a BonusPick message. Also converts values to other types if specified.
         * @param message BonusPick
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BonusProto.BonusPick, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusPick to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BonusPick
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Bonus. */
    interface IBonus {

        /** Bonus state */
        state?: (number|null);

        /** Bonus counters */
        counters?: (number[]|null);

        /** Bonus pick */
        pick?: (BonusProto.IBonusPick|null);

        /** Bonus coinflip */
        coinflip?: (BonusProto.IBonusCoinFlip|null);
    }

    /** Represents a Bonus. */
    class Bonus implements IBonus {

        /**
         * Constructs a new Bonus.
         * @param [properties] Properties to set
         */
        constructor(properties?: BonusProto.IBonus);

        /** Bonus state. */
        public state: number;

        /** Bonus counters. */
        public counters: number[];

        /** Bonus pick. */
        public pick?: (BonusProto.IBonusPick|null);

        /** Bonus coinflip. */
        public coinflip?: (BonusProto.IBonusCoinFlip|null);

        /**
         * Creates a new Bonus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bonus instance
         */
        public static create(properties?: BonusProto.IBonus): BonusProto.Bonus;

        /**
         * Encodes the specified Bonus message. Does not implicitly {@link BonusProto.Bonus.verify|verify} messages.
         * @param message Bonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BonusProto.IBonus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bonus message, length delimited. Does not implicitly {@link BonusProto.Bonus.verify|verify} messages.
         * @param message Bonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BonusProto.IBonus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bonus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BonusProto.Bonus;

        /**
         * Decodes a Bonus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BonusProto.Bonus;

        /**
         * Verifies a Bonus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bonus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bonus
         */
        public static fromObject(object: { [k: string]: any }): BonusProto.Bonus;

        /**
         * Creates a plain object from a Bonus message. Also converts values to other types if specified.
         * @param message Bonus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BonusProto.Bonus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bonus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Bonus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace CommonProto. */
export namespace CommonProto {

    /** Properties of a GameSnapshot. */
    interface IGameSnapshot {

        /** GameSnapshot gmtype */
        gmtype?: (string|null);

        /** GameSnapshot gmcode */
        gmcode?: (string|null);

        /** GameSnapshot gmstatus */
        gmstatus?: (number|null);

        /** GameSnapshot maxtimeout */
        maxtimeout?: (number|null);

        /** GameSnapshot timeout */
        timeout?: (number|null);

        /** GameSnapshot shoecode */
        shoecode?: (number|null);

        /** GameSnapshot bcard */
        bcard?: (number[]|null);

        /** GameSnapshot pcard */
        pcard?: (number[]|null);

        /** GameSnapshot dispatch */
        dispatch?: (number|null);

        /** GameSnapshot hidden */
        hidden?: (number|null);

        /** GameSnapshot bonus */
        bonus?: (BonusProto.IBonus|null);
    }

    /** Represents a GameSnapshot. */
    class GameSnapshot implements IGameSnapshot {

        /**
         * Constructs a new GameSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: CommonProto.IGameSnapshot);

        /** GameSnapshot gmtype. */
        public gmtype: string;

        /** GameSnapshot gmcode. */
        public gmcode: string;

        /** GameSnapshot gmstatus. */
        public gmstatus: number;

        /** GameSnapshot maxtimeout. */
        public maxtimeout: number;

        /** GameSnapshot timeout. */
        public timeout: number;

        /** GameSnapshot shoecode. */
        public shoecode: number;

        /** GameSnapshot bcard. */
        public bcard: number[];

        /** GameSnapshot pcard. */
        public pcard: number[];

        /** GameSnapshot dispatch. */
        public dispatch: number;

        /** GameSnapshot hidden. */
        public hidden: number;

        /** GameSnapshot bonus. */
        public bonus?: (BonusProto.IBonus|null);

        /**
         * Creates a new GameSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSnapshot instance
         */
        public static create(properties?: CommonProto.IGameSnapshot): CommonProto.GameSnapshot;

        /**
         * Encodes the specified GameSnapshot message. Does not implicitly {@link CommonProto.GameSnapshot.verify|verify} messages.
         * @param message GameSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CommonProto.IGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSnapshot message, length delimited. Does not implicitly {@link CommonProto.GameSnapshot.verify|verify} messages.
         * @param message GameSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CommonProto.IGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.GameSnapshot;

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.GameSnapshot;

        /**
         * Verifies a GameSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameSnapshot
         */
        public static fromObject(object: { [k: string]: any }): CommonProto.GameSnapshot;

        /**
         * Creates a plain object from a GameSnapshot message. Also converts values to other types if specified.
         * @param message GameSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CommonProto.GameSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameSnapshot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace DataServerCommonProto. */
export namespace DataServerCommonProto {

    /** Properties of a DealerLogin. */
    interface IDealerLogin {

        /** DealerLogin dealername */
        dealername?: (string|null);
    }

    /** Represents a DealerLogin. */
    class DealerLogin implements IDealerLogin {

        /**
         * Constructs a new DealerLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IDealerLogin);

        /** DealerLogin dealername. */
        public dealername: string;

        /**
         * Creates a new DealerLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DealerLogin instance
         */
        public static create(properties?: DataServerCommonProto.IDealerLogin): DataServerCommonProto.DealerLogin;

        /**
         * Encodes the specified DealerLogin message. Does not implicitly {@link DataServerCommonProto.DealerLogin.verify|verify} messages.
         * @param message DealerLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IDealerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DealerLogin message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerLogin.verify|verify} messages.
         * @param message DealerLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IDealerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DealerLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DealerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.DealerLogin;

        /**
         * Decodes a DealerLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DealerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.DealerLogin;

        /**
         * Verifies a DealerLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DealerLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DealerLogin
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.DealerLogin;

        /**
         * Creates a plain object from a DealerLogin message. Also converts values to other types if specified.
         * @param message DealerLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.DealerLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DealerLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DealerLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MultiplierItem. */
    interface IMultiplierItem {

        /** MultiplierItem val */
        val?: (number|null);

        /** MultiplierItem currOdds */
        currOdds?: (number|null);

        /** MultiplierItem oldOdds */
        oldOdds?: (number|null);

        /** MultiplierItem eventtype */
        eventtype?: (number|null);
    }

    /** Represents a MultiplierItem. */
    class MultiplierItem implements IMultiplierItem {

        /**
         * Constructs a new MultiplierItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IMultiplierItem);

        /** MultiplierItem val. */
        public val: number;

        /** MultiplierItem currOdds. */
        public currOdds: number;

        /** MultiplierItem oldOdds. */
        public oldOdds: number;

        /** MultiplierItem eventtype. */
        public eventtype: number;

        /**
         * Creates a new MultiplierItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiplierItem instance
         */
        public static create(properties?: DataServerCommonProto.IMultiplierItem): DataServerCommonProto.MultiplierItem;

        /**
         * Encodes the specified MultiplierItem message. Does not implicitly {@link DataServerCommonProto.MultiplierItem.verify|verify} messages.
         * @param message MultiplierItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IMultiplierItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiplierItem message, length delimited. Does not implicitly {@link DataServerCommonProto.MultiplierItem.verify|verify} messages.
         * @param message MultiplierItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IMultiplierItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiplierItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiplierItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.MultiplierItem;

        /**
         * Decodes a MultiplierItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiplierItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.MultiplierItem;

        /**
         * Verifies a MultiplierItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiplierItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiplierItem
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.MultiplierItem;

        /**
         * Creates a plain object from a MultiplierItem message. Also converts values to other types if specified.
         * @param message MultiplierItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.MultiplierItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiplierItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MultiplierItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card val */
        val?: (number|null);

        /** Card handindex */
        handindex?: (number|null);

        /** Card cardindex */
        cardindex?: (number|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.ICard);

        /** Card val. */
        public val: number;

        /** Card handindex. */
        public handindex: number;

        /** Card cardindex. */
        public cardindex: number;

        /**
         * Creates a new Card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Card instance
         */
        public static create(properties?: DataServerCommonProto.ICard): DataServerCommonProto.Card;

        /**
         * Encodes the specified Card message. Does not implicitly {@link DataServerCommonProto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link DataServerCommonProto.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.Card;

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.Card;

        /**
         * Verifies a Card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Card
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.Card;

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @param message Card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Card
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MultiplierEvent. */
    interface IMultiplierEvent {

        /** MultiplierEvent vid */
        vid?: (string|null);

        /** MultiplierEvent gmcode */
        gmcode?: (string|null);

        /** MultiplierEvent items */
        items?: (DataServerCommonProto.IMultiplierItem[]|null);
    }

    /** Represents a MultiplierEvent. */
    class MultiplierEvent implements IMultiplierEvent {

        /**
         * Constructs a new MultiplierEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IMultiplierEvent);

        /** MultiplierEvent vid. */
        public vid: string;

        /** MultiplierEvent gmcode. */
        public gmcode: string;

        /** MultiplierEvent items. */
        public items: DataServerCommonProto.IMultiplierItem[];

        /**
         * Creates a new MultiplierEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiplierEvent instance
         */
        public static create(properties?: DataServerCommonProto.IMultiplierEvent): DataServerCommonProto.MultiplierEvent;

        /**
         * Encodes the specified MultiplierEvent message. Does not implicitly {@link DataServerCommonProto.MultiplierEvent.verify|verify} messages.
         * @param message MultiplierEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IMultiplierEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiplierEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.MultiplierEvent.verify|verify} messages.
         * @param message MultiplierEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IMultiplierEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiplierEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiplierEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.MultiplierEvent;

        /**
         * Decodes a MultiplierEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiplierEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.MultiplierEvent;

        /**
         * Verifies a MultiplierEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiplierEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiplierEvent
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.MultiplierEvent;

        /**
         * Creates a plain object from a MultiplierEvent message. Also converts values to other types if specified.
         * @param message MultiplierEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.MultiplierEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiplierEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MultiplierEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequireNewCard. */
    interface IRequireNewCard {

        /** RequireNewCard vid */
        vid?: (string|null);

        /** RequireNewCard gmcode */
        gmcode?: (string|null);

        /** RequireNewCard handindex */
        handindex?: (number|null);

        /** RequireNewCard cardindex */
        cardindex?: (number|null);
    }

    /** Represents a RequireNewCard. */
    class RequireNewCard implements IRequireNewCard {

        /**
         * Constructs a new RequireNewCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IRequireNewCard);

        /** RequireNewCard vid. */
        public vid: string;

        /** RequireNewCard gmcode. */
        public gmcode: string;

        /** RequireNewCard handindex. */
        public handindex: number;

        /** RequireNewCard cardindex. */
        public cardindex: number;

        /**
         * Creates a new RequireNewCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequireNewCard instance
         */
        public static create(properties?: DataServerCommonProto.IRequireNewCard): DataServerCommonProto.RequireNewCard;

        /**
         * Encodes the specified RequireNewCard message. Does not implicitly {@link DataServerCommonProto.RequireNewCard.verify|verify} messages.
         * @param message RequireNewCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IRequireNewCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequireNewCard message, length delimited. Does not implicitly {@link DataServerCommonProto.RequireNewCard.verify|verify} messages.
         * @param message RequireNewCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IRequireNewCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequireNewCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequireNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.RequireNewCard;

        /**
         * Decodes a RequireNewCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequireNewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.RequireNewCard;

        /**
         * Verifies a RequireNewCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequireNewCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequireNewCard
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.RequireNewCard;

        /**
         * Creates a plain object from a RequireNewCard message. Also converts values to other types if specified.
         * @param message RequireNewCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.RequireNewCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequireNewCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequireNewCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NewCard. */
    interface INewCard {

        /** NewCard vid */
        vid?: (string|null);

        /** NewCard gmcode */
        gmcode?: (string|null);

        /** NewCard cards */
        cards?: (DataServerCommonProto.ICard[]|null);

        /** NewCard events */
        events?: (DataServerCommonProto.IMultiplierItem[]|null);

        /** NewCard extrainfo */
        extrainfo?: (DataServerCommonProto.NewCard.IExtraInfo|null);
    }

    /** Represents a NewCard. */
    class NewCard implements INewCard {

        /**
         * Constructs a new NewCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.INewCard);

        /** NewCard vid. */
        public vid: string;

        /** NewCard gmcode. */
        public gmcode: string;

        /** NewCard cards. */
        public cards: DataServerCommonProto.ICard[];

        /** NewCard events. */
        public events: DataServerCommonProto.IMultiplierItem[];

        /** NewCard extrainfo. */
        public extrainfo?: (DataServerCommonProto.NewCard.IExtraInfo|null);

        /**
         * Creates a new NewCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewCard instance
         */
        public static create(properties?: DataServerCommonProto.INewCard): DataServerCommonProto.NewCard;

        /**
         * Encodes the specified NewCard message. Does not implicitly {@link DataServerCommonProto.NewCard.verify|verify} messages.
         * @param message NewCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.INewCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewCard message, length delimited. Does not implicitly {@link DataServerCommonProto.NewCard.verify|verify} messages.
         * @param message NewCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.INewCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.NewCard;

        /**
         * Decodes a NewCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.NewCard;

        /**
         * Verifies a NewCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewCard
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.NewCard;

        /**
         * Creates a plain object from a NewCard message. Also converts values to other types if specified.
         * @param message NewCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.NewCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NewCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace NewCard {

        /** Properties of an ExtraInfo. */
        interface IExtraInfo {

            /** ExtraInfo isbj */
            isbj?: (boolean|null);
        }

        /** Represents an ExtraInfo. */
        class ExtraInfo implements IExtraInfo {

            /**
             * Constructs a new ExtraInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: DataServerCommonProto.NewCard.IExtraInfo);

            /** ExtraInfo isbj. */
            public isbj: boolean;

            /**
             * Creates a new ExtraInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtraInfo instance
             */
            public static create(properties?: DataServerCommonProto.NewCard.IExtraInfo): DataServerCommonProto.NewCard.ExtraInfo;

            /**
             * Encodes the specified ExtraInfo message. Does not implicitly {@link DataServerCommonProto.NewCard.ExtraInfo.verify|verify} messages.
             * @param message ExtraInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DataServerCommonProto.NewCard.IExtraInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtraInfo message, length delimited. Does not implicitly {@link DataServerCommonProto.NewCard.ExtraInfo.verify|verify} messages.
             * @param message ExtraInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DataServerCommonProto.NewCard.IExtraInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtraInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtraInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.NewCard.ExtraInfo;

            /**
             * Decodes an ExtraInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtraInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.NewCard.ExtraInfo;

            /**
             * Verifies an ExtraInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtraInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtraInfo
             */
            public static fromObject(object: { [k: string]: any }): DataServerCommonProto.NewCard.ExtraInfo;

            /**
             * Creates a plain object from an ExtraInfo message. Also converts values to other types if specified.
             * @param message ExtraInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DataServerCommonProto.NewCard.ExtraInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtraInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtraInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CloseRound. */
    interface ICloseRound {

        /** CloseRound vid */
        vid?: (string|null);

        /** CloseRound gmcode */
        gmcode?: (string|null);

        /** CloseRound cards */
        cards?: (DataServerCommonProto.ICard[]|null);

        /** CloseRound items */
        items?: (DataServerCommonProto.IMultiplierItem[]|null);
    }

    /** Represents a CloseRound. */
    class CloseRound implements ICloseRound {

        /**
         * Constructs a new CloseRound.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.ICloseRound);

        /** CloseRound vid. */
        public vid: string;

        /** CloseRound gmcode. */
        public gmcode: string;

        /** CloseRound cards. */
        public cards: DataServerCommonProto.ICard[];

        /** CloseRound items. */
        public items: DataServerCommonProto.IMultiplierItem[];

        /**
         * Creates a new CloseRound instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseRound instance
         */
        public static create(properties?: DataServerCommonProto.ICloseRound): DataServerCommonProto.CloseRound;

        /**
         * Encodes the specified CloseRound message. Does not implicitly {@link DataServerCommonProto.CloseRound.verify|verify} messages.
         * @param message CloseRound message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.ICloseRound, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseRound message, length delimited. Does not implicitly {@link DataServerCommonProto.CloseRound.verify|verify} messages.
         * @param message CloseRound message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.ICloseRound, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseRound message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.CloseRound;

        /**
         * Decodes a CloseRound message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.CloseRound;

        /**
         * Verifies a CloseRound message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseRound message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseRound
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.CloseRound;

        /**
         * Creates a plain object from a CloseRound message. Also converts values to other types if specified.
         * @param message CloseRound
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.CloseRound, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseRound to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CloseRound
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ModifyCard. */
    interface IModifyCard {

        /** ModifyCard vid */
        vid?: (string|null);

        /** ModifyCard gmcode */
        gmcode?: (string|null);

        /** ModifyCard cardval */
        cardval?: (number|null);

        /** ModifyCard index */
        index?: (number|null);

        /** ModifyCard handindex */
        handindex?: (number|null);
    }

    /** Represents a ModifyCard. */
    class ModifyCard implements IModifyCard {

        /**
         * Constructs a new ModifyCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IModifyCard);

        /** ModifyCard vid. */
        public vid: string;

        /** ModifyCard gmcode. */
        public gmcode: string;

        /** ModifyCard cardval. */
        public cardval: number;

        /** ModifyCard index. */
        public index: number;

        /** ModifyCard handindex. */
        public handindex: number;

        /**
         * Creates a new ModifyCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyCard instance
         */
        public static create(properties?: DataServerCommonProto.IModifyCard): DataServerCommonProto.ModifyCard;

        /**
         * Encodes the specified ModifyCard message. Does not implicitly {@link DataServerCommonProto.ModifyCard.verify|verify} messages.
         * @param message ModifyCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IModifyCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyCard message, length delimited. Does not implicitly {@link DataServerCommonProto.ModifyCard.verify|verify} messages.
         * @param message ModifyCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IModifyCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.ModifyCard;

        /**
         * Decodes a ModifyCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.ModifyCard;

        /**
         * Verifies a ModifyCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyCard
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.ModifyCard;

        /**
         * Creates a plain object from a ModifyCard message. Also converts values to other types if specified.
         * @param message ModifyCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.ModifyCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModifyCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MaintenanceNotify. */
    interface IMaintenanceNotify {

        /** MaintenanceNotify vid */
        vid?: (string|null);

        /** MaintenanceNotify begintime */
        begintime?: (number|null);

        /** MaintenanceNotify duration */
        duration?: (number|null);

        /** MaintenanceNotify type */
        type?: (DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType|null);
    }

    /** Represents a MaintenanceNotify. */
    class MaintenanceNotify implements IMaintenanceNotify {

        /**
         * Constructs a new MaintenanceNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IMaintenanceNotify);

        /** MaintenanceNotify vid. */
        public vid: string;

        /** MaintenanceNotify begintime. */
        public begintime: number;

        /** MaintenanceNotify duration. */
        public duration: number;

        /** MaintenanceNotify type. */
        public type: DataServerCommonProto.MaintenanceNotify.MaintenanceNotifyType;

        /**
         * Creates a new MaintenanceNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MaintenanceNotify instance
         */
        public static create(properties?: DataServerCommonProto.IMaintenanceNotify): DataServerCommonProto.MaintenanceNotify;

        /**
         * Encodes the specified MaintenanceNotify message. Does not implicitly {@link DataServerCommonProto.MaintenanceNotify.verify|verify} messages.
         * @param message MaintenanceNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IMaintenanceNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaintenanceNotify message, length delimited. Does not implicitly {@link DataServerCommonProto.MaintenanceNotify.verify|verify} messages.
         * @param message MaintenanceNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IMaintenanceNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaintenanceNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MaintenanceNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.MaintenanceNotify;

        /**
         * Decodes a MaintenanceNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MaintenanceNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.MaintenanceNotify;

        /**
         * Verifies a MaintenanceNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MaintenanceNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaintenanceNotify
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.MaintenanceNotify;

        /**
         * Creates a plain object from a MaintenanceNotify message. Also converts values to other types if specified.
         * @param message MaintenanceNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.MaintenanceNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaintenanceNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MaintenanceNotify
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MaintenanceNotify {

        /** MaintenanceNotifyType enum. */
        enum MaintenanceNotifyType {
            WithdrawMaintenance = 0,
            ComingMaintenance = 1,
            CurrentMaintenance = 2
        }
    }

    /** Properties of a ResetCard. */
    interface IResetCard {

        /** ResetCard vid */
        vid?: (string|null);

        /** ResetCard gmcode */
        gmcode?: (string|null);

        /** ResetCard index */
        index?: (number|null);

        /** ResetCard handindex */
        handindex?: (number|null);
    }

    /** Represents a ResetCard. */
    class ResetCard implements IResetCard {

        /**
         * Constructs a new ResetCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IResetCard);

        /** ResetCard vid. */
        public vid: string;

        /** ResetCard gmcode. */
        public gmcode: string;

        /** ResetCard index. */
        public index: number;

        /** ResetCard handindex. */
        public handindex: number;

        /**
         * Creates a new ResetCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResetCard instance
         */
        public static create(properties?: DataServerCommonProto.IResetCard): DataServerCommonProto.ResetCard;

        /**
         * Encodes the specified ResetCard message. Does not implicitly {@link DataServerCommonProto.ResetCard.verify|verify} messages.
         * @param message ResetCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IResetCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResetCard message, length delimited. Does not implicitly {@link DataServerCommonProto.ResetCard.verify|verify} messages.
         * @param message ResetCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IResetCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResetCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.ResetCard;

        /**
         * Decodes a ResetCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.ResetCard;

        /**
         * Verifies a ResetCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResetCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResetCard
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.ResetCard;

        /**
         * Creates a plain object from a ResetCard message. Also converts values to other types if specified.
         * @param message ResetCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.ResetCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResetCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResetCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CancelRound. */
    interface ICancelRound {

        /** CancelRound vid */
        vid?: (string|null);

        /** CancelRound gmcode */
        gmcode?: (string|null);

        /** CancelRound pitbossid */
        pitbossid?: (string|null);

        /** CancelRound remark */
        remark?: (string|null);
    }

    /** Represents a CancelRound. */
    class CancelRound implements ICancelRound {

        /**
         * Constructs a new CancelRound.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.ICancelRound);

        /** CancelRound vid. */
        public vid: string;

        /** CancelRound gmcode. */
        public gmcode: string;

        /** CancelRound pitbossid. */
        public pitbossid: string;

        /** CancelRound remark. */
        public remark: string;

        /**
         * Creates a new CancelRound instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelRound instance
         */
        public static create(properties?: DataServerCommonProto.ICancelRound): DataServerCommonProto.CancelRound;

        /**
         * Encodes the specified CancelRound message. Does not implicitly {@link DataServerCommonProto.CancelRound.verify|verify} messages.
         * @param message CancelRound message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.ICancelRound, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelRound message, length delimited. Does not implicitly {@link DataServerCommonProto.CancelRound.verify|verify} messages.
         * @param message CancelRound message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.ICancelRound, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelRound message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.CancelRound;

        /**
         * Decodes a CancelRound message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.CancelRound;

        /**
         * Verifies a CancelRound message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelRound message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelRound
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.CancelRound;

        /**
         * Creates a plain object from a CancelRound message. Also converts values to other types if specified.
         * @param message CancelRound
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.CancelRound, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelRound to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelRound
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DealerMaintainAction. */
    interface IDealerMaintainAction {

        /** DealerMaintainAction vid */
        vid?: (string|null);

        /** DealerMaintainAction type */
        type?: (DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType|null);

        /** DealerMaintainAction pitbossid */
        pitbossid?: (string|null);

        /** DealerMaintainAction remark */
        remark?: (string|null);

        /** DealerMaintainAction begintime */
        begintime?: (number|null);

        /** DealerMaintainAction duration */
        duration?: (number|null);
    }

    /** Represents a DealerMaintainAction. */
    class DealerMaintainAction implements IDealerMaintainAction {

        /**
         * Constructs a new DealerMaintainAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IDealerMaintainAction);

        /** DealerMaintainAction vid. */
        public vid: string;

        /** DealerMaintainAction type. */
        public type: DataServerCommonProto.DealerMaintainAction.DealerMaintainActionType;

        /** DealerMaintainAction pitbossid. */
        public pitbossid: string;

        /** DealerMaintainAction remark. */
        public remark: string;

        /** DealerMaintainAction begintime. */
        public begintime: number;

        /** DealerMaintainAction duration. */
        public duration: number;

        /**
         * Creates a new DealerMaintainAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DealerMaintainAction instance
         */
        public static create(properties?: DataServerCommonProto.IDealerMaintainAction): DataServerCommonProto.DealerMaintainAction;

        /**
         * Encodes the specified DealerMaintainAction message. Does not implicitly {@link DataServerCommonProto.DealerMaintainAction.verify|verify} messages.
         * @param message DealerMaintainAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IDealerMaintainAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DealerMaintainAction message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerMaintainAction.verify|verify} messages.
         * @param message DealerMaintainAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IDealerMaintainAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DealerMaintainAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DealerMaintainAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.DealerMaintainAction;

        /**
         * Decodes a DealerMaintainAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DealerMaintainAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.DealerMaintainAction;

        /**
         * Verifies a DealerMaintainAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DealerMaintainAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DealerMaintainAction
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.DealerMaintainAction;

        /**
         * Creates a plain object from a DealerMaintainAction message. Also converts values to other types if specified.
         * @param message DealerMaintainAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.DealerMaintainAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DealerMaintainAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DealerMaintainAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DealerMaintainAction {

        /** DealerMaintainActionType enum. */
        enum DealerMaintainActionType {
            WithdrawMaintain = 0,
            StartMaintain = 1
        }
    }

    /** Properties of a DealerMaintainEvent. */
    interface IDealerMaintainEvent {
    }

    /** Represents a DealerMaintainEvent. */
    class DealerMaintainEvent implements IDealerMaintainEvent {

        /**
         * Constructs a new DealerMaintainEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IDealerMaintainEvent);

        /**
         * Creates a new DealerMaintainEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DealerMaintainEvent instance
         */
        public static create(properties?: DataServerCommonProto.IDealerMaintainEvent): DataServerCommonProto.DealerMaintainEvent;

        /**
         * Encodes the specified DealerMaintainEvent message. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.verify|verify} messages.
         * @param message DealerMaintainEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IDealerMaintainEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DealerMaintainEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.verify|verify} messages.
         * @param message DealerMaintainEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IDealerMaintainEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DealerMaintainEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DealerMaintainEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.DealerMaintainEvent;

        /**
         * Decodes a DealerMaintainEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DealerMaintainEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.DealerMaintainEvent;

        /**
         * Verifies a DealerMaintainEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DealerMaintainEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DealerMaintainEvent
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.DealerMaintainEvent;

        /**
         * Creates a plain object from a DealerMaintainEvent message. Also converts values to other types if specified.
         * @param message DealerMaintainEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.DealerMaintainEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DealerMaintainEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DealerMaintainEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DealerMaintainEvent {

        /** Properties of a MaintainEvent. */
        interface IMaintainEvent {

            /** MaintainEvent eventid */
            eventid?: (string|null);

            /** MaintainEvent vid */
            vid?: (string|null);

            /** MaintainEvent pitbossid */
            pitbossid?: (string|null);

            /** MaintainEvent begintime */
            begintime?: (number|null);

            /** MaintainEvent duration */
            duration?: (number|null);

            /** MaintainEvent flag */
            flag?: (number|null);
        }

        /** Represents a MaintainEvent. */
        class MaintainEvent implements IMaintainEvent {

            /**
             * Constructs a new MaintainEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: DataServerCommonProto.DealerMaintainEvent.IMaintainEvent);

            /** MaintainEvent eventid. */
            public eventid: string;

            /** MaintainEvent vid. */
            public vid: string;

            /** MaintainEvent pitbossid. */
            public pitbossid: string;

            /** MaintainEvent begintime. */
            public begintime: number;

            /** MaintainEvent duration. */
            public duration: number;

            /** MaintainEvent flag. */
            public flag: number;

            /**
             * Creates a new MaintainEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MaintainEvent instance
             */
            public static create(properties?: DataServerCommonProto.DealerMaintainEvent.IMaintainEvent): DataServerCommonProto.DealerMaintainEvent.MaintainEvent;

            /**
             * Encodes the specified MaintainEvent message. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.MaintainEvent.verify|verify} messages.
             * @param message MaintainEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DataServerCommonProto.DealerMaintainEvent.IMaintainEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MaintainEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.DealerMaintainEvent.MaintainEvent.verify|verify} messages.
             * @param message MaintainEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DataServerCommonProto.DealerMaintainEvent.IMaintainEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MaintainEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MaintainEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.DealerMaintainEvent.MaintainEvent;

            /**
             * Decodes a MaintainEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MaintainEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.DealerMaintainEvent.MaintainEvent;

            /**
             * Verifies a MaintainEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MaintainEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MaintainEvent
             */
            public static fromObject(object: { [k: string]: any }): DataServerCommonProto.DealerMaintainEvent.MaintainEvent;

            /**
             * Creates a plain object from a MaintainEvent message. Also converts values to other types if specified.
             * @param message MaintainEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DataServerCommonProto.DealerMaintainEvent.MaintainEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MaintainEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MaintainEvent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a GameSnapshot. */
    interface IGameSnapshot {

        /** GameSnapshot gmtype */
        gmtype?: (string|null);

        /** GameSnapshot gmcode */
        gmcode?: (string|null);

        /** GameSnapshot gmstatus */
        gmstatus?: (number|null);

        /** GameSnapshot maxtimeout */
        maxtimeout?: (number|null);

        /** GameSnapshot timeout */
        timeout?: (number|null);

        /** GameSnapshot timestamp */
        timestamp?: (number|null);

        /** GameSnapshot cards */
        cards?: (number[]|null);

        /** GameSnapshot headcard */
        headcard?: (number|null);

        /** GameSnapshot bcards */
        bcards?: (number[]|null);

        /** GameSnapshot p1cards */
        p1cards?: (number[]|null);

        /** GameSnapshot p2cards */
        p2cards?: (number[]|null);

        /** GameSnapshot p3cards */
        p3cards?: (number[]|null);

        /** GameSnapshot bval */
        bval?: (number|null);

        /** GameSnapshot p1val */
        p1val?: (number|null);

        /** GameSnapshot p2val */
        p2val?: (number|null);

        /** GameSnapshot p3val */
        p3val?: (number|null);

        /** GameSnapshot wintypes */
        wintypes?: (number[]|null);

        /** GameSnapshot event */
        event?: (DataServerCommonProto.GameSnapshot.IExtraEvent|null);
    }

    /** Represents a GameSnapshot. */
    class GameSnapshot implements IGameSnapshot {

        /**
         * Constructs a new GameSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IGameSnapshot);

        /** GameSnapshot gmtype. */
        public gmtype: string;

        /** GameSnapshot gmcode. */
        public gmcode: string;

        /** GameSnapshot gmstatus. */
        public gmstatus: number;

        /** GameSnapshot maxtimeout. */
        public maxtimeout: number;

        /** GameSnapshot timeout. */
        public timeout: number;

        /** GameSnapshot timestamp. */
        public timestamp: number;

        /** GameSnapshot cards. */
        public cards: number[];

        /** GameSnapshot headcard. */
        public headcard: number;

        /** GameSnapshot bcards. */
        public bcards: number[];

        /** GameSnapshot p1cards. */
        public p1cards: number[];

        /** GameSnapshot p2cards. */
        public p2cards: number[];

        /** GameSnapshot p3cards. */
        public p3cards: number[];

        /** GameSnapshot bval. */
        public bval: number;

        /** GameSnapshot p1val. */
        public p1val: number;

        /** GameSnapshot p2val. */
        public p2val: number;

        /** GameSnapshot p3val. */
        public p3val: number;

        /** GameSnapshot wintypes. */
        public wintypes: number[];

        /** GameSnapshot event. */
        public event?: (DataServerCommonProto.GameSnapshot.IExtraEvent|null);

        /**
         * Creates a new GameSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSnapshot instance
         */
        public static create(properties?: DataServerCommonProto.IGameSnapshot): DataServerCommonProto.GameSnapshot;

        /**
         * Encodes the specified GameSnapshot message. Does not implicitly {@link DataServerCommonProto.GameSnapshot.verify|verify} messages.
         * @param message GameSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSnapshot message, length delimited. Does not implicitly {@link DataServerCommonProto.GameSnapshot.verify|verify} messages.
         * @param message GameSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.GameSnapshot;

        /**
         * Decodes a GameSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.GameSnapshot;

        /**
         * Verifies a GameSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameSnapshot
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.GameSnapshot;

        /**
         * Creates a plain object from a GameSnapshot message. Also converts values to other types if specified.
         * @param message GameSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.GameSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameSnapshot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace GameSnapshot {

        /** Properties of an ExtraEvent. */
        interface IExtraEvent {

            /** ExtraEvent multipliers */
            multipliers?: (DataServerCommonProto.IMultiplierItem[]|null);
        }

        /** Represents an ExtraEvent. */
        class ExtraEvent implements IExtraEvent {

            /**
             * Constructs a new ExtraEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: DataServerCommonProto.GameSnapshot.IExtraEvent);

            /** ExtraEvent multipliers. */
            public multipliers: DataServerCommonProto.IMultiplierItem[];

            /**
             * Creates a new ExtraEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtraEvent instance
             */
            public static create(properties?: DataServerCommonProto.GameSnapshot.IExtraEvent): DataServerCommonProto.GameSnapshot.ExtraEvent;

            /**
             * Encodes the specified ExtraEvent message. Does not implicitly {@link DataServerCommonProto.GameSnapshot.ExtraEvent.verify|verify} messages.
             * @param message ExtraEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DataServerCommonProto.GameSnapshot.IExtraEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtraEvent message, length delimited. Does not implicitly {@link DataServerCommonProto.GameSnapshot.ExtraEvent.verify|verify} messages.
             * @param message ExtraEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DataServerCommonProto.GameSnapshot.IExtraEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtraEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtraEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.GameSnapshot.ExtraEvent;

            /**
             * Decodes an ExtraEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtraEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.GameSnapshot.ExtraEvent;

            /**
             * Verifies an ExtraEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtraEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtraEvent
             */
            public static fromObject(object: { [k: string]: any }): DataServerCommonProto.GameSnapshot.ExtraEvent;

            /**
             * Creates a plain object from an ExtraEvent message. Also converts values to other types if specified.
             * @param message ExtraEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DataServerCommonProto.GameSnapshot.ExtraEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtraEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtraEvent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BacResult. */
    interface IBacResult {

        /** BacResult vid */
        vid?: (string|null);

        /** BacResult gmcode */
        gmcode?: (string|null);

        /** BacResult result */
        result?: (number|null);
    }

    /** Represents a BacResult. */
    class BacResult implements IBacResult {

        /**
         * Constructs a new BacResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: DataServerCommonProto.IBacResult);

        /** BacResult vid. */
        public vid: string;

        /** BacResult gmcode. */
        public gmcode: string;

        /** BacResult result. */
        public result: number;

        /**
         * Creates a new BacResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BacResult instance
         */
        public static create(properties?: DataServerCommonProto.IBacResult): DataServerCommonProto.BacResult;

        /**
         * Encodes the specified BacResult message. Does not implicitly {@link DataServerCommonProto.BacResult.verify|verify} messages.
         * @param message BacResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DataServerCommonProto.IBacResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BacResult message, length delimited. Does not implicitly {@link DataServerCommonProto.BacResult.verify|verify} messages.
         * @param message BacResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DataServerCommonProto.IBacResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BacResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BacResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataServerCommonProto.BacResult;

        /**
         * Decodes a BacResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BacResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataServerCommonProto.BacResult;

        /**
         * Verifies a BacResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BacResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BacResult
         */
        public static fromObject(object: { [k: string]: any }): DataServerCommonProto.BacResult;

        /**
         * Creates a plain object from a BacResult message. Also converts values to other types if specified.
         * @param message BacResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DataServerCommonProto.BacResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BacResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BacResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
