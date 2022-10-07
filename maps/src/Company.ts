import faker from 'faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName(1);
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(100, 0, 1)),
      lng: parseFloat(faker.address.longitude(100, 0, 1)),
    };
  }
}
