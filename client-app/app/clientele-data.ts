import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ClienteleData implements InMemoryDbService {
  createDb() {
    let clientele = [
      {id: 11, name: 'Mr. Nice', clientCode: "ABC", financial: true, clinical: false, updated_at: Date.now()},
      {id: 12, name: 'Narco', clientCode: "DBD", financial: false, clinical: true, updated_at: Date.now()},
      {id: 13, name: 'Bombasto', clientCode: "ALL", financial: true, clinical: true, updated_at: Date.now()},
      {id: 14, name: 'Celeritas', clientCode: "ABC", financial: false, clinical: false, updated_at: Date.now()},
    ];
    return {clientele};
  }
}