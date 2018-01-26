import { Component, OnInit } from '@angular/core';
import { Hero } from "./../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  allHeroes: Hero[];

  // POI: Ideally, constructor should not do anything except property initialization let alone
  // method invocation
  constructor(private heroService: HeroService) { }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {

    // POI: Prmosie based operation
    // this
    //   .heroService
    //   .getPromisedHeroes()
    //   .then((hs) => this.allHeroes = hs)
    //   .catch((e) => alert(e));

    // POI: Observable based operation
    this
      .heroService
      .getObservableHeroes()
      .subscribe((hs) => this.allHeroes = hs);
  }
}
