// Pluto - src/configuration/config.ts
// Written by Quinn Lane - https://brndnln.dev/

export default {
  // Bot version
  version: '1.3.8',
  // Bot Configuration
  bot: {
    // Prefix
    prefix: '.',
    // Owner ID
    ownerid: '',
    // Bot tokens
    token: '',
    canaryToken: '',
    // Bot Personalization
    personalization: {
      // The name of the discord bot
      botName: 'Pluto',
      // Show detailed error messages (documentation and syntax, error stacks, etc.)
      detailedErrorMessages: true,			
      // Social preview image (gets embedded on .info)
      socialPreviewImage: 'https://cdn.discordapp.com/attachments/820091333153914930/820821505948647434/plutobanner.png',
      // Embed data
      embed: {
      	// Default discord data
        name: 'Pluto',
        image: 'https://media.discordapp.net/attachments/800944984500600855/803110348852953108/download_31.jpg?width=666&height=666',
        link: 'https://github.com/brndnln/Pluto',
        // Default color profiles
        defaultColors: {
          normal: '#202122',
          error: '#ca0f0f',
          success: '#4ff748',
          invisible: '#2F3136',
          lightInvisible: '#F2F3F5'
        }
      },
      // Presence data on bot startup
      presenceData: {
        activity: {
          type: 'COMPETING',
          name: 'the olympic games | .help'
        },
        status: 'online'
      }
    }
  },
  // Development Options (do not touch unless you know what you are doing)
  devOptions: {
    debugBuild: false,
    canary: false
  }
}

// digi feet 🐾