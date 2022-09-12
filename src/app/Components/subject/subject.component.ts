import { Component, OnInit } from '@angular/core';
import { ISubject } from 'src/app/Interfaces/ISubject';
import { SubjectService } from 'src/app/Services/Subject.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: ISubject[] = []
  subject: ISubject = {
    id: 0,
    name: ''
  }
  
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.GetSubjects();
  }

  GetSubjects(){
    this.subjectService.GetSubjects()
    .subscribe(subjects => this.subjects = [...subjects]);
  }

  AddNewSubject(name: string){
    if (!name){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Requerido'
      })
    }
    else{
      this.subject.name = name.trim();
      this.subjectService.AddSubject(this.subject)
      .subscribe(() => this.GetSubjects());
      Swal.fire(
        'Perfecto!',
        'Registro Guardado',
        'success'
      );
    }
    
  }

  //this is an async method for edit a subject
  async EditSubject(subject: ISubject) {
    //this de code of a modal from SweetAlert
    const { value: text } = await Swal.fire({
      title: 'Editar la materia',
      input: 'text',
      inputLabel: 'Materia',
      inputValue: subject.name,
      showCancelButton: true,
    });
    if (text) {
      subject.name = text;
      console.log(subject);
      this.subjectService.UpdateSubject(subject).subscribe();
      Swal.fire('Editado', 'Registro Editado', 'success');
    }
  }
  
  //this is the method for delete a student
  DeleteSubject(subject: ISubject) {
    //this de code of a modal from SweetAlert
    Swal.fire({
      title: 'Estas seguro?',
      text: 'deseas borrar esta materia y todos los registros asociados?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, borrar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.subjectService.DeleteSubject(subject.id)
        .subscribe(() => this.GetSubjects());
        Swal.fire('Borrado', 'Registro eliminado', 'success');
      } 
    });
  }


}

