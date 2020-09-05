const discord = require(`discord.js`)

module.exports = {
    name: 'avatar',
    description: 'Get Avatar',
    aliases: ['av', 'صورة'],
    cooldown: 3,
   async execute(message, args, client)  {
 
const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member
const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
const avatarEmbed = new discord.MessageEmbed()
.setImage(URL)
.setURL(URL)
.setTitle(' Link !')
message.channel.send(avatarEmbed)
console.log('-----------------------------------------------------------')
console.log('Orderd By :', message.author.tag)
console.log('Type :', message.content)
console.log('avatar Link :', member.user.avatarURL())



   }
}
