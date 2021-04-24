const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {

    let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!args[0]) return message.reply("lütfen bir kullanıcı etiketleyin!")
    if (kullanıcı.id === message.author.id) return message.reply("kendini mi öpeceksin?")
    if (kullanıcı.id === client.user.id) return message.reply("bana mı yürüyorsun la?")

    if (!message.guild) {
    const nodm = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(nodm); }
    if (message.channel.type !== 'dm') {
      const öp = new Discord.MessageEmbed()
    .setAuthor(`${kullanıcı.user.tag} Ö P Ü L D Ü N!`)
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.tenor.com/images/d7b6bc7af86af076ce0f7164317d2879/tenor.gif`)
    return message.channel.send(öp);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp'
};
