const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "resume",
    description: "Resumir reproduccion",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Puse play")
      .setColor("YELLOW")
      .setAuthor("Reproduciendo nuevamente", "https://media.discordapp.net/attachments/821270469172658196/845709703358971904/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("Nada por aqui.", message.channel);
  },
};