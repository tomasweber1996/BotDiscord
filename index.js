

const config = require("./config")
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const jointocreate = require("./jointocreate");
const jointocreatepubg = require("./jointocreatepubg");
const jointocreaterandom = require("./jointocreaterandom");
const stat = require("./stats");
const setrol = require("./setrole");
const client = new Client();
client.commands = new Collection();
client.queue = new Map();

jointocreate(client);
jointocreatepubg(client);
jointocreaterandom(client);
stat(client);
setrol(client);

client.config = {
    prefix: config.PREFIX
}




fs.readdir(__dirname + "/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        const event = require(__dirname + `/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        console.log("Loading Event: " + eventName)
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log("Loading Command: " + commandName)
    });
});



client.login(config.TOKEN)