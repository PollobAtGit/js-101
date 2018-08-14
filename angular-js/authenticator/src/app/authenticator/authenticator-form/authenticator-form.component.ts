import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { JsonPipe } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-authenticator-form',
  templateUrl: './authenticator-form.component.html',
  styleUrls: ['./authenticator-form.component.css']
})
export class AuthenticatorFormComponent implements OnInit {

  userName: string
  password: string

  allUsers: User[] = []

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // localStorage.setItem("identity", JSON.stringify({ name: this.userName, pwd: this.password }));
    // sessionStorage.setItem("identity", JSON.stringify({ name: this.userName, pwd: this.password }));

    if (this.userName && this.password) {
      this.allUsers.push(new User(this.userName, this.password, null, null, null));
    }
  }

  get diagnostic() {
    return JSON.stringify(this.allUsers);
  }
}
