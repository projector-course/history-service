const { createHistory } = require('../../controllers/historyController/createHistory');

const postHistoryRoute = async (ctx) => {
  const { path, user, video } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await createHistory(user.id, video.id);
};

module.exports = { postHistoryRoute };
