const { querySchema } = require('../api/schema');

const verifyQuery = async (ctx, next) => {
  const { query } = ctx;

  const { value, error } = querySchema.validate(query);
  if (error) ctx.throw(400, error.message);

  ctx.params = value;

  return next();
};

module.exports = { verifyQuery };
