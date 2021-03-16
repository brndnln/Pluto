// Pluto - src/oob_modules/types/Types.ts
// Written by Quinn Lane - https://brndnln.dev/

import { FileOptions, MessageAttachment } from 'discord.js'

type DiscordEmbedFile = FileOptions | string | MessageAttachment
type DiscordEmbedTime = Date | boolean | number

export {
  DiscordEmbedFile,
  DiscordEmbedTime
}

// digi feet 🐾