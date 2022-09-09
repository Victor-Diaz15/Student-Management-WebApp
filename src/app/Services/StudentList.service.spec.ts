/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentListService } from './StudentList.service';

describe('Service: StudentList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentListService]
    });
  });

  it('should ...', inject([StudentListService], (service: StudentListService) => {
    expect(service).toBeTruthy();
  }));
});
