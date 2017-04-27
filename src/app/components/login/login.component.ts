import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {UserLogin} from "../../dto/user-login";
import {UserStatusEnum} from "../../dto/user-status.enum";
import {Router} from "@angular/router";
import {Message} from "../alert/message/message";
import {MessageTypeEnum} from "../alert/message/message-type.enum";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin;
  active: boolean;
  submitted = false;
  error = false;
  message: Message;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userLogin = new UserLogin();
  }

  onSubmit(): void {
    this.submitted = true;
    this.userService.login(this.userLogin).then( user => {
      if (null != user && user.status === UserStatusEnum.ACTIVE){
        console.log("User logged: ", user);
        localStorage.setItem('UserLogged', JSON.stringify(user));
        this.router.navigate([""]);
      } else {
        this.message = new Message();
        this.message.text = "Invalid user: Username or password is incorrect.";
        this.message.type = MessageTypeEnum.ERROR;
        this.error = true;
      }
    });
  }


  onLogin(): void {

  }

  onNewUser(): void {

  }
}
