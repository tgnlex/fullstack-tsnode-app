import {Controller} from '../lib/controllerBase.ts';
import {User} from '../models.ts';

class UserController extends Controller {
  public tableName = "user";
  public fieldNames = ["name", "email", "password", "age", "accountType"];
  public async insert(user: User) {
      const {...fields} = this.fieldNames;
      const {...data} = user;
      const sql = `INSERT into ${this.tableName} (${fields}) VALUES (${data})`;
      const result = await this.db.run(sql);
      console.log(result)
  }
}

const users = new UserController();
users.insert(["test", "test", "test", 20])
