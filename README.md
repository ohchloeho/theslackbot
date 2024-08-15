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

## 1. Starting the Bolt App

### A. Create an Application on Slack

#### Important Configurations
Please note that these configurations are only accessible if you are a Slack Workspace admin. 
1. Enable event subscriptions
2. OAuth & Permission scopes
3. App Home > Show Tabs

#### Bot Tokens
Check in the .env file what tokens are required to connect this framework to your slack app