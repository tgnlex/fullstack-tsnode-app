import {Database} from 'sqlite3';
import {User} from '../models.ts';
import {db} from '../../db/db.ts';

class Controller {
  public db: Database = db;
  public tableName: string = "";
  public fieldNames: string[] = [];
}  


export {Controller};


