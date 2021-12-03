const { getHistory } = require('../../controllers/historyController/getHistory');

const getHistoryRoute = async (ctx) => {
  const { path, params } = ctx;

  ctx.log.debug('ROUTE: %s', path);

  const history = await getHistory(params);
  if (!history) ctx.throw(404);

  ctx.body = history;
};

module.exports = { getHistoryRoute };
