const nestedAction = async ({ action, ack, say }) => {
  await ack();
  console.log(action);
  switch (action.selected_option.value) {
    case "value-0":
      say({
        text: "You already know who i am. I'm the superhero learning to do all your work!",
      });
    case "value-1":
      say({
        text: "You can never become like me. But if you're wondering how I was built, check this out:",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `You can never become like me. But if you're wondering how I was built, check this out:`,
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Bolt API Docs",
              },
              url: "https://slack.dev/bolt-js/",
              action_id: "url_redirect",
            },
          },
        ],
      });
    case "value-2":

    default: null
  }
};
module.exports = { nestedAction };
