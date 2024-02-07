import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' , class: 'fighter', damage: 15 },
      { id: 13, name: 'Bombasto' , class: 'fighter', damage: 1 },
      { id: 14, name: 'Celeritas' , class: 'fighter', damage: 6},
      { id: 15, name: 'Magneta' , class: 'fighter', damage: 2},
      { id: 16, name: 'RubberMan' , class: 'fighter', damage: 11},
      { id: 17, name: 'Dynama' , class: 'fighter', damage: 4},
      { id: 18, name: 'Dr. IQ' , class: 'fighter', damage: 7},
      { id: 19, name: 'Magma' , class: 'fighter', damage: 11},
      { id: 20, name: 'Tornado' , class: 'fighter', damage: 9}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}