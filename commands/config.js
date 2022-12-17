const {MessageEmbed} = require('discord.js')


module.exports = {
  info: {
    name: "config",
    description: "config",
    usage: "[config]",
    aliases: ["cfg"],
  },
  
  run: async function (client, message, args) {
    if ((message.guild.channels.cache.find(c => c.name.toLowerCase() === 'pruebamusica')))    { 
      message.channel.send('El servidor ya esta configurado')   
    }
    else{
      const newEmbed = new MessageEmbed()
        .setAuthor('Yisus_DJ')
        .setDescription('Busca aqui tu musica')
        .setColor('#d32256')
        .setImage('https://cdn.discordapp.com/attachments/1005230769859461190/1005231367115788298/yisus.jpg')
        .setTimestamp()
        .setFooter('');
      message.guild.channels.create('pruebamusica',{ 
        type: 'text'  
        }).then(channel => { 
      channel.send(newEmbed)
      })
    }
  },
};




