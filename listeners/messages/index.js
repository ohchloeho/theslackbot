const { publicChannelResponseHandler } = require("./channel_messages/handler");
const { privateMessageHandler } = require("./direct_messages/handler");

const handleMessage = async ({ message, say, ack, logger }) => {
  await ack();

  // Private Message Handler
  if (message.channel.startsWith("D")) {
    await privateMessageHandler({ message, say, ack, logger });
  }

  // Public Message Handler
  if (message.channel.startsWith("C")) {
    await publicChannelResponseHandler({ message, say, ack, logger });
  }
};

module.exports.register = (app) => {
    app.message(handleMessage)
};
