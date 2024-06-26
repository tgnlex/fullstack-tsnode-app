function run(sql: string, params: []) {
  return db.prepare(sql).run(params);
}
