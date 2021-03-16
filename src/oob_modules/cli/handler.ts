// Pluto - src/oob_modules/cli/handler.ts
// Written by Stereo528 - https://bit.ly/3cH3ymm

import { Command } from 'commander'
import config from '../../configuration/config'

const program = new Command()
program.version(config.cli.version)

program
