//const actions = require('./actions');
//const commands = require('./commands');
//const events = require('./events');
//const views = require('./views');
const messages = require('./messages');
//const shortcuts = require('./shortcuts');

module.exports.registerListeners = (app) => {
    messages.register(app);
//   actions.register(app);
//   commands.register(app);
//   events.register(app);
//   views.register(app);
//   shortcuts.register(app);
};