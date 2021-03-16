// Pluto - src/oob_modules/misc/jst.ts
// Written by Quinn Lane - https://brndnln.dev/

// Imports
import lolcatjs from 'lolcatjs'

// Variables
const lolcatDefaultConfig = {
  // To animate or not (only works if the sleep module is available)
  animate: false,
  // Duration of the animation
  duration: 12,
  // Seed of the rainbow, use the same for the same pattern
  seed: 0,
  // Animation speed
  speed: 20,
  // Spread of the rainbow
  spread: 8.0,
  // Frequency of the rainbow colors
  freq: 0.3,
  colors: true
}

// Type declarations & interfaces
interface lolcatConfig {
  animate?: boolean
  duration?: number
  seed?: number
  speed?: number
  spread?: number
  freq?: number
  colors?: boolean
}

// Function declarations
function getArrayPos (search: any, array: any[]): number {
  return array.map(el => {
    return el
  }).indexOf(search)
}

function rainbow (text: string, config?: lolcatConfig): string {
  // noinspection DuplicatedCode
  if (config !== undefined) {
    if (config.animate === undefined) {
      lolcatjs.options.animate = lolcatDefaultConfig.animate
    } else {
      lolcatjs.options.animate = config.animate
    }
    if (config.duration === undefined) {
      lolcatjs.options.duration = lolcatDefaultConfig.duration
    } else {
      lolcatjs.options.duration = config.duration
    }
    if (config.seed === undefined) {
      lolcatjs.options.seed = lolcatDefaultConfig.seed
    } else {
      lolcatjs.options.seed = config.seed
    }
    // noinspection DuplicatedCode
    if (config.speed === undefined) {
      lolcatjs.options.speed = lolcatDefaultConfig.speed
    } else {
      lolcatjs.options.speed = config.speed
    }
    if (config.spread === undefined) {
      lolcatjs.options.spread = lolcatDefaultConfig.spread
    } else {
      lolcatjs.options.spread = config.spread
    }
    if (config.freq === undefined) {
      lolcatjs.options.freq = lolcatDefaultConfig.freq
    } else {
      lolcatjs.options.freq = config.freq
    }
    if (config.colors === undefined) {
      lolcatjs.options.colors = lolcatDefaultConfig.colors
    } else {
      lolcatjs.options.colors = config.colors
    }
  }

  return lolcatjs.fromString(text)
}

function datFormat (aSeconds: number) {
  function pad (s) {
    return (s < 10 ? '0' : '') + s
  }
  const hours = Math.floor(aSeconds / (60 * 60))
  const minutes = Math.floor(aSeconds % (60 * 60) / 60)
  const seconds = Math.floor(aSeconds % 60)

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}

// Bundles
const ArrayTools = { getArrayPos }

// Export
export {
  getArrayPos,
  ArrayTools,
  rainbow,
  lolcatConfig,
  datFormat
}

// digi feet 🐾