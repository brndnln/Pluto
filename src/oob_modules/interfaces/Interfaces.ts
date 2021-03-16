// Pluto - src/oob_modules/interfaces/Interfaces.ts
// Written by Quinn Lane - https://brndnln.dev/

import { StringResolvable, ColorResolvable, EmbedFieldData } from 'discord.js'
import { DiscordEmbedFile, DiscordEmbedTime } from '../types/Types'

interface Configuration {
  bot: {
    prefix: string
    ownerid: number | number[]
    token: string
    personalization: {
      botName: string
      embed: {
        name: string
        image: string
        link: string
      }
    }
  }
  adminSite: {
    port: number
    username: string
    password: string
  }
}

interface Embed {
  title: StringResolvable
  description?: StringResolvable
  color?: ColorResolvable
  author?: {
    name: StringResolvable
    link?: string
    image?: string
  }
  footer?: {
    text: StringResolvable
    image?: string
  }
  thumbnail?: string
  image?: string
  url?: string
  files?: DiscordEmbedFile[]
  timestamp?: DiscordEmbedTime
  fields?: EmbedFieldData[]
}

interface CliCommand {
  command: string
  description: string
  aliases: string[]
}

export {
  Configuration,
  Embed,
  CliCommand
}

// digi feet 🐾