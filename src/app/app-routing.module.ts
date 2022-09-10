import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { StudentComponent } from 'src/app/Components/student/student.component';

const routes: Routes = [

  { path: '', redirectTo: '/student', pathMatch: 'full' },
  {
    path: 'student',
    component: StudentComponent
  },
  // {
  //   path: 'heroes',
  //   component: HeroesComponent
  // },
  // {
  //   path: 'detail/:id',
  //   component: HeroDetailComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
