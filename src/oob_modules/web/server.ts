// Pluto - src/oob_modules/web/server.ts
// Written by Stereo528 - https://bit.ly/3cH3ymm

import express from 'express'
import { log, loggerType } from '../cli/logger'
import ip from 'ip'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

export default function startServer (port: number): void {
  app.listen(port, () => {
    log(loggerType.OK, `Webserver started at http://localhost:${port}/`)
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log(loggerType.EXTENSION, `Local IP: http://${ip.address()}:${port}/`)
  })
}
