const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Deneme Komutu'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
