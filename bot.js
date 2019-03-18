const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTU2OTM4MTMwOTg5Nzc2OTM2.D3C7aA.KopJ-tOMI-7wr0sHvk3v17F_Yz8);
