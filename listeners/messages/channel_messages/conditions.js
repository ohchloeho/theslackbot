// Add your conditions and respond actions here for public channel responses

const { afterReponseHandler } = require("./after_response/handler");

const conditions = [
  {
    check: (message) => message.text.includes("condition 1"),
    response: {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Hi this is in response to condition 1`,
          },
        },
      ],
      text: `response for condition 1`,
    },
    afterResponse: null
  },
  {
    check: (message) => message.text.includes("condition 2"),
    response: {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Hi this is in response to condition 2, this has an after response that will appear in 1000ms. This can be set in the after_response handler`,
          },
        },
      ],
      text: `response for condition 2`,
    },
    afterResponse: afterReponseHandler,
  },
];

module.exports = { conditions };
