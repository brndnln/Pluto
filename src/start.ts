// Pluto - src/start.ts
// Written by Quinn Lane - https://brndnln.dev/

import { log, loggerType } from './oob_modules/cli/logger'
import Pluto from './bot/pluto'

import { Command, Option } from 'commander'
import config from './configuration/config'
import { getArrayPos, rainbow } from './oob_modules/misc/jst'
import { readFileSync } from 'fs'

const args = process.argv.slice(2)
let bannerPos: number

const banners = [
  '3d-diagonal',
  'alpha',
  'ansi-shadow',
  'big',
  'blocks',
  'doh',
  'doom',
  'graffiti',
  'impossible',
  'isometric',
  'modular',
  'ogre',
  'slant',
  'slant-relief',
  'train'
]

const program = new Command()

const debug = new Option('-d, --debug', 'Shows JSON of all arguments passed as a debug measure')
  .hideHelp()
  .default(false)

const banner = new Option('--banner <banner>', 'Forces a custom banner to be used')
  .default('random')
  .choices([
    'random',
    ...banners
  ])

const showBanners = new Option('--show-banners', 'Shows all the banners that can be used and then closes the process')
  .default(false)

const rainbowArg = new Option('--rainbow, --gaytime', 'Makes the text gay (it turns the text rainbow)')
  .hideHelp()
  .default(false)

const noStart = new Option('--no-start', 'Process will be killed before bot has chance to start')
  .default(true)

program
  .version(`PlutoCore version ${config.version}`, '-v, --version', 'Shows the version of PlutoCore')
  .addOption(debug)
  .addOption(banner)
  .addOption(showBanners)
  .addOption(rainbowArg)
  .addOption(noStart)
  .parse(process.argv)

const options = program.opts()

if (options.debug) console.log(options)
if (options.showBanners) {
  console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Quinn Lane - https://brndnln.dev/ https://pluto.rip/\n')
  console.log('\n       List of all possible banners:\n')
  banners.forEach(value => {
    bannerPos = getArrayPos(value, banners) + 1
    console.log(`       [${bannerPos.toString()} of ${banners.length}] ${value}:`)
    if (options.gaytime) {
      rainbow(readFileSync(`./messages/banners/${value}.txt`, { encoding: 'utf-8' }))
    } else {
      console.log(readFileSync(`./messages/banners/${value}.txt`, { encoding: 'utf-8' }))
    }
  })
  process.exit(0)
}
if (options.banner !== 'random') {
  if (options.gaytime) {
    rainbow(`\n${readFileSync(`./messages/banners/${options.banner}.txt`, { encoding: 'utf-8' })}`)
    rainbow('\n                           THE PLUTO DISCORD BOT\n       Written by Quinn Lane - https://brndnln.dev/ https://pluto.rip/\n')
  } else {
    console.log(`\n${readFileSync(`./messages/banners/${options.banner}.txt`, { encoding: 'utf-8' })}`)
    console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Quinn Lane - https://brndnln.dev/ https://pluto.rip/\n')
  }
} else {
  if (options.gaytime) {
    rainbow(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
    rainbow('\n                           THE PLUTO DISCORD BOT\n       Written by Quinn Lane - https://brndnln.dev/ https://pluto.rip/\n')
  } else {
    console.log(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
    console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Quinn Lane - https://brndnln.dev/ https://pluto.rip/\n')
  }
}
if (!options.start) process.exit(0)
Pluto()

// digi feet 🐾