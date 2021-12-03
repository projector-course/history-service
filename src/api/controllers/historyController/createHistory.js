const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

const createHistory = async ({ userId, videoId }) => {
  const result = await db.history.create({
    userId,
    videoId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return result;
};

module.exports = { createHistory };
