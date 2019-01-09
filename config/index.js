'use strict';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const configs = {
  base: {
    env,
    name: process.env.APP_NAME || 'airmason-slack-bot',
    host: process.env.APP_HOST || '0.0.0.0',
    port: process.env.PORT || 7073,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_pwd: process.env.DB_PWD,
    db_database: process.env.DB_DATABASE,
    bot: {
      api_base_url: process.env.BOT_API_BASE_URL,
      answer_api_base_url: process.env.BOT_ANSWER_BASE_URL,
      kbid: process.env.BOT_KBID,
      subscription_key: process.env.BOT_SUBSCRIPTION_KEY,
      authorization_token: process.env.BOT_AUTHORIZATION
    },
    slack: {
      chat_api_base_url: process.env.SLACK_API_BASE_URL,
      verification_token: process.env.SLACK_VERIFICATION_TOKEN,
      bot_token: process.env.SLACK_BOT_TOKEN
    },
    timezone: 'America/Los_Angeles'
  },
  production: {
    port: process.env.PORT || 7074
  },
  development: {
  },
  test: {
    port: 7075
  }
};
const config = Object.assign(configs.base, configs[env]);

module.exports = config;
