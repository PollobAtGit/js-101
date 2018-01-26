import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroes } from './mock-heroes';

import { Observable, } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private msgService: MessageService) { }

  public getPromisedHeroes(): Promise<Hero[]> {
    return new Promise((onfulfillment, onrejection) => {
      setTimeout(() => {
        onfulfillment(heroes);
      }, 9000);
    });
  }

  public getObservableHeroes(): Observable<Hero[]> {
    this.msgService.add("HeroService: fetched heroes");
    return of(heroes);
  }
}
