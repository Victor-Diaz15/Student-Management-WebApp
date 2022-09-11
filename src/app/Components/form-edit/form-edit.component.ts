import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/Services/Student.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  student: IStudent = {
    id: 0,
    firstName: '',
    lastName: ''
  }
  
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.GetStudent();
  }

  GetStudent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.studentService
      .GetStudent(id)
      .subscribe((student) => (this.student = student));
  }

  UpdateStudent(): void {
    if (this.student) {
      this.studentService.UpdateStudent(this.student)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
