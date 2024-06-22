import * as sqlite3 from 'sqlite3'
import {logger} from '../logger/logger.ts';
let db = new sqlite3.Database('./dev.db', (err) => {
  if (err) {
    logger.error(`Error while trying to Initializ DB ${err.message}`)
    return console.error(err.message)
  }
  logger.event('Connected to sqlite database.)
}

function closeDB() {
  return db.close((err) => {
    if (err) {
      logger.error(`Error while trying to close DB: ${err.message}`)
      return console.error(err.message)
    }
    console.log('Closed database connection.)
  }
}
export default {db};
export {closeDB};
