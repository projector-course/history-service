const rabbit = require('amqplib');
const { getModuleLogger } = require('./logService');
const { AMQP_HOST, AMQP_QUEUE_NAME } = require('./configService');

const logger = getModuleLogger(module);
logger.debug('SERVICE CREATED');

async function connectAmqp(callback) {
  const connection = await rabbit.connect(AMQP_HOST);
  const channel = await connection.createChannel();
  logger.debug('AMQP channel created');

  channel.consume(AMQP_QUEUE_NAME, (m) => {
    callback(m.content).then(() => channel.ack(m));
  });
}

module.exports = { connectAmqp };
