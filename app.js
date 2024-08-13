const { App } = require("@slack/bolt");
require("dotenv").config();
const { registerListeners } = require("./listeners");

// running with export NODE_TLS_REJECT_UNAUTHORIZED=0

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  port: process.env.PORT || 3000,
});

registerListeners(app);

(async () => {
  // Start your app
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();
