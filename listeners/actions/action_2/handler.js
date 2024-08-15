const action_2 = async ({ ack, say }) => {
  await ack();
  say({
    text: "Action 2",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*You've selected Super Actions*`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Pick an item from the dropdown list",
        },
        accessory: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Learn about me (text only)",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "How to become like me (text with buttons)",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "give me some feedback (modal)",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "nested_action",
        },
      },
    ],
  });
};

module.exports = { action_2 };
