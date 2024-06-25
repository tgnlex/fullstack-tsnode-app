interface BaseModel = {
  id: number;
//  createdAt: string;
  name: string
}

interface BaseUserModel extends BaseModel = {
  email: string; 
  password: string; 
  age: number;
}
interface User extends BaseUserModel = {
  accountType: "USER";
}
interface Admin extends BaseUserModel = {
  accountType: "ADMIN";
}

export {User, Admin, BaseModel, BaseUserModel};
