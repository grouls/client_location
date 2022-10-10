import { Mappable } from './CustomMap';
import faker        from 'faker';

export class Company implements Mappable {
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

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h1>Catchpharse: ${this.catchPhrase}</h1>
      </div>
    `;
  }
}
