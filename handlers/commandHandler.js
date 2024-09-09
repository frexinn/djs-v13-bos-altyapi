const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

module.exports = async (client) => {
    client.commands = new Collection()

    const commandFiles = await getAllCommandFiles(path.resolve('./commands'));

    for (const file of commandFiles) {
        const command = require(file);
        client.commands.set(command.name.toLowerCase(), command);
    }
};

async function getAllCommandFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(await getAllCommandFiles(filePath));
        } else if (file.endsWith('.js')) {
            results.push(filePath);
        }
    }

    return results;
    }
