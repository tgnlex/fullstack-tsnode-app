import {Controller} from './base.ts';
import {Table} from '../interfaces/table.ts'
import {userTable} from '../utils/tables.ts';

import {UserModel, AdminModel} from '../models/users.ts';
import {insert, insertMany} from '../lib/sql/insert.ts';
import {log} from '../log.ts';
class Users extends Controller {
  public static table: Table = userTable;
  public static async addUser(user: UserModel | AdminModel) {
    try {
      insert(this.table, user)
    } catch (err) {
      log.error(err);
      throw err;
		} 
  
    log.info(`Added User ${user.id} to dev.db`)
  }
  public static async addMany(users: UserModel[] | AdminModel[]) {
    try {
      insertMany(this.table, users);
    } catch (err) {
      log.error(err);
      throw err;
		}
  log.info(`Added ${users.length} users to dev.db`)
  }
}


