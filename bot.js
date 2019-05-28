const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : MATRIX');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'No One DM Me',
     details: `BOT Dev And Host`,
     url: 'https://www.twitch.tv/robenhoodsy97',
     state: `Surprise Mother Fuckers`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'BOT Dev And Host',
        large_image: `377480353259978752`,
        large_text: `Surprise Mother Fuckers` }

  }
    });
});


client.login(process.env.BOT_TOKEN);
