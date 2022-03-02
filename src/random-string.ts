import { EXTRACTABLE_KEY, FORMAT, IV_LENGTH, LENGTH, Length, MiceKey, NAME, USAGE } from './settings';

const getParams = (length:Length)=>({name: NAME, length} as AesKeyGenParams);
const generateKey = (algo: AesKeyGenParams) =>
  window.crypto.subtle.generateKey(algo, EXTRACTABLE_KEY, USAGE);
const isCryptoKey = (key:CryptoKey | CryptoKeyPair): key is CryptoKey => 'type' in key;
const makeIv = ():number[] => Array.from(window.crypto.getRandomValues(new Uint8Array(IV_LENGTH)));
const prepareKey = (json: JsonWebKey): MiceKey => ({json, iv: makeIv()});
const exportKey = (key:CryptoKey) => window.crypto.subtle.exportKey(FORMAT, key).then((json)=>JSON.stringify(prepareKey(json)));

const getRandomBits = (length: number = LENGTH) => {
  const buffer = new Int8Array(length);
  crypto.getRandomValues(buffer);
  return buffer;
};

const getRandomBlob = (length: number =  LENGTH)=> new Blob([getRandomBits(length)]);

export const loadRandomBlob = (reader: FileReader, length: number = LENGTH): void => {
  reader.readAsDataURL(getRandomBlob(length));
};

export const getRandomString = async (): Promise<string> => {
  const key = await generateKey(getParams(LENGTH));
  if(!isCryptoKey(key)){
    throw new Error('can not generate secret key');
  }
  return await exportKey(key);
};

