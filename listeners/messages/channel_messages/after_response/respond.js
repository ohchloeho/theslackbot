const respond = async ({ message, say }) => {
  await say({
    thread_ts: message.event_ts,
    blocks: [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "this is the after response text that appears after the delayed time",
            },
        }
    ],
    text: "after response",
  });
};

module.exports = { respond };
