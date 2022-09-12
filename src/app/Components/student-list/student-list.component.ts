import { Component, OnInit } from '@angular/core';
import { IStudentList } from 'src/app/Interfaces/IStudentList';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { StudentService } from 'src/app/Services/Student.service';
import { StudentListService } from 'src/app/Services/StudentList.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList: IStudentList = {
    id: 0,
    studentId: 0,
    present: false,
    excuse: false,
    ausence: false,
    created: new Date()
  }

  students: IStudent[] = [];
  
  constructor(
    private studentListService: StudentListService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.GetStudents();
  }

  GetStudents(){
    this.studentService.GetStudents()
    .subscribe(x => this.students = [...x]);
  }

  AddNewList(studentId: number){
    this.studentList.studentId = studentId;
    if (this.studentList.studentId == 0 &&
       (this.studentList.present || this.studentList.excuse || this.studentList.ausence)){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Seleccione una opcion'
      })
    }
    else if((this.studentList.present && this.studentList.excuse)
     || (this.studentList.present && this.studentList.ausence)
     || (this.studentList.excuse && this.studentList.ausence))
    {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Seleccione una sola opcion'
      })
      this.studentList.present = false;
      this.studentList.excuse = false;
      this.studentList.ausence = false;
    }
    
    this.studentListService.AddStudentList(this.studentList)
    .subscribe();
    Swal.fire(
      'Perfecto!',
      'Registro Guardado',
      'success'
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

}
