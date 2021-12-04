const { createHistorySchema } = require('../api/schema');

const verifyHistoryData = async (ctx, next) => {
  const { request: { body } } = ctx;

  const { value, error } = createHistorySchema.validate(body);
  if (error) ctx.throw(400, error.message);

  ctx.history = value;

  await next();
};

module.exports = { verifyHistoryData };
