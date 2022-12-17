
const discord = require('discord.js');
module.exports = {
    info: {
        name: "clear",
        description: "Limpiar canal",
        usage: "[clear]",
        aliases: ["clr"],
    },

    run: async function (client, message, args) {
        //if (message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("No tienes tanto poder")

        const cantidad = args[0]

         if (!cantidad) return message.reply("Debes escribir una cantidad de mensajes")

        if (isNaN(cantidad)) return message.reply("Debes escribir una cantidad de mensajes")

        if (cantidad > 99) {
            return message.reply("No puedes eliminar tantos mensajes a la vez")
        }
        if (cantidad < 1) {
            return message.reply("La cantidad de mensajes no puede ser menor a 1")
        }
        
            await message.delete().then(g => {
                message.channel.bulkDelete(cantidad).then(messages => message.author.send('Mensajes eliminados')).catch(error => message.author.send('No puedes eliminar mensajes con mas de 14 dias de antiguedad'))
                
            })

    },
}


