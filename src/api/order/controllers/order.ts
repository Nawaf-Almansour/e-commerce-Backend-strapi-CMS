/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order', ({ strapi }) =>  ({

  async findOne(ctx) {
    const {code} = ctx.params;

    const entity = await  strapi.query('api::order.order').findOne({code})
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
}
}));
