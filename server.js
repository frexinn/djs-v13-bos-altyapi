const { Client, Intents, Collection } = require('discord.js');
const ayarlar = require('./ayarlar.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES
    ]
  });

['commandHandler', 'eventHandler', 'slashCommandHandler'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(ayarlar.token)
