const ayarlar = require('../ayarlar.json');

module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    try {
    if (!message.content.startsWith(ayarlar.prefix) || message.author.bot) return;

      const args = message.content.slice(1).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      const command = client.commands.get(commandName);
      if (!command) return;

      await command.execute(message, args);
      } catch (error) {
      console.error('Hata:', error);
      message.reply("loga bak");
    }
    }
}
