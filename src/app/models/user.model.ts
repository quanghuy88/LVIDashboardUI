//import {Role} from "./role.enum";

export class User {
  id: number | undefined;
  userName: string = "";
  password: string = "";
  fullName: string = "";
  email: string = "";
  branchId: string = "";
  branchName: string = "";
  token: string = "";
  //role: Role | undefined;
  role: string = "";
  isactive: boolean | undefined;
}