//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { StudentComponent } from './Components/student/student.component';
import { FormAddComponent } from './Components/form-add/form-add.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { FormEditComponent } from './Components/form-edit/form-edit.component';
import { StudentSubjectComponent } from './Components/student-subject/student-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentComponent,
    FormAddComponent,
    SubjectComponent,
    FormEditComponent,
    StudentSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
