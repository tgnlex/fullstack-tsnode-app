import {BaseModel} from '../../interfaces/model.ts'

interface BaseUserModel extends BaseModel = {
  name: string
  email: string; 
  password: string; 
  age: number;
}
interface UserModel extends BaseUserModel = {
  accountType: "USER";
}
interface AdminModel extends BaseUserModel = {
  accountType: "ADMIN";
}

export {UserModel, AdminModel};
