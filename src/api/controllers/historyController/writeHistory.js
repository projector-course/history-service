const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

async function writeHistory(history) {
  let result = await db.history.findOne({ where: history });

  if (result) {
    [, [result]] = await db.history.update(
      history,
      { where: { id: result.id }, returning: true },
    );
    return [false, result];
  }

  result = await db.history.create(history);
  return [true, result];
}

module.exports = { writeHistory };
