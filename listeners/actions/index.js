const { action_1 } = require("./action_1/handler");
const { action_2 } = require("./action_2/handler");
const { nestedAction } = require("./action_2/nested/handler");
const { url_redirect } = require("./url_redirect/handler");

module.exports.register = (app) => {
  app.action("action_1", action_1);
  app.action("action_2", action_2);
  app.action("nested_action", nestedAction);

  app.action("url_redirect", url_redirect)
};
