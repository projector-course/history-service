const Router = require('@koa/router');
const { isPrivateRequest } = require('../../../middlewares/isPrivateRequest');
const { validate } = require('../../../middlewares/validator');
const { writeHistory } = require('../../controllers/historyController/writeHistory');
const { isAuth } = require('../../../middlewares/isAuth');
const { getHistory } = require('../../controllers/historyController/getHistory');

const router = new Router();

/*
- POST  /history { data: { userId, videoId } }  => создаём запись истории
- GET   /history ? limit=                       => получаем историю юзера
*/

router.post('/', isPrivateRequest, validate.post, async (ctx) => {
  const { path, request: { body } } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const [created, history] = await writeHistory(body);

  ctx.status = created ? 201 : 200;
  ctx.body = history;
});

router.get('/', isAuth, validate.get, async (ctx) => {
  const { path, user, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  ctx.body = await getHistory(user.id, query.limit);
});

module.exports = { historyRouter: router };
