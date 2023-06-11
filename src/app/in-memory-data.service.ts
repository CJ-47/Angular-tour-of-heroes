import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0o1, name: 'Dr. Nice' },
      { id: 0o2, name: 'Bombasto' },
      { id: 0o3, name: 'Celeritas' },
      { id: 0o4, name: 'Magneta' },
      { id: 0o5, name: 'RubberMan' },
      { id: 0o6, name: 'Dynama' },
      { id: 0o7, name: 'Dr. IQ' },
      { id: 0o10, name: 'Magma' },
      { id: 0o11, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}