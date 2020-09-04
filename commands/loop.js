const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ['كرر'],
  description: "تكرار الاغنية ",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("`ما فيه اغنية تشتغل .!`").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`التكرار الحين : ${queue.loop ? "**مشتغل**" : "**مقفل**"}`)
      .catch(console.error);
  }
};
