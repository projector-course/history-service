const Joi = require('joi');

const isId = Joi.number().integer().min(0).required();

const isLimit = Joi.custom((limit, helpers) => {
  if (!limit) return undefined;
  const { value, error } = Joi.number().integer().positive().validate(limit);
  if (error) return helpers.error('any.invalid');
  return value;
});

const createHistorySchema = Joi.object({
  userId: isId,
  videoId: isId,
});

const getHistorySchema = Joi.object({
  userId: isId,
  limit: isLimit,
});

module.exports = { createHistorySchema, getHistorySchema };
