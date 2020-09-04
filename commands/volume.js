const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["vol", "صوت"],
  description: "تغيير الصوت ",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("`ما فيه اغنية تشتغل .!`").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("`لازم تكون في الروم !`").catch(console.error);

    if (!args[0]) return message.reply(`🔊 الصوت الان : **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("`اختر رقم لتغيير الصوت`.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("`اختر رقم من 1 الى 100`").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`الصوت الان : **${args[0]}%**`).catch(console.error);
  }
};
