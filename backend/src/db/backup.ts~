import {db} from './db.ts';
import {logError, logEvent} from '../lib/log.ts';

function backupDB() {
  let filename = `./backups/backup-${Date.now()}.db`
  db.backup(filename)
    .then(() => {
      logEvent('Backup complete at:', ${filename})
    })
    .catch((err) => {logError(`Backup failed: ${err}`)}
    );
}
