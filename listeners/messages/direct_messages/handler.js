// Direct Message Handler
// This handler is triggered when you send a DM to the bot

const { respond } = require("./respond");

const privateMessageHandler = async ({ message, say }) => {
  const text = message.text?.toLowerCase();

  try {
    const triggerPhrases = [
      // Customize trigger phrases between the lines
      // -------------------------------------------------
      "hi",
      "hey",
      "hello",
      "help",
      // -------------------------------------------------
    ];
    if (triggerPhrases.some((phrase) => text.includes(phrase))) {
      await respond({ message, say });
    } else {
      await say(
        // Change this string value to your desired response phrase if not the trigger phrase
        // --------------------------------------------------------------------------------
        'I\'m not sure how to respond to that, please type "help" or "hello" to begin!'
        // --------------------------------------------------------------------------------
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { privateMessageHandler };
