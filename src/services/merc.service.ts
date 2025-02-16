import { Injectable } from '@angular/core';

const MAX_PEOPLE = 83;

@Injectable({
  providedIn: 'root',
})
export class MercService {
  #personOrder = Array.from({ length: MAX_PEOPLE }, (_, i) => i + 1)
    .filter((val) => val !== 17)
    .toSorted(() => Math.random() - 0.5);

  *getMercs() {
    for (const id of this.#personOrder) {
      yield id;
    }
  }
}
