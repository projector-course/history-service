const Router = require('@koa/router');
const { isAuth } = require('../../../middlewares/isAuth');
const { validate } = require('../../../middlewares/validator');
const { getHistory } = require('../../controllers/historyController/getHistory');

const router = new Router();

/*
- GET   /history ? limit=   => получаем историю юзера
*/

router.get('/', isAuth, validate.get, async (ctx) => {
  const { path, user, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  ctx.body = await getHistory(user.id, query.limit);
});

module.exports = { historyRouter: router };
