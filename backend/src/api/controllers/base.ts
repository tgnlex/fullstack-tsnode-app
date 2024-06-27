import {Database} from 'sqlite3';
import {db} from '../../db/db.ts';
import {Table} from '../interfaces/tables.ts';
class Controller {
  protected db: Database = db;
  public table: Table;
};


export {Controller};


