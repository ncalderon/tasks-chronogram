import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../dto/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  active: boolean;
  submitted = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmitted(): void {
    this.submitted = true;
    this.userService.login(user);
  }

}
