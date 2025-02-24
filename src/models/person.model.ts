export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  hire_in_credits: number;
  id: string;
};

export const emptyPerson = (): Person => ({
  name: 'Unknown Merc',
  height: 'about tree fiddy',
  mass: 'about tree fiddy',
  hair_color: 'hot pink',
  skin_color: 'topaz',
  eye_color: 'celestial green',
  birth_year: '0BBY',
  gender: 'fluid',
  homeworld: 'Unknown',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
  url: '',
  hire_in_credits: 0,
  id: '',
});
