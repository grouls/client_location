import { Mappable } from './CustomMap';
import faker        from 'faker';

export class User implements Mappable {
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

  markerContent(): string {
    return `
      <div>
        <h1>Username: ${this.name}</h1>
      </div>
    `;
  }
}
