import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatorFormComponent } from './authenticator-form/authenticator-form.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [AuthenticatorFormComponent],
  bootstrap: [AuthenticatorFormComponent]
})
export class AuthenticatorModule { }
