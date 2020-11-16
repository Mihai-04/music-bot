const { Command } = require('discord.js-akago');

class ResumeCommand extends Command {
    constructor() {
        super('resume', {
            description: 'Resumes the current playing song.',
            category: 'Music',
            aliases: ['rs'],
            guildOnly: true,
        });
    }

    async execute(message) {
        const { guild, channel } = message;
        const serverQueue = this.client.queue.get(guild.id);
        if (!serverQueue) return channel.send('There is currently no queue in this guild.');
        if (serverQueue.playing) return channel.send('The music is already playing.');
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        channel.send('▶️ Now resumed the music.');
    }
}

module.exports = ResumeCommand;