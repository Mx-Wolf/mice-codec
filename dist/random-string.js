"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = exports.loadRandomBlob = void 0;
const settings_1 = require("./settings");
const getParams = (length) => ({ name: settings_1.NAME, length });
const generateKey = (algo) => window.crypto.subtle.generateKey(algo, settings_1.EXTRACTABLE_KEY, settings_1.USAGE);
const isCryptoKey = (key) => 'type' in key;
const makeIv = () => Array.from(window.crypto.getRandomValues(new Uint8Array(settings_1.IV_LENGTH)));
const prepareKey = (json) => ({ json, iv: makeIv() });
const exportKey = (key) => window.crypto.subtle.exportKey(settings_1.FORMAT, key).then((json) => JSON.stringify(prepareKey(json)));
const getRandomBits = (length = settings_1.LENGTH) => {
    const buffer = new Int8Array(length);
    crypto.getRandomValues(buffer);
    return buffer;
};
const getRandomBlob = (length = settings_1.LENGTH) => new Blob([getRandomBits(length)]);
const loadRandomBlob = (reader, length = settings_1.LENGTH) => {
    reader.readAsDataURL(getRandomBlob(length));
};
exports.loadRandomBlob = loadRandomBlob;
const getRandomString = async () => {
    const key = await generateKey(getParams(settings_1.LENGTH));
    if (!isCryptoKey(key)) {
        throw new Error('can not generate secret key');
    }
    return await exportKey(key);
};
exports.getRandomString = getRandomString;
