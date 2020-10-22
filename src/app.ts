import * as Discord from 'discord.js';

import configHelper from './helpers/config-helper';

// Entry point for the app.
const mainAsync = async () => {
  const bot = new Discord.Client();
  const config = configHelper.loadConfigFromPath('./config.json');

  bot.on('message', (message: Discord.Message): void => {
    // eslint-disable-next-line no-useless-return
    if (message.author.bot) return;

    message.reply('brrr');
  });

  bot.on('ready', () => {
    console.log('bot ready');
  });

  bot.login(config.token);
};

mainAsync();
