import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],

  // POI: Change bootstrapped class name toggle start up component
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
