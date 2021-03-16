// Pluto - src/bot/modules/utilities/EmbedGenerator.ts
// Written by Quinn Lane - https://brndnln.dev/

// Import Necessary Libraries
import { MessageEmbed } from 'discord.js'
import { Embed } from '../../../oob_modules/interfaces/Interfaces'
import botConfig from '../../../configuration/config'

// Start of module

// Generate embed
function genEmbed (config: Embed): MessageEmbed {
  // Create embed and set required title
  const embedGen = new MessageEmbed().setTitle(config.title)
  // Start optional additions
  if (config.description !== undefined) {
    embedGen.setDescription(config.description)
  }
  if (config.color !== undefined) {
    embedGen.setColor(config.color)
  } else {
  	embedGen.setColor(botConfig.bot.personalization.embed.defaultColors.normal)
  }
  if (config.author !== undefined) {
    embedGen.setAuthor(config.author.name, config.author.image, config.author.link)
  }
  if (config.footer !== undefined) {
    embedGen.setFooter(config.footer.text, config.footer.image)
  }
  if (config.thumbnail !== undefined) {
    embedGen.setThumbnail(config.thumbnail)
  }
  if (config.image !== undefined) {
    embedGen.setImage(config.image)
  }
  if (config.url !== undefined) {
    embedGen.setURL(config.url)
  }
  if (config.files !== undefined) {
    embedGen.attachFiles(config.files)
  }
  if (config.timestamp !== undefined && config.timestamp !== false) {
    if (config.timestamp === true) {
      embedGen.setTimestamp(Date.now())
    } else {
      embedGen.setTimestamp(config.timestamp)
    }
  }
  if (config.fields !== undefined) {
    embedGen.addFields(config.fields)
  }
  // Return generated embed
  return embedGen
}

// Export necessary functions
export {
  genEmbed
}

// digi feet 🐾