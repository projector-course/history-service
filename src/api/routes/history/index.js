const Router = require('@koa/router');
const { validate } = require('../../../middlewares/validator');
const { writeHistory } = require('../../controllers/historyController/writeHistory');
const { getHistory } = require('../../controllers/historyController/getHistory');

const router = new Router();

/*
- POST  /history { data: { userId, videoId } }  => создаём запись истории
- GET   /history ? userId=&limit=               => получаем историю юзера
*/

router.post('/', validate.post, async (ctx) => {
  const { path, request: { body } } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const [created, history] = await writeHistory(body);

  ctx.status = created ? 201 : 200;
  ctx.body = history;
});

router.get('/', validate.get, async (ctx) => {
  const { path, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  ctx.body = await getHistory(query);
});

module.exports = { historyRouter: router };
