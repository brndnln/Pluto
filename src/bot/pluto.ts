/* eslint-disable no-void */

// Pluto - bot/pluto.ts
// Written by Stereo528 - https://bit.ly/3cH3ymm

import { CustomClient } from './modules/client/Client.js'
import config from '../configuration/config.js'
import { log, loggerType } from '../oob_modules/cli/logger'

const client = new CustomClient()

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
})

export default function start (): void {
  void client.login(config.bot.token)
}
