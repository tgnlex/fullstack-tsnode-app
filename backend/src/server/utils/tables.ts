import {Table} from '../interfaces/table.ts';

const userTable: Table = {
  name: "users",
  params: ["name", "email", "password", "accountType"]
}
const postTable: Table = {
  name: "posts",
  params: ["title", "content"],
}
const avatarTable: Table = {
  name: "avatar", 
  params: ["user", "url"],
}
const commentTable: Table = {
  name: "comments", 
  params: ["post", "user", "content"],
}





export {Table, userTable, postTable, avatarTable, commentTable};
