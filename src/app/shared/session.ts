import {User} from "../dto/user";
export interface Session {
  getUserLogged(): User;
}

export const session: Session = {
  getUserLogged(): User {
    return JSON.parse(localStorage.getItem("userLogged")) as User;
  }
};
