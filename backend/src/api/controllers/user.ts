import {Controller} from './base.ts';
import {Table, userTable} from '../util/tables.ts';
import {User} from '../models/users.ts';
import {insert, insertMany} from '../lib/sql/insert.ts';

class UserController extends Controller {
  public table: Table = userTable;
  public static async addUser(user: User) {
    insert(this.table, )
  }
  publi
  
}

users.insert(["test", "test", "test", 20])
