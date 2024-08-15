const { publicChannelResponseHandler } = require("./channel_messages/handler");
const { privateMessageHandler } = require("./direct_messages/handler");

const handleMessage = async ({ message, say }) => {

  // Private Message Handler
  if (message.channel.startsWith("D")) {
    await privateMessageHandler({ message, say});
  }

  // Public Message Handler
  if (message.channel.startsWith("C")) {
    await publicChannelResponseHandler({ message, say});
  }
};

module.exports.register = (app) => {
  app.message(handleMessage);
};
