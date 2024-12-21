import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = 'Abemelek Daniel';
    this.location = {
      lat: 9.005401,
      lng:38.763611,
    };
  }
}
