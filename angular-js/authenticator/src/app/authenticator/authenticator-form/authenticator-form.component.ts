import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticator-form',
  templateUrl: './authenticator-form.component.html',
  styleUrls: ['./authenticator-form.component.css']
})
export class AuthenticatorFormComponent implements OnInit {

  userName: string
  password: string

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // localStorage.setItem("identity", JSON.stringify({ name: this.userName, pwd: this.password }));
    sessionStorage.setItem("identity", JSON.stringify({ name: this.userName, pwd: this.password }));
  }

}
