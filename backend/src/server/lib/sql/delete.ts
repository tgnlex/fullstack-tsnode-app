import {db} from '../../../db/db.ts';
import {Table} from '../../interfaces/table.ts';
import {log} from '../../log.ts'; 
async function deleteItem(table: Table, id: number):Promise<Void> {
  const sql = `DELETE FROM ${table.name} WHERE id = ?`;
  const result = await this.db.run(sql, [id]);
				 if (result.changes === 0) {
				   const err = new Error(`${table.name} with ${id} not found or deletion failed.`);
				   log.error(err);
				   throw errr;
				} else {
				  log.info(`Successfully deleted ${table.name} with ID: ${id}`)
				}
}
export {deleteItem};
