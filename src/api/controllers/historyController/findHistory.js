const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

const findHistory = async (userId, videoId) => {
  const result = await db.history.findOne({
    where: { userId, videoId },
  });

  return result;
};

module.exports = { findHistory };
