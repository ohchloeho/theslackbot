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

      if (
        conditions.some((condition) => condition.afterResponse !== null)
      ) {
        await conditions
          .find((condition) => condition.check(message))
          .afterResponse({ message, say });
      }
    }
  } catch (error) {
  }
};

module.exports = { publicChannelResponseHandler };
