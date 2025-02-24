import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource, Signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, map } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  readonly #httpClient = inject(HttpClient);

  readonly #baseUrl = 'https://swapi.dev/api' as const;
  readonly #peopleUrl = `${this.#baseUrl}/people` as const;

  peopleResource(id: Signal<string>) {
    return resource({
      request: () => ({ id: id() }),
      loader: ({ request }) => firstValueFrom(this.#getPerson(request.id)),
    });
  }

  #getPerson(id: string) {
    return this.#httpClient
      .get<Person[] | Person>(`${this.#peopleUrl}/${id}`)
      .pipe(
        map((response) => {
          if (Array.isArray(response)) {
            return response[0];
          }

          return response;
        }),
        map((person) => {
          person.hire_in_credits = Math.floor(Math.random() * 1000000);
          person.id = id;

          return person;
        }),
      );
  }

  rxPeopleResource(id: Signal<string>) {
    return rxResource({
      request: () => ({ id: id() }),
      loader: ({ request }) => this.#getPerson(request.id),
    });
  }
}
