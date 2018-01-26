import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';


@NgModule({

  // POI: Why do we need declarations?
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent
  ],

  // TODO: Why we need imports at all?
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
