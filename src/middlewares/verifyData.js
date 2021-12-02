const { findHistory } = require('../api/controllers/historyController/findHistory');

const verifyData = async (ctx, next) => {
  const { request: { body } } = ctx;
  const { userId, videoId } = body;

  if (!userId || !videoId) ctx.throw(400);

  const history = await findHistory(userId, videoId);
  if (history) ctx.throw(409);

  ctx.user = { id: userId };
  ctx.video = { id: videoId };

  await next();
};

module.exports = { verifyData };
