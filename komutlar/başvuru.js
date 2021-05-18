const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("ayarlar.json")
const yetkilirol = require(ayarlar.yetkilirol)
let aktifliklimit = db.get(`aktifliklimit_${message.guild.id}`, limit);
let davetlimit = db.get(`davetlimit_${message.guild.id}`, limit);

exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send(".başvuru `yardım` / `yap` Yapmak istediğiniz işlemi seçiniz ve komutu yine yazınız.")
    if (args[0] == "yardım") {
        const embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Başvuru Yapmak İçin İlk Önce \n .başvuru yap komutunu girdikten sonra sırasıyla ilk aktifliğinizi <0 ile 24 arasında> \n Sonra ise Günlük Ne Kadar Davet Yapabileceğimize Dair Bir Sayı Giriyorsunuz \n Kısacası Kullanım: .başvuru <aktiflik süresi> <davet sayısı>")
        message.channel.send(embed)
    }
    if (args[0] == "yap") {
        if (!args[1]) return message.channel.send("Lütfen Aktiflik Sürenizi Giriniz");

        if (!args[1] < 24 > 0) return message.channel.send("Lütfen Aktiflik Sürenizi 0 ile 24 Arasında Girin.")

        if (args[1] < 24 > 0) {
            if (!args[2]) return message.channel.send("Lütfen Günlük Yapabileceğiniz Davet Sayısını Girin")
            if (args[2]);
            let basvuran = message.author
            basvuran.roles.add(yetkilirol).catch(console.error);
        }
    }
}

exports.conf = {

}

exports.help = {

}