import {User} from "../dto/user";
import {Router} from "@angular/router";
import {OnInit} from "@angular/core";

export interface Session {

  getUserLogged(): User;
  logout(): void;
}

export class SessionImpl implements OnInit,Session {

  router: Router;
  constructor() { }

  ngOnInit() {

  }

  setRouter(router: Router): void {
    this.router = router;
  }

  getUserLogged(): User {
    let userString = localStorage.getItem("userLogged");
    if (userString && userString.length > 0)
      return JSON.parse(userString) as User;
    else {
      if (this.router)
        this.router.navigate(["/login"]);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}

export const session: SessionImpl = new SessionImpl();
/*export const session: Session = {
  getUserLogged(): User {
    let userString = localStorage.getItem("userLogged");
    if (userString && userString.length > 0)
      return JSON.parse(userString) as User;
    else
      router.
  }
};*/
