const fs = require('fs').promises;
const path = require('path');

module.exports = async (client) => {
    const eventsDir = path.join(__dirname, '..', 'events');

    try {
        const files = await fs.readdir(eventsDir);
        files.filter(file => file.endsWith('.js')).forEach(async (file) => {
            const event = require(path.join(eventsDir, file));
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        });
    } catch (error) {
        console.error('event dosyalarini okuyamadim .(', error);
    }
};
