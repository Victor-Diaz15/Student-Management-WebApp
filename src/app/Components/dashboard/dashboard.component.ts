import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: IStudent[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.GetStudents();
  }

  GetStudents(): void{
    this.studentService.GetStudents()
    .subscribe(student => this.students = [...student]);
  }

}
