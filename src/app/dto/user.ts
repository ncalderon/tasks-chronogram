import {UserStatusEnum} from './user-status.enum';
export class User {
  id: number;
  username: string;
  password: string;
  status: UserStatusEnum;
  name: string;
  email: string;
}
