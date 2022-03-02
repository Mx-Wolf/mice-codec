import { EXTRACTABLE_KEY, FORMAT, LENGTH, MiceInternals, MiceKey, NAME, USAGE } from './settings';

const getAesKeyAlgorithm = () => ({length: LENGTH,name: NAME} as AesKeyAlgorithm);

const isMiceKey = (parsed:unknown):parsed is MiceKey => typeof parsed === 'object' && parsed !== null && 'json' in parsed;

const importJwk = (parsed: JsonWebKey) =>
  window.crypto.subtle.importKey(
    FORMAT,
    parsed,
    getAesKeyAlgorithm(),
    EXTRACTABLE_KEY,
    USAGE
  );

export const importKey = async (password: string): Promise<MiceInternals> => {
  const jwk = JSON.parse(password) as unknown;
  if (!isMiceKey(jwk)) {
    throw new Error('incorrect key');
  }
  return {
    key: await importJwk(jwk.json),
    iv: new Uint8Array(jwk.iv),
  };
};
