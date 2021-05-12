module.exports = {
	name: 'server',
	description: 'Server Info',
	execute(message, args) {
		message.channel.send(`Server name is: ${message.guild.name}`);
        message.channel.send(`Date Created: ${message.guild.createdAt}`);
        message.channel.send(`Total memebers: ${message.guild.memberCount}`);
	},
};