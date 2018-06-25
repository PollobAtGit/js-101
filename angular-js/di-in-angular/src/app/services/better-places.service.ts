import { Injectable } from '@angular/core';
import { Place } from '../models/place';

@Injectable()
export class BetterPlacesService {

  places: Place[];

  constructor() {
    this.places = [
      { name: "gulistan", city: "Dhaka", country: "BD", isVisited: false, rating: 5 },
      { name: "gulshan", city: "dhaka", country: "CD", isVisited: true, rating: 10 },
      { name: "banani", city: "FT", country: "TY", isVisited: true, rating: 5.9 }
    ];
  }

  get placesToVisit() {
    return this.places;
  }
}
