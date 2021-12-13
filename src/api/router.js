const Router = require('@koa/router');
const { PREFIX: prefix } = require('../services/configService');
const { getHealthRoute } = require('./routes/health/getHealthRoute');
const { historyRouter } = require('./routes/history');

const router = new Router({ prefix });

/*
- GET   /history/health

- POST  /history { data: { userId, videoId } }  => создаём запись истории
- GET   /history ? userId=&limit=               => получаем историю юзера
*/

router
  .get('/health', getHealthRoute)
  .use(historyRouter.routes(), historyRouter.allowedMethods());

module.exports = { router };
