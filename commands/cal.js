module.exports = {
	name: 'cal',
	description: 'simple calculator in chat',
	execute(message, args) {
		if (!args.length) 
		{
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[1] !== "+" && args[1] !== "-" && args[1] !== "*" && args[1] !== "/")//de morgans law for the win
		{
			message.reply("Wrong input form!");
		}
		else if (args[1] === "+")
		{
			return message.reply(parseInt(args[0])+parseInt(args[2]));
		}
		else if (args[1] === "-")
		{
			return message.reply(parseInt(args[0])-parseInt(args[2]));
		}
		else if (args[1] === "*")
		{
			return message.reply(parseInt(args[0])*parseInt(args[2]));
		}
		else if (args[1] === "/")
		{
			return message.reply(parseInt(args[0])/parseInt(args[2]));
		}
	},
};