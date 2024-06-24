import * as sqlite3 from 'sqlite3'
import {logError, logEvent} from '../lib/log.ts';
let db = new sqlite3.Database('./dev.db', (err) => {
  if (err) {
    logError(`Error while trying to Initializ DB ${err}`)
    return err;
  };
  logEvent('Connected to sqlite database.')
}

function closeDB() {
  return db.close((err) => {
    if (err) {
      logError(`Error while trying to close DB: ${err}`)
      return err;
    }
    logEvent('Closed database connection.)
  }
}
export default {db};
export {closeDB};
