import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { StudentComponent } from 'src/app/Components/student/student.component';
import { FormEditComponent } from './Components/form-edit/form-edit.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
