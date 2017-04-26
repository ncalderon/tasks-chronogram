import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {UserLogin} from "../../dto/user-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin;
  active: boolean;
  submitted = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userLogin = new UserLogin();
  }

  onSubmitted(): void {
    this.submitted = true;
    this.userService.login(this.userLogin).then( user => localStorage.setItem('currentUser', JSON.stringify(user)));
  }

  onLogin(): void {

  }

  onNewUser(): void {

  }
}
