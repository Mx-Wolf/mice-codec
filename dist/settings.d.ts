export declare const LENGTH = 256;
export declare type Length = 128 | 192 | 256;
export declare const NAME = "AES-CBC";
export declare const EXTRACTABLE_KEY = true;
export declare const USAGE: KeyUsage[];
export declare const FORMAT = "jwk";
export declare const IV_LENGTH = 16;
export interface MiceKey {
    json: JsonWebKey;
    iv: number[];
}
export interface MiceInternals {
    key: CryptoKey;
    iv: Uint8Array;
}
