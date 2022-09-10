import { Injectable } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private readonly baseApi = environment.api;
  private readonly controller : string = "Student";
  private readonly apiUrl : string = `${this.baseApi}/${this.controller}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '/*/', 'Content-Type': 'application/json' })
  };
  
  constructor(
    private readonly http: HttpClient
    ) { }

  //method to get the data from server
  GetStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.apiUrl, this.httpOptions);
  }

  // get a only one student
  GetStudent(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.apiUrl}/${id}`);
  }

  //method to add new student at the list
  AddStudent(student: IStudent): Observable<IStudent>{
    return this.http.post<IStudent>(this.apiUrl, student, this.httpOptions)
    .pipe(
      catchError((error) => {
        console.log(error.error.message);
        return throwError(() => new error);
      })
    );
  }
  
  //update a student
  UpdateStudent(student: IStudent): Observable<void>{
    return this.http.put<void>(this.apiUrl, student, this.httpOptions)
  }

  //delete a student
  DeleteStudent(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}


