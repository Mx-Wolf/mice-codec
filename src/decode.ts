import { blobToBuffer } from './blob-transform';
import { importKey } from './import-key';
import { NAME } from './settings';

export const decode = async (password: string, blob: Blob): Promise<Blob> => {
  const { iv, key } = await importKey(password);
  const buffer = await blobToBuffer(blob);
  const x = await window.crypto.subtle.decrypt(
    {
      name: NAME,
      iv,
    },
    key,
    buffer
  );
  return new Blob([x]);
};
