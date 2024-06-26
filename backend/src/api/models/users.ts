import {BaseModel} from '../../interfaces/model.ts'

interface BaseUserModel extends BaseModel = {
  name: string
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

export {User, Admin};
