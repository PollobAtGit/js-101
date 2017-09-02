import { Component, Input } from '@angular/core'
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
        <p>[{{hero.name}}] Details</p>
        <div>
            <label>Id: </label>{{hero.id}}
            <input [(ngModel)]="hero.name" placeholder="name" />
        </div>
        </div>
    `
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}