/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KanbanServiceService } from './kanban-service.service';

describe('Service: KanbanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanbanServiceService]
    });
  });

  it('should ...', inject([KanbanServiceService], (service: KanbanServiceService) => {
    expect(service).toBeTruthy();
  }));
});
