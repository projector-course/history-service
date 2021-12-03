const { createHistorySchema } = require('../api/schema');
const { findHistory } = require('../api/controllers/historyController/findHistory');

const verifyHistoryData = async (ctx, next) => {
  const { request: { body } } = ctx;

  const { value, error } = createHistorySchema.validate(body);

  if (error) ctx.throw(400, error.message);

  const history = await findHistory(value);
  if (history) ctx.throw(409);

  ctx.history = value;

  await next();
};

module.exports = { verifyHistoryData };
