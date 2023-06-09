import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorlogger } from './shared/logger'
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connect')
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('connect failed')
  }
}
main()
