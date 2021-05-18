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

    if (!args[0] < 24 > 0) return message.channel.send("0 ile 24 arasında bir sayı seçiniz lütfen.")

    if (args[0] < 24 > 0) {
        db.set(`aktifliklimit_${message.guild.id}`, limit)
        message.channel.send("Başarıyla Davet Limitini Belirlediniz!")
    }
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["aktifliklimit"],
    permLevel: 0
};
exports.help = {
    name: "aktiflik-limit",
    description: "Aktiflik Limiti Belirler",
    usage: ".aktiflik-limit <0/24 Arası Sayı>"
};