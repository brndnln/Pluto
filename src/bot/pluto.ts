// Pluto - bot/pluto.ts
// Written by Quinn Lane - https://brndnln.dev/

import { CustomClient } from './modules/client/Client.js'
import config from '../configuration/config.js'
import { log, loggerType } from '../oob_modules/cli/logger'
import { readFileSync } from 'fs'

const client = new CustomClient()

const pjson = JSON.parse(readFileSync(`${__dirname}/../../../package.json`, { encoding: 'utf-8' }))

client.on('ready', () => {
  // @ts-expect-error
  log(loggerType.OK, `Logged in as ${client.user.tag}`)
  // @ts-expect-error
  switch (client.user.bot) {
    case true:
      log(loggerType.EXTENSION, 'This user is a bot user')
      break
    case false:
      log(loggerType.EXTENSION, 'This user is not a bot user')
      break
    default:
      log(loggerType.EXTENSION, 'Couldn\'t tell whether this user is a bot user or not')
      break
  }
  // @ts-expect-error
  client.user.setPresence(config.bot.personalization.presenceData)
})

export default function start (): void {
  if (config.devOptions.canary) {
    void client.login(config.bot.canaryToken)
  } else {
    void client.login(config.bot.token)
  }
}

export {
  client,
  pjson
}

// digi feet 🐾