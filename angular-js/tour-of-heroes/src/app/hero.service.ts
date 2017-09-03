import { Injectable } from "@angular/core";
import { HEROS } from "./mock-heroes";
import { Hero } from "./hero";

@Injectable()

export class HeroService {
    getHeroesSlowly(): Promise<Hero[]> {

        // return Promise.resolve(HEROS);
        return new Promise(r =>
            setTimeout(() => r(HEROS), 3000));
    }
}