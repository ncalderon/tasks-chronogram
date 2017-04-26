import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {UserLogin} from '../../dto/user-login';

@Injectable()
export class UserLoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private userLoginsUrl = 'api/userLogins';  // URL to web api
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  login(userLogin: UserLogin): Promise<UserLogin> {
    const url = `${this.userLoginsUrl}`;
    return this.http
      .post(this.userLoginsUrl, JSON.stringify(userLogin), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as UserLogin)
      .catch(this.handleError);
  }

}
