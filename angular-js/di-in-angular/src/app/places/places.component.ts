import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places-service.service';
import { Place } from '../models/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  componentPlaces: Place[];

  constructor(private service: PlacesService) {
    this.componentPlaces = service.places;
  }

  ngOnInit() {
  }

}
