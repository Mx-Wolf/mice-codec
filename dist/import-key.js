"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importKey = void 0;
const settings_1 = require("./settings");
const getAesKeyAlgorithm = () => ({ length: settings_1.LENGTH, name: settings_1.NAME });
const isMiceKey = (parsed) => typeof parsed === 'object' && parsed !== null && 'json' in parsed;
const importJwk = (parsed) => window.crypto.subtle.importKey(settings_1.FORMAT, parsed, getAesKeyAlgorithm(), settings_1.EXTRACTABLE_KEY, settings_1.USAGE);
const importKey = async (password) => {
    const jwk = JSON.parse(password);
    if (!isMiceKey(jwk)) {
        throw new Error('incorrect key');
    }
    return {
        key: await importJwk(jwk.json),
        iv: new Uint8Array(jwk.iv),
    };
};
exports.importKey = importKey;
