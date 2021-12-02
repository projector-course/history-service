const Router = require('@koa/router');
const { postHistoryRoute } = require('./postHistoryRoute');
const { getHistoryRoute } = require('./getHistoryRoute');
const { verifyData } = require('../../../middlewares/verifyData');
const { verifyUser } = require('../../../middlewares/verifyUser');

const router = new Router();

router
  .post('/', verifyData, postHistoryRoute)
  .get('/', verifyUser, getHistoryRoute);

module.exports = { historyRouter: router };
