const { getHistorySchema } = require('../api/schema');

const validate = {
  get: (ctx, next) => {
    const { query } = ctx;
    const { error } = getHistorySchema.validate(query);
    if (error) ctx.throw(400, error.message);
    return next();
  },
};

module.exports = { validate };
