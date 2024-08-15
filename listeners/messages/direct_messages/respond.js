// Direct Message Response Function
const respond = async ({ message, say }) => {
  if (message.subtype && message.subtype === "bot_message") {
    return;
  }

  say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Hey I'm The BOT. How can I help? Pick an option from the menu or just do whatever",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Action 1* \n Action description or a writeup if you want. But it's just Google",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Choose me",
          },
          url: "https://google.com",
          action_id: "action_1",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Action 2* \n Super hero type stuff. Got a 2nd layer and everything",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Choose me",
          },
          action_id: "action_2",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Action 3* \n Kinda bored already. Give me something else",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Choose me",
          },
          action_id: "action_3",
        },
      },
    ],
    text: `Direct message response`,
  });
};

module.exports = { respond };
