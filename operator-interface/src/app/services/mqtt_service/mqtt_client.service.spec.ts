import { TestBed } from '@angular/core/testing';

import { Mqtt_clientService } from './mqtt_client.service';

describe('Mqtt_clientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mqtt_clientService = TestBed.get(Mqtt_clientService);
    expect(service).toBeTruthy();
  });
});
