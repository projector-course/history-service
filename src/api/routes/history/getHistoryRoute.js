const { getHistory } = require('../../controllers/historyController/getHistory');
const { strToInteger } = require('../../../utils/helpers');

const getHistoryRoute = async (ctx) => {
  const { path, user, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const limit = strToInteger(query.limit);

  const history = await getHistory(user.id, limit);
  if (!history) ctx.throw(404);

  ctx.body = history;
};

module.exports = { getHistoryRoute };
