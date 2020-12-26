import { TestBed } from '@angular/core/testing';

import { KanbanHttpService } from './kanban-http.service';

describe('KanbanHttpService', () => {
  let service: KanbanHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
