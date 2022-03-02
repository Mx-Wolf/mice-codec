"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
const blob_transform_1 = require("./blob-transform");
const import_key_1 = require("./import-key");
const settings_1 = require("./settings");
const encode = async (password, blob) => {
    const { iv, key } = await (0, import_key_1.importKey)(password);
    const buffer = await (0, blob_transform_1.blobToBuffer)(blob);
    const x = await window.crypto.subtle.encrypt({
        name: settings_1.NAME,
        iv,
    }, key, buffer);
    return new Blob([x]);
};
exports.encode = encode;
