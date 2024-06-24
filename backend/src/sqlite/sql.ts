import db, {closeDB} from './db.ts'

const sql = (query) => {
  db.serialize(() => {
    const stmt = db.prepare(`${query}`)
    stmt.finalize();
		if (err) {
		  logError(`Error during db query ${err}`)
		}
  };
  closeDB()
};

class Controller {
  constructor(private db: Database) {}
}

export {sql, Controller}
