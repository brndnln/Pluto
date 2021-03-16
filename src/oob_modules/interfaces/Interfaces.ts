// Pluto - src/oob_modules/interfaces/Interfaces.ts
// Written by Stereo528 - https://bit.ly/3cH3ymm

import { StringResolvable, ColorResolvable } from 'discord.js'

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

interface EmbedField {
  name: StringResolvable
  value: StringResolvable
  inline?: boolean
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
  files?: string[]
  fields?: [
    EmbedField,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?,
    EmbedField?
  ]
}

export {
  Configuration,
  Embed
}
