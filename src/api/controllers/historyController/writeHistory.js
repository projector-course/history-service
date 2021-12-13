const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

async function writeHistory(data) {
  let history = await db.history.findOne({ where: data });

  /* create history */
  if (!history) {
    history = await db.history.create(data);
    return [true, history];
  }

  /* update history */
  [, [history]] = await db.history.update(
    data,
    { where: { id: history.id }, returning: true },
  );
  return [false, history];
}

module.exports = { writeHistory };
