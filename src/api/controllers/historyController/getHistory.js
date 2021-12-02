const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

const getHistory = async (userId, limit) => {
  const result = await db.history.findAll({
    limit,
    where: { userId },
  });

  return result;
};

module.exports = { getHistory };
