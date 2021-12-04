const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function getHistory({ userId, limit }) {
  return db.history.findAll({
    limit,
    where: { userId },
  });
}

module.exports = { getHistory };
