import { Injectable } from '@angular/core';
import { Place } from '../models/place';

@Injectable()
export class PlacesService {

  places: Place[];

  constructor() {
    this.places = [
      { name: "azimpur", city: "Dhaka", country: "BD", isVisited: false, rating: 5 },
      { name: "greenroad", city: "dhaka", country: "CD", isVisited: true, rating: 10 },
      { name: "dhanmondi", city: "FT", country: "TY", isVisited: true, rating: 5.9 }
    ];
  }

  toggleVisited(name: string) {
    const place = this.places.find(x => x.name == name);
    place.isVisited = !place.isVisited;
  }
}
