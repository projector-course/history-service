const { createHistorySchema, getHistorySchema } = require('../api/schema');

const validate = {
  post: async (ctx, next) => {
    const { request: { body } } = ctx;
    const { error } = createHistorySchema.validate(body);
    if (error) ctx.throw(400, error.message);
    await next();
  },

  get: (ctx, next) => {
    const { query } = ctx;
    const { error } = getHistorySchema.validate(query);
    if (error) ctx.throw(400, error.message);
    return next();
  },
};

module.exports = { validate };
