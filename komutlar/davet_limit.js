const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("ayarlar.json")
const prefix = require(ayarlar.prefix)


exports.run = async (client, message, args) => {
    if (!message.author.hasPermission("ADMINISISTOR")) {
        message.channel.send(":x: Bu Komut İçin Yeterli İzniniz Bulunmamaktadır.")
    }

    let limit = args[0];
    if (!args[0]) return message.channel.send("Lütfen Davet Limitini Girin.")
    if (args[0]) {
        db.set(`davetlimit_${message.guild.id}`, limit)
        message.channel.send("Başarıyla Davet Limitini Belirlediniz!")
    }
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["davetlimit"],
    permLevel: 0
};
exports.help = {
    name: "davet-limit",
    description: "Davet Limiti Belirler",
    usage: ".davet-limit <sayı>"
};