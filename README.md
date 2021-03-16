# 🌑 The Pluto Discord Bot
![Pluto Banner](./assets/image/plutobanner.png)

## What is the point of this project?
The point of this project is to provide a discord bot that is able to perform the duties of multiple discord bots while remaining one discord bot.

## Badges
Badges provided by [shields.io](https://shields.io/)  
![GitHub repo size](https://img.shields.io/github/repo-size/quinndoescode/Pluto?label=Project%20Size&logo=github&style=for-the-badge)
[![Discord](https://img.shields.io/discord/646120437943762944?color=7289DA&label=Server&logo=discord&style=for-the-badge)](https://invite.gg/thesolarsystem)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/quinndoescode/Pluto/trunk?color=05fc4f&label=Stable%20Version&style=for-the-badge)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/quinndoescode/Pluto/development?color=ff0000&label=Dev%20Version&style=for-the-badge)

## Building from source
Pluto uses Yarn v2 (codename berry) instead of NPM

### Pre-build instructions for both release and debug
1. Run `npm i -g yarn` to insure that yarn is installed
2. Make sure you are using Yarn v2 by running `yarn set version berry` in the project root
3. Build all dependencies by using `yarn` in the project root
4. Create a *copy* of the `src/configuration/config_example.ts` and call it `config.ts` within the same folder
5. Populate the relevent fields, mainly `bot.ownerid`, `bot.token`, and `bot.canaryToken` (canary token is optional but recommended if you are developing)

### Building Release
1. Make sure `devOptions.debugBuild` and `devOptions.canary` are both set to false
2. Run `yarn run build`
3. Run `yarn start`
4. Profit
