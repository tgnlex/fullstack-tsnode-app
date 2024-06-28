import {Controller} from './base.ts';
import {insert, insertMany} from '../lib/sql/insert.ts'
import {Table} from '../interfaces/table.ts';
import {PostModel} from '../models/posts.ts';
import {postTable} from '../utils/tables.ts';
import {log} from '../log.ts';

class Posts extends Controller {
  public static table: Table = postTable;
  public static async addPost(post: PostModel) {
    try {
      insert(this.table, post)
  } catch (err) {
      log.error(err);
      throw err;
  };
  log.info(`Post: ${post.id} added successfully.`);
  };
};
