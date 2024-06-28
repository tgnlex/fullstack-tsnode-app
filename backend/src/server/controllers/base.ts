import {Database} from 'sqlite3';
import {db} from '../../db/db.ts';
import {Table} from '../interfaces/table.ts';

class Controller {
  protected db: Database = db;
  public table: Table;
  constructor(table: Table) {
  this.table = table;
  }
};


export {Controller};


