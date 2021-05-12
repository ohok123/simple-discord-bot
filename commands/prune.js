module.exports = {
	name: 'prune',
	description: 'delete lines of messages depends on user input',
	execute(message, args) {
		const amount = parseInt(args[0])+1;

		if (isNaN(amount))
		{
			return message.reply('that\'s not a number.');
		}
		else if (amount <= 1 || amount > 100)
		{
			return message.reply('you need to input a number between 1 and 99.');
		}
		else
		{
			message.channel.bulkDelete(amount, true).catch(err =>{
				console.error(err);
				message.channel.send('There was an error trying to prune message in this channel!');
			});
		}
	}
};