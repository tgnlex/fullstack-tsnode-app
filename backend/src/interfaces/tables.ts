interface Table {
  name: string, 
  params: string[]
}

interface UserTable extends Table {
  name: "users";
  params: ["email", "password", "age"];
}

interface PostTable extends Table {
  name: "posts";
  params: ["title", "description"];
}
export {Table, UserTable, PostTable}
