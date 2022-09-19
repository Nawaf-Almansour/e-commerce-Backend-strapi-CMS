"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = __importDefault(require("../seed/category"));
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register( /*{ strapi }*/) { },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    bootstrap( /*{ strapi }*/) {
        const { createCoreController } = require("@strapi/strapi").factories;
        const seed = async (collection, data) => {
            try {
                const count = await strapi.query(`api::${collection}.${collection}`).count();
                if (count === 0) {
                    // data.forEach(item =>  strapi.entityService.create(`api::${collection}.${collection}`, item))
                }
            }
            catch (e) {
                console.error('Failed to seed the data', e);
            }
        };
        seed('category', category_1.default).then(e => console.log('category data', e));
    },
};
