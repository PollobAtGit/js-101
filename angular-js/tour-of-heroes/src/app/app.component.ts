import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

// templateUrl: './app.component.html',

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <div class="hero">
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}
