import db, {closeDB} from './db.ts'
interface DBMigration {
  version: number,
  up: string | ((db: Database) => void),
  down: string | ((db: Database) => void)
}
function migrate(db: Database, migrations: DBMigration[], targetVersion?: number): void 
const sql = (query) => {
  db.serialize(() => {
    const stmt = db.prepare(`${query}`)
    stmt.finalize();
  }
  closeDB()
}
class Controller {
  constructor(private db: Database) {}
}
export {sql, Controller}
