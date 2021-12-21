const { getModuleLogger } = require('../../../services/logService');
const { BadMessageError } = require('../../../errors');
const { createHistorySchema } = require('../../schema');
const { writeHistory } = require('./writeHistory');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function writeHistoryMessage(message) {
  let data;
  try {
    data = JSON.parse(message);
  } catch (e) {
    throw new BadMessageError(e.message);
  }

  const { error } = createHistorySchema.validate(data);
  if (error) throw new BadMessageError(error.message);

  return writeHistory(data);
}

module.exports = { writeHistoryMessage };
