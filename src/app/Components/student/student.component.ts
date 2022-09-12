import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { IFilter } from 'src/app/Interfaces/IFilter';
import { StudentService } from 'src/app/Services/Student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: IStudent[] = [];
  filter: IFilter = {
    firstName: '',
    lastName: ''
  }

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.GetStudentsWithFilter(this.filter.firstName, this.filter.lastName);
  }

  GetStudents(){
    this.studentService.GetStudents()
    .subscribe(students => this.students = [...students]);
  }

  GetStudentsWithFilter(firstName: string, lastName: string){
    console.log(firstName);
    console.log(lastName);
    this.filter.firstName = firstName.trim();
    this.filter.lastName = lastName.trim();
    this.studentService.GetStudentsWithFilter(this.filter)
    .subscribe(students => this.students = [...students]);
  }

  addNewStudent(student: IStudent): void{
    student.firstName = student.firstName.trim();
    student.lastName = student.lastName.trim();
    console.log(student.firstName);
    console.log(student.lastName);
    if (!student.firstName || !student.lastName){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Requerido'
      })
    }
    else{
      this.studentService.AddStudent(student)
      .subscribe();
      Swal.fire(
        'Perfecto!',
        'Estudiante Agregado',
        'success'
      );
    }
    this.GetStudentsWithFilter(this.filter.firstName, this.filter.lastName);
  }


  //this is the method for delete a student
  DeleteStudent(student: IStudent) {
    //this de code of a modal from SweetAlert
    Swal.fire({
      title: 'Estas seguro?',
      text: 'deseas borrar este estudiante y todos los registros asociados?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, borrar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.DeleteStudent(student.id)
        .subscribe(() =>this.GetStudentsWithFilter(this.filter.firstName, this.filter.lastName));
        Swal.fire('Borrado!', 'El estudiante ha sido borrado.', 'success');
      } 
    });
    
  }
  
}
