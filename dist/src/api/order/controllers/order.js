"use strict";
/**
 * order controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::order.order', ({ strapi }) => ({
    async findOne(ctx) {
        const { code } = ctx.params;
        const entity = await strapi.query('api::order.order').findOne({ code });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
