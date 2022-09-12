import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { StudentComponent } from 'src/app/Components/student/student.component';
import { FormEditComponent } from './Components/form-edit/form-edit.component';
import { HistorialListComponent } from './Components/historial-list/historial-list.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { StudentSubjectComponent } from './Components/student-subject/student-subject.component';
import { SubjectComponent } from './Components/subject/subject.component';

const routes: Routes = [

  { path: '', redirectTo: '/student', pathMatch: 'full' },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'updateStudent/:id',
    component: FormEditComponent
  },
  {
    path: 'studentSubject',
    component: StudentSubjectComponent
  },
  {
    path: 'studentList',
    component: StudentListComponent
  },
  {
    path: 'historialList',
    component: HistorialListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
