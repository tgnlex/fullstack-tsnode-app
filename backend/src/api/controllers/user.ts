import {Controller} from './base.ts';
import {Table, userTable} from '../utils/tables.ts';
import {UserModel, AdminModel} from '../models/users.ts';
import {insert, insertMany} from '../lib/sql/insert.ts';

class Users extends Controller {
  public static table: Table = userTable;
  public static async addUser(user: UserModel | AdminModel) {
    try {
      insert(this.table, user)
    } catch (err) {
      console.error(err);
      throw err;
		} 
  
    console.log(`Added User ${user.id} to dev.db`)
  }
  public static async addMany(users: UserModel[] | AdminModel[]) {
    try {
      insertMany(this.table, users);
    } catch (err) {
      console.error(err);
      throw err;
		}
  console.log(`Added ${users.length} users to dev.db`)
  }
}

Users.addUser(["test", "test", "test", 20, "USER"])

