import { importKey } from './import-key';

export const encode = async (password: string, blob: Blob):Promise<Blob>=>{
  //PBKDF2
  const key = await importKey(password);
  
};
