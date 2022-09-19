"use strict";
/**
 * @param {*} text
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
const slugify = (text, delimiter = "-") => {
    return text.trim().toLowerCase().replace(/\s+/g, delimiter);
};
exports.slugify = slugify;
