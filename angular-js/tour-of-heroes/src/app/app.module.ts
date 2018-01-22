import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({

  // POI: Why do we need declarations?
  declarations: [
    AppComponent,
    HeroesComponent
  ],

  // TODO: Why we need imports at all?
  imports: [
    BrowserModule,
    FormsModule
  ],

  // TODO: Why providers are for?
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
