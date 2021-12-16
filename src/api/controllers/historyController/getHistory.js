const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function getHistory(userId, limit) {
  return db.history.findAll({
    limit: limit || undefined,
    where: { userId },
  });
}

module.exports = { getHistory };
