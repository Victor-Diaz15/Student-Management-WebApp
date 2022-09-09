import { Injectable } from '@angular/core';
import { IStudentSubject } from 'src/app/Interfaces/IStudentSubject';
import { IStudentSubjectRes } from 'src/app/Interfaces/IStudentSubjectRes';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentSubjectService {
  private readonly baseApi = environment.api;
  private readonly controller : string = "StudentSubject";
  private readonly apiUrl : string = `${this.baseApi}/${this.controller}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private readonly http: HttpClient
    ) { }

  //method to get the data from server
  GetStudentSubjects(): Observable<IStudentSubjectRes[]> {
    return this.http.get<IStudentSubjectRes[]>(this.apiUrl);
  }

  // get a only one studentSubject
  GetStudentSubject(id: number): Observable<IStudentSubjectRes> {
    return this.http.get<IStudentSubjectRes>(`${this.apiUrl}/${id}`);
  }

  //method to add new studentSubject at the list
  AddStudentSubject(studentSubject: IStudentSubject): Observable<IStudentSubject>{
    return this.http.post<IStudentSubject>(this.apiUrl, studentSubject, this.httpOptions)
    .pipe(
      catchError((error) => {
        console.log(error.error.message);
        return throwError(() => new error);
      })
    );
  }
  
  //update a studentSubject
  UpdateStudentSubject(studentSubject: IStudentSubject): Observable<void>{
    return this.http.put<void>(this.apiUrl, studentSubject, this.httpOptions)
  }

  //delete a studentSubject
  DeleteStudentSubject(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}
