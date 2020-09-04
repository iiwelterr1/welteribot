const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");

module.exports = {
  name: "queue",
  aliases: ["انتظار"],
  description: "اظهار الاغاني في قائمة الانتظار ",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("`ما فيه اغنية تشتغل .!`").catch(console.error);

    const description = queue.songs.map((song, index) => `${index + 1}. ${escapeMarkdown(song.title)}`);

    let queueEmbed = new MessageEmbed()
      .setTitle("قائمة الانتظار")
      .setDescription(description)
      .setColor("#F8AA2A");

    const splitDescription = splitMessage(description, {
      maxLength: 2048,
      char: "\n",
      prepend: "",
      append: ""
    });

    splitDescription.forEach(async (m) => {
      queueEmbed.setDescription(m);
      message.channel.send(queueEmbed);
    });
  }
};
