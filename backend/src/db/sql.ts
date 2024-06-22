import db, {closeDB} from './db.ts'

const sql = (query) => {
  db.serialize(() => {
    const stmt = db.prepare(`${query}`)
    stmt.finalize();
  }
  closeDB()
}
export {sql}
