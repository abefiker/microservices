import { faker } from '@faker-js/faker';
export class Company {
  name: string;
  // catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = 'Jegol Harar Ethiopia, Hospital';
    // this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: 9.3095,
      lng: 42.1363,
    };
  }
}
