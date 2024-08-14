const { conditions } = require("./conditions");
const { respond } = require("./respond");

const publicChannelResponseHandler = async ({ message, say }) => {
  try {
    if (conditions.some((condition) => condition.check(message))) {
      await respond({
        response: conditions.find((condition) => condition.check(message))
          .response,
        message,
        say,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { publicChannelResponseHandler };
