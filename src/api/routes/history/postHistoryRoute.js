const { writeHistory } = require('../../controllers/historyController/writeHistory');

const postHistoryRoute = async (ctx) => {
  const { path, history } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  const [created, result] = await writeHistory(history);

  ctx.status = created ? 201 : 200;
  ctx.body = result;
};

module.exports = { postHistoryRoute };
