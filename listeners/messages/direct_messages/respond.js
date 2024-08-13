// Direct Message Response Function
const respond = async ({ message, say }) => {
  if (message.subtype && message.subtype === "bot_message") {
    return;
  }

  say({
    // ========================================================================================================================================================================================

    //  Slack responds with the Blocks object. This can be customized to any format you like.
    //  To preview how the blocks look within a response message, click here: https://api.slack.com/reference/messaging/blocks
    //  To use the default blocks, just leave this function empty

    //  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //
    //  To customize the button actions within the response message, please refer to the documentation here: https://slack.dev/bolt-js/concepts/message-sending
    //
    // ========================================================================================================================================================================================
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          // Change this string value to your desired response phrase
          // ---------------------------------------------------------------------------------------
          text: "Hey I'm The BOT. How can I help? Pick an option from the menu or just do whatever",
          // ---------------------------------------------------------------------------------------
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          // Change this string value for your desired action name and description
          // ---------------------------------------------------------------------------------------
          text: "*Action 1* \n Action description or a writeup if you want. But it's just Google",
          // ---------------------------------------------------------------------------------------
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Choose me",
          },
          url: "google.com",
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
