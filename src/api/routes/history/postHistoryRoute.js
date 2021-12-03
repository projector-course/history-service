const { createHistory } = require('../../controllers/historyController/createHistory');

const postHistoryRoute = async (ctx) => {
  const { path, history } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await createHistory(history);
};

module.exports = { postHistoryRoute };
