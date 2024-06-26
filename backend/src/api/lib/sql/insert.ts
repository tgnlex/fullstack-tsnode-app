import {run} from './run.ts';
import {db} from '../../../db/db.ts';
import {Table} from '../../../interfaces/tables.ts';

const insert = async (table: Table, values: any[]) => {
  const stmt = `INSERT INTO ${table.name} \( ${table.params} \) VALUES \( ${values} \) `;
  const ready = await db.prepare(stmt).run();
};


const insertMany = async(table: Table, items: any[]) => {
    for (const item of items) insert(table, item);
};



export {insert, insertMany}
