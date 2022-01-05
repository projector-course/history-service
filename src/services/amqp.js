const rabbit = require('amqplib');
const { getModuleLogger } = require('./logService');
const {
  AMQP_HOST, AMQP_QUEUE_NAME, AMQP_EXCHANGE_NAME, AMQP_EVENT,
} = require('./configService');

const logger = getModuleLogger(module);
logger.debug('SERVICE CREATED');

async function connectAmqp(callback) {
  const connection = await rabbit.connect(AMQP_HOST);
  const channel = await connection.createChannel();
  logger.debug('AMQP channel created');

  const queue = await channel.assertQueue(AMQP_QUEUE_NAME);
  await channel.bindQueue(queue.queue, AMQP_EXCHANGE_NAME, AMQP_EVENT);

  channel.consume(AMQP_QUEUE_NAME, async (m) => {
    await callback(m.content).then(() => channel.ack(m));
  });
}

module.exports = { connectAmqp };
