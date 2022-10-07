import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName(1);
    this.location = {
      lat: parseFloat(faker.address.latitude(100, 0, 1)),
      lng: parseFloat(faker.address.longitude(100, 0, 1)),
    };
  }
}
