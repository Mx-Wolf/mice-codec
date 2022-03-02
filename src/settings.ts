export const LENGTH = 256;
export type Length = 128 | 192 | 256;
export const NAME = 'AES-CBC';
export const EXTRACTABLE_KEY = true;
export const USAGE: KeyUsage[] = ['encrypt', 'decrypt'];
export const FORMAT = 'jwk';
export const IV_LENGTH = 16;

export interface MiceKey{
  json: JsonWebKey,
  iv: number[],
}


export interface MiceInternals{
  key:CryptoKey,
  iv: Uint8Array,
}
