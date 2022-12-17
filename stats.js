module.exports = function (client) {
    console.log('Modulo Stats cargado');
    client.on("ready", async () => {
        const guild = client.guilds.cache.get(''); //ID del servidor

        setInterval(function () {
            const c1 = (guild.roles.cache.get('').members.size); //ID del rol
            const c2 = guild.roles.cache.get('').members.size;
            const online = guild.members.cache.filter(m => m.presence?.status === 'online' && !m.user.bot).size; //usuarios en linea No bots
            console.log(`${online}`); //pruebas
            console.log(`${c1}`)
            console.log(`${c2}`)
           guild.channels.cache.get('').setName(` ${c1}`);// modifica el nombre si es necesario introducir ID del canal a modificar
           guild.channels.cache.get('').setName(` ${c2}`);
           guild.channels.cache.get('').setName(` ${online}`);
        }, 606000)
    })
};