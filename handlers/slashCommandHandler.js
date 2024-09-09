const { readdirSync } = require('fs');
const { Collection } = require('discord.js');
const path = require('path');

module.exports = (client) => {
    client.slashCommands = new Collection();

    const slashCommandFolders = readdirSync('./slashCommands');

    for (const folder of slashCommandFolders) {
        const commandFiles = readdirSync(`./slashCommands/${folder}`).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../slashCommands/${folder}/${file}`);
            if (command.data && command.execute) {
                client.slashCommands.set(command.data.name, command);
            } else {
                console.warn(`yav data veya execute kullanmadinmi olm`);
            }
        }
    }
};
