// Pluto - src/bot/modules/commands/setstatus.ts
// Written by Quinn Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { client } from '../../pluto'
import { genEmbed } from '../utilities/EmbedGenerator'
import { readFileSync } from 'fs'
import config from '../../../configuration/config'

const types = [
  'online',
  'idle',
  'away',
  'dnd',
  'invisible',
  'offline'
]

export default class SetStatusCommand extends Command {
  constructor () {
    super('setstatus', {
      aliases: [
        'setstatus'
      ],
      ownerOnly: true,
      category: 'Meta',
      description: {
        content: 'Change the status of the bot',
        usage: 'setstatus <status>',
        examples: [
          'setstatus online',
          'setstatus idle',
          'setstatus away',
          'setstatus dnd',
          'setstatus invisible',
          'setstatus offline'
        ]
      },
      args: [
        {
          id: 'type',
          type: 'string'
        }
      ]
    })
  }

  async exec (message: Message, args): Promise<Message> {
    if (args.type === null) {
      if (config.bot.personalization.detailedErrorMessages) {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'No arguments have been specified!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true,
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setstatus <type>\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setStatusCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'No arguments have been specified!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))
      }
    }

    const type: string = args.type.toLowerCase()

    if (!types.includes(type)) {
      if (config.bot.personalization.detailedErrorMessages) {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'That is not a valid status type!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true,
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setstatus <type>\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setStatusCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'That is not a valid status type!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))
      }
    }

    switch (type) {
      case 'online':
        // @ts-expect-error
        client.user.setStatus('online')
        return await message.channel.send(genEmbed({
          title: ':white_check_mark: Success!',
          description: 'The bot is now marked as `Online`',
          color: config.bot.personalization.embed.defaultColors.success,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))

      case 'idle':
        // @ts-expect-error
        client.user.setStatus('idle')
        return await message.channel.send(genEmbed({
          title: ':white_check_mark: Success!',
          description: 'The bot is now marked as `Idle`',
          color: config.bot.personalization.embed.defaultColors.success,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))

      case 'away':
        // @ts-expect-error
        client.user.setStatus('idle')
        return await message.channel.send(genEmbed({
          title: ':white_check_mark: Success!',
          description: 'The bot is now marked as `Idle`',
          color: config.bot.personalization.embed.defaultColors.success,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))

      case 'dnd':
        // @ts-expect-error
        client.user.setStatus('dnd')
        return await message.channel.send(genEmbed({
          title: ':white_check_mark: Success!',
          description: 'The bot is now marked as `Do not Disturb`',
          color: config.bot.personalization.embed.defaultColors.success,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))

      case 'invisible':
        // @ts-expect-error
        client.user.setStatus('invisible')
        return await message.channel.send(genEmbed({
          title: ':white_check_mark: Success!',
          description: 'The bot is now marked as `Invisible`',
          color: config.bot.personalization.embed.defaultColors.success,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))

      case 'offline':
        // @ts-expect-error
        client.user.setStatus('invisible')
        return await message.channel.send(genEmbed({
          title: ':white_check_mark: Success!',
          description: 'The bot is now marked as `Invisible`',
          color: config.bot.personalization.embed.defaultColors.success,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: true
        }))

      default:
        return await message.channel.send('sex :flushed:')
    }
  }
}

// digi feet 🐾