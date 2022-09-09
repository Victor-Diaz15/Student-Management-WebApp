/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentSubjectService } from './StudentSubject.service';

describe('Service: StudentSubject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSubjectService]
    });
  });

  it('should ...', inject([StudentSubjectService], (service: StudentSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
