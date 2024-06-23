import {migration} from 'sqlite-migrate'
interface DBMigration {
  version: number,
  up: string | ((db: Database) => void),
  down: string | ((db: Database) => void)
}
function migrate(db: Database, migrations: DBMigration[], targetVersion?: number): void 


