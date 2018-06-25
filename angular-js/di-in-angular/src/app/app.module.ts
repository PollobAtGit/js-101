import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlacesService } from './services/places-service.service';
import { PlacesComponent } from './places/places.component';
import { BetterPlacesService } from './services/better-places.service';


@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule
  ],

  // Changing implementation
  // Note: because Place Service in this case is registered later an instance of PlacesService will
  // be served when PlacesService will be rquested rather than BetterPlacesService


  // providers: [BetterPlacesService],
  // providers: [{provide: PlacesService, useClass: BetterPlacesService}]
  // providers: [PlacesService]
  providers: [PlacesService, { provide: PlacesService, useClass: BetterPlacesService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
