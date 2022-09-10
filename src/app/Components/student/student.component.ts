import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { StudentService } from 'src/app/Services/Student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: IStudent[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.GetStudents();
  }

  GetStudents(){
    this.studentService.GetStudents()
    .subscribe(students => this.students = [...students]);
  }

}
