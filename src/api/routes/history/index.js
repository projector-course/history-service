const Router = require('@koa/router');
const { postHistoryRoute } = require('./postHistoryRoute');
const { getHistoryRoute } = require('./getHistoryRoute');
const { verifyHistoryData } = require('../../../middlewares/verifyHistoryData');
const { verifyQuery } = require('../../../middlewares/verifyQuery');

const router = new Router();

router
  .post('/', verifyHistoryData, postHistoryRoute)
  .get('/', verifyQuery, getHistoryRoute);

module.exports = { historyRouter: router };
