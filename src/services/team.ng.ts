import { computed, Injectable, resource, signal } from '@angular/core';
import { Person } from '../models/person.model';

type AddTeamMemberRequest = {
  requestType: 'addTeamMember';
  merc: Person;
};

type RemoveTeamMemberRequest = {
  requestType: 'removeTeamMember';
  mercId: string;
};

type NullRequest = {
  requestType: 'null';
};

type ClearRequest = {
  requestType: 'clear';
};

type TeamRequest =
  | AddTeamMemberRequest
  | RemoveTeamMemberRequest
  | NullRequest
  | ClearRequest;

@Injectable({
  providedIn: 'root',
})
export class TeamResource {
  readonly #teamRequest = signal<TeamRequest>({ requestType: 'null' });
  #currentTeam = signal<Person[]>([]);

  readonly totalCost = computed(() => {
    const team = this.#currentTeam();

    return team.reduce((total, merc) => total + merc.hire_in_credits, 0);
  });

  readonly #team = resource({
    defaultValue: [],
    request: () => ({
      teamRequest: this.#teamRequest(),
    }),
    loader: ({ request: { teamRequest } }) => {
      if (teamRequest.requestType === 'addTeamMember') {
        this.#currentTeam.update((currentTeam) =>
          currentTeam.concat(teamRequest.merc),
        );
      } else if (teamRequest.requestType === 'removeTeamMember') {
        this.#currentTeam.update((currentTeam) =>
          currentTeam.filter((merc) => merc.id !== teamRequest.mercId),
        );
      } else if (teamRequest.requestType === 'clear') {
        this.#currentTeam.set([]);
      }

      return Promise.resolve(this.#currentTeam());
    },
  });

  get team() {
    return this.#team;
  }

  addTeamMember(merc: Person) {
    this.#teamRequest.set({ requestType: 'addTeamMember', merc });
  }

  deleteTeamMember(mercId: string) {
    this.#teamRequest.set({ requestType: 'removeTeamMember', mercId });
  }

  hireTeam() {
    this.#teamRequest.set({ requestType: 'clear' });
  }
}
