"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobToBuffer = void 0;
const getArrayBuffer = (reader) => {
    if (reader === null) {
        throw new Error('invalid arg');
    }
    const { result } = reader;
    if (result === null || typeof result === 'string') {
        throw new Error('invalid result');
    }
    return result;
};
const blobToBuffer = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
        try {
            resolve(getArrayBuffer(evt.target));
        }
        catch (err) {
            reject(err);
        }
    });
    reader.addEventListener('abort', () => reject(new Error('aborted')));
    reader.addEventListener('error', () => reject(new Error('error')));
    reader.readAsArrayBuffer(blob);
});
exports.blobToBuffer = blobToBuffer;
