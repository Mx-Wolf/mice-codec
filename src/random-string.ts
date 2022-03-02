const LENGTH = 256;

const getRandomBits = (length: number = LENGTH) => {
  const buffer = new Int8Array(length);
  crypto.getRandomValues(buffer);
  return buffer;
};

const getRandomBlob = (length: number =  LENGTH)=> new Blob([getRandomBits(length)]);

const getResultString = (target: FileReader | null): string => {
  if (target === null) {
    throw new Error('argument null');
  }
  const result = target.result;
  if (typeof result === 'string') {
    return result;
  }
  throw new TypeError('incorrect result');
};

export const loadRandomBlob = (reader: FileReader, length: number = LENGTH): void => {
  reader.readAsDataURL(getRandomBlob(length));
};

const createLoader = (reader:FileReader)=>new Promise<string>((resolve, reject)=>{
  reader.addEventListener('load',(evt)=>{
    try{
      resolve(getResultString(evt.target));
    }
    catch(err){
      reject(err);
    }
  });
});

export const getRandomString = (length: number = LENGTH):Promise<string> => {
  const reader = new FileReader();
  const result = createLoader(reader);
  loadRandomBlob(reader, length);
  return result;
};

