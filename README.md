# Documentation for THESLACKBOT
Create App on Slack Workspace Settings:

```manifest.json
{
    "display_information": {
        "name": "The Bot"
    },
    "settings": {
        "org_deploy_enabled": false,
        "socket_mode_enabled": false,
        "is_hosted": false,
        "token_rotation_enabled": false
    }
}
```

This Bot framework is run on Node.js and Slack Bolt API. To run your own bot, clone this repository and run ```npm install``` to install all the necessary dependencies. 

## 1. Starting the Bolt App

### A. Create an Application on Slack

#### Important Configurations
Please note that these configurations are only accessible if you are a Slack Workspace admin.

These configuration settings are required for Slack to connect to the application:
1. Enable event subscriptions > Subscribe to Bot Events

    Select the ```message.channels``` and ```message.im``` events to be subscribed to. This ensures that the Bot is able to listen to channel messages and direct messages.

2. OAuth & Permission scopes
    
    
    The OAuth Scopes should be automatically added once the events are subscribed to. If they do not show, manually search for ```channels.history``` and ```im.history``` scopes and add them.

3. App Home > Show Tabs

    Enable the Messages tab for the direct messaging function to appear on the bot.

*** Note that any changes made to the app configurations may require the Slack app to be reinstalled to the Slack workspace before its changes apply on the live environment.

#### Bot Tokens
Check in the .env file for the tokens required to connect to your slack app. You should be able to retrieve these tokens from the Slack App configuration page.

### Run Test command
Run ```npm test``` to start the app and you should receive a success message that looks like the following:
```
⚡️ Bolt app is running!
[INFO]  socket-mode:SocketModeClient:0 Now connected to Slack
```

## 2. Customizing the App
This framework offers 1 conversational layer for public messages and 2 for direct messages.
If you wish to further customize the App conversational layers / events, you can edit the ```conditions.js``` file or the ```handler.js``` or ```respond.js``` files nested within the messages folder of the repository.

Slack messages are built on Blocks object which can be customized with live preview in Slack's Block Kit Builder 

