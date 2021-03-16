// Pluto - src/bot/modules/commands/setactivity.ts
// Written by Quinn Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { client } from '../../pluto'
import { genEmbed } from '../utilities/EmbedGenerator'
import { readFileSync } from 'fs'
import config from '../../../configuration/config'

const types = [
  'playing',
  'streaming',
  'watching',
  'listening',
  'competing'
]

export default class SetActivityCommand extends Command {
  constructor () {
    super('setactivity', {
    	aliases: [
    		'setactivity'
      ],
      ownerOnly: true,
      category: 'Meta',
      description: {
    		content: 'Change the activity of the bot',
        usage: 'setactivity <type> <text> [url]',
        examples: [
          'setactivity playing outside',
          'setactivity streaming "a chat on discord" https://twitch.tv/quinndoescode',
          'setactivity watching "the trees go by"',
          'setactivity listening "to metal records backwards"',
          'setactivity competing "in a cup-stacking contest"'
        ]
      },
      args: [
        {
          id: 'type',
          type: 'string'
        },
        {
          id: 'text',
          type: 'string'
        },
        {
          id: 'url',
          type: 'string'
        }
      ]
    })
  }

  async exec (message: Message, args): Promise<Message> {
    if (args.type === undefined || args.text === undefined) {
      if (config.bot.personalization.detailedErrorMessages) {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'This command requires 2 arguments!',
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
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setActivityCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'This command requires 2 arguments!',
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
    } else if (!types.includes(args.type)) {
      if (config.bot.personalization.detailedErrorMessages) {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'The type you have specified is not a valid type you can use!',
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
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setActivityCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'The type you have specified is not a valid type you can use!',
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
    } else if (args.type === 'streaming' && args.url === null) {
      if (config.bot.personalization.detailedErrorMessages) {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'You must specify a URL for the stream!',
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
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setActivityCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        return await message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'You must specify a URL for the stream!',
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
    } else {
      try {
        // @ts-expect-error
        await client.user.setActivity(args.text, { type: args.type.toUpperCase(), url: args.url })
        const embed = genEmbed({
          title: ':white_check_mark: Success!',
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
        })

        switch (args.type) {
          case 'playing':
            embed.setDescription(`Successfully set activity to \`Playing ${args.text}\`!`)
            break

          case 'streaming':
            embed.setDescription(`Successfully set activity to \`Streaming ${args.text}\`! [Click here](${args.url}) to go to the stream!`)
            break

          case 'watching':
            embed.setDescription(`Successfully set activity to \`Watching ${args.text}\`!`)
            break

          case 'listening':
            embed.setDescription(`Successfully set activity to \`Listening to ${args.text}\`!`)
            break

          case 'competing':
            embed.setDescription(`Successfully set activity to \`Competing in ${args.text}\`!`)
            break
        }

        return await message.channel.send(embed)
      } catch (e) {
      	if (config.bot.personalization.detailedErrorMessages) {
          return await message.channel.send(genEmbed({
            title: ':x: Error',
            description: 'Something went wrong while applying the activity!',
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
                name: 'Error Dump',
                value: `\`\`\`${e}\`\`\``
              }
            ]
          }))
        } else {
          return await message.channel.send(genEmbed({
            title: ':x: Error',
            description: 'Something went wrong while applying the activity!',
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
    }
  }
}

// digi feet 🐾