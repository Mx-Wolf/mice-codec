const getArrayBuffer = (reader: FileReader | null) => {
  if (reader === null) {
    throw new Error('invalid arg');
  }
  const { result } = reader;
  if (result === null || typeof result === 'string') {
    throw new Error('invalid result');
  }
  return result;
};

export const blobToBuffer = (blob: Blob) =>
  new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
      try {
        resolve(getArrayBuffer(evt.target));
      } catch (err) {
        reject(err);
      }
    });
    reader.addEventListener('abort', () => reject(new Error('aborted')));
    reader.addEventListener('error', () => reject(new Error('error')));
    reader.readAsArrayBuffer(blob);
  });
