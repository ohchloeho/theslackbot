const { respond } = require("./respond");
const { conditions } = require("../conditions");
const afterReponseHandler = async ({ message, say }) => {
  const delay = 1000;

  setTimeout(async () => {
    await respond({
      response: conditions?.find((condition) => condition.check(message))
        .response,
      message,
      say,
    });
  }, delay);
};

module.exports = { afterReponseHandler };
