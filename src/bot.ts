import { Client, GatewayIntentBits } from 'discord.js';
import axios from 'axios';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = 'MTE5MjM5MDk5NDY1NDY3MDkzOA.GuBqc_.u1S-vS657ldwGbO0Yx8oKam8Ish7i6VmxW6XhM'; // Replace with your bot token

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
  // Check if the message is from a bot or not a command
  if (message.author.bot || !message.content.startsWith('!api')) {
    return;
  }

  // Extract the command and arguments
  const [command, ...args] = message.content.slice('!api'.length).trim().split(' ');

  // Check if the command is valid
  if (command === 'callAPI') {
    // Make API call to your custom URL
    try {
        console.log("faclk")
    //   const response = await axios.get('YOUR_CUSTOM_API_URL');
    //   console.log(response.data); // Log the API response

    //   // Send the API response to the Discord channel
      await message.channel.send(`You big`);
    } catch (error) {
      console.error('Error making API call:', error);
      await message.channel.send('Error making API call');
    }
  } else if (command === 'joke'){
    await message.channel.send(`No`);
  } else if (command === 'message'){}
});

client.login(token);
