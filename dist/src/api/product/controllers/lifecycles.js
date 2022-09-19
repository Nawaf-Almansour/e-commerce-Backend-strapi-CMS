"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtil_1 = require("../../util/stringUtil");
exports.default = {
    beforeCreate(event) {
        console.log(event.params.data);
        const { slug, name } = event.params.data;
        if (!slug && name) {
            event.params.data.slug = (0, stringUtil_1.slugify)(name);
        }
    },
};
