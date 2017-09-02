import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>

  <hero-detail [hero]='selectedHero'></hero-detail>

  <div class="hero">
    <ul class="heroes">
      <li *ngFor="let hero of heros" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  selectedHero: Hero;
  heros: Hero[] = HEROS;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROS: Hero[] = [
  { id: 10, name: "Mr. Nice" },
  { id: 20, name: "Narco" },
  { id: 30, name: "Bombasto" },
  { id: 40, name: "Celeritas" },
  { id: 50, name: "Magneta" },
  { id: 60, name: "RubberMan" },
];