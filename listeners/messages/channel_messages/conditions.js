// Add your conditions and respond actions here for public channel responses

const conditions = [
  {
    check: (message) => message.text === "condition 1",
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
      text: `response to condition 1`,
    },
  },
];

module.exports = { conditions };
