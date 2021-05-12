module.exports = {
	name: 'kick',
	description: 'kick memebers of channel',
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		if (!message.mentions.users.size)
		{
			return message.reply('you need to tag a user in order to kick them!');
		}
		message.channel.send(`You want to kick: ${taggedUser.username}`);
	}
};