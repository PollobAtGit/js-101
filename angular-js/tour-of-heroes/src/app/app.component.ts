import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { EmployeeComponent } from './employee/employee.component';
import { HeroService } from "./hero.service";

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>

  <hero-detail [hero]='selectedHero'></hero-detail>

  <div class="hero">
    <ul class="heroes">
      <li *ngFor="let hero of heros" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id + 30}}</span> {{hero.name}}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./app.component.css'],

  // POI: DI tool now knows what to inject
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  title = 'My First Angular App';
  selectedHero: Hero;
  heros: Hero[];

  // POI: service is now a member of 'this'
  // POI: To get an instance of an object use constructor injection
  constructor(private service: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this
      .service
      .getHeroesSlowly()
      .then(h => this.heros = h);
  }

  // POI: Similar to 'Application_Start'. When is it actually invoked
  // POI: ngOnInit is an application hook
  ngOnInit(): void {
    this.getHeroes();
  }
}