const KEY_FORMAT = 'raw';
const CRYPTO_KEY_ALGO = 'PBKDF2';
const USAGE:KeyUsage[] = ['encrypt','decrypt'];

const importKeyPreConfigured = async (buffer: ArrayBuffer)=> await window.crypto.subtle.importKey(
  KEY_FORMAT,
  buffer,
  CRYPTO_KEY_ALGO,
  true,
  USAGE
);

export const importKey = async (password: string)=>{
  const res = await fetch(password);
  const blob =  await res.blob();
  const buffer = await blob.arrayBuffer();
  return await importKeyPreConfigured(buffer);
};
