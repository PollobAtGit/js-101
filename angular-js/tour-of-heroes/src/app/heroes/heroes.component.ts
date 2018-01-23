import { Component, OnInit } from '@angular/core';
import { Hero } from "./../hero";
import { heroes } from "./../mock-heroes";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = new Hero(1, "Windstorm");
  allHeroes: Hero[];

  constructor() {
    this.allHeroes = heroes;
  }

  ngOnInit() {
  }

}
