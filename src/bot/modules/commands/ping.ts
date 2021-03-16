// Pluto - src/bot/modules/commands/ping.ts
// Written by Quinn Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
// import { genEmbed } from '../utilities/EmbedGenerator'
import { client } from '../../pluto'

class PingCommand extends Command {
  constructor () {
    super('ping', {
      aliases: ['ping']
    })
  }

  async exec (message): Promise<any> {
    const sent = await message.reply('Pong!')
    const timeDiff = (sent.editedAt || sent.createdAt) - (message.editedAt || message.createdAt)
    return message.reply([
      'Pong!',
			`🔂 **RTT**: ${timeDiff} ms`,
			`💟 **Heartbeat**: ${Math.round(client.ws.ping)} ms`
    ])
  }
}

export default PingCommand

// digi feet 🐾