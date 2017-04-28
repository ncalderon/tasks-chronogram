import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {session} from "./shared/session";
import {User} from "./dto/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasks Chronogram';
  userLogged: User;
  constructor(private router: Router) { }

  ngOnInit() {
    session.setRouter(this.router);
    this.userLogged = session.getUserLogged();
  }

  logout(): void {
    this.userLogged = null;
    session.logout();
  }

}
