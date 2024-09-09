const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const ayarlar = require('../ayarlar.json')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Giris Yapildi! ${client.user.tag}`);
        client.user.setStatus('online')
        client.user.setActivity('Discord.Js v13', { type: 'PLAYING' });
      const commands = client.slashCommands.map(command => command.data);
   const rest = new REST({ version: '9' }).setToken(ayarlar.token);

    try {
        console.log('slash komutlar yuklendi');
        
       await rest.put(
                Routes.applicationCommands(ayarlar.client_id),
                { body: commands },
            );
} catch (error) {
  console.log(error)
  }
    },
};
