import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { EmployeeComponent } from './employee/employee.component';
import { KudComponent } from "./kud/kud.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EmployeeComponent,
    KudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],

  // POI: Change bootstrapped class name toggle start up component
  bootstrap: [KudComponent]
})
export class AppModule { }
