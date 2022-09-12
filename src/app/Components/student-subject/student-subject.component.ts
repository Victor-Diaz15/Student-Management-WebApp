import { Component, OnInit } from '@angular/core';
import { StudentSubjectService } from 'src/app/Services/StudentSubject.service';
import { IStudentSubject } from 'src/app/Interfaces/IStudentSubject';
import { IStudentSubjectRes } from 'src/app/Interfaces/IStudentSubjectRes';
import { StudentService } from 'src/app/Services/Student.service';
import { SubjectService } from 'src/app/Services/Subject.service';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { ISubject } from 'src/app/Interfaces/ISubject';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.scss']
})
export class StudentSubjectComponent implements OnInit {
  
  studentSubjects: IStudentSubjectRes[] = [];
  students: IStudent[] = [];
  subjects: ISubject[] = [];

  studentSubjectRes: IStudentSubjectRes = {
    id: 0,
    studentId: 0,
    studentName: '',
    subjectId: 0,
    subjectName: '',
    grade: 0,
    literal: ''
  }
  studentSubject: IStudentSubject = {
    id: 0,
    studentId: 0,
    subjectId: 0,
    grade: 0
  }

  student: IStudent = {
    id: 0,
    firstName: '',
    lastName: ''
  }
  
  subject: ISubject = {
    id:0,
    name: ''
  }

  grade: string = '0';
  editMode: boolean = false;

  constructor(
    private studentSubjectService: StudentSubjectService,
    private studentService: StudentService,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.GetData();
    this.GetStudents();
    this.GetSubjects();
  }

  GetData(){
    this.studentSubjectService.GetStudentSubjects()
    .subscribe(data => this.studentSubjects = [...data]);
  }
  
  GetStudents(){
    this.studentService.GetStudents()
    .subscribe(students => this.students = [...students]);
  }

  GetSubjects(){
    this.subjectService.GetSubjects()
    .subscribe(subjects => this.subjects = [...subjects]);
  }

  AddNewStudentSub(){

    let studentSubject: IStudentSubject = {
      id: 0,
      studentId: this.student.id,
      subjectId: this.subject.id,
      grade: Number(this.grade)
    }

    if (this.student.id == 0 || this.subject.id == 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required field**'
      })
    }
    else{
      this.studentSubjectService.AddStudentSubject(studentSubject)
      .subscribe();
      Swal.fire(
        'Perfect!',
        'You add a new student subject!',
        'success'
      );
    }
  }

  GetStudentSub(id: number){
    this.editMode = true;

    this.studentSubjectService.GetStudentSubject(id)
    .subscribe(x => {
      this.studentSubject.id = x.id;
      this.student.id = x.studentId;
      this.subject.id = x.subjectId;
      this.grade = String(x.grade);

      console.log(this.studentSubject.id);
      console.log(this.student.id);
      console.log(this.subject.id);
      console.log(this.grade);
    });
  }

  UpdateStudentSub(){
    this.studentSubject.studentId = this.student.id;
    this.studentSubject.subjectId = this.subject.id;
    this.studentSubject.grade = Number(this.grade);

      console.log(this.studentSubject.id);
      console.log(this.student.id);
      console.log(this.subject.id);
      console.log(this.grade);

    if (this.studentSubject.studentId == 0 || this.studentSubject.subjectId == 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required field**'
      })
    }
    else{
      this.studentSubjectService.UpdateStudentSubject(this.studentSubject)
      .subscribe();
      Swal.fire(
        'Perfect!',
        'success'
      );
    }
  }

  CancelEdit(){
    this.editMode = false;
    this.student.id = 0;
    this.subject.id = 0;
    this.grade = '0';
  }

  //this is the method for delete a student
  DeleteStudentSub(id: number) {
    //this de code of a modal from SweetAlert
    Swal.fire({
      title: 'Estas seguro?',
      text: 'deseas borrar este registros?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentSubjectService.DeleteStudentSubject(id).subscribe();
        Swal.fire('Deleted!', 'El registro se ha eliminado.', 'success');
      } 
    });
  }

}
