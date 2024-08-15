const action_1 = async ({ ack, say }) => {
  await ack();
  say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "I've redirected you to Google.com. If you're unable to access please check your network or browser configurations",
        },
      },
    ],
    text: "action 1 response",
  });
};

module.exports = { action_1 };
