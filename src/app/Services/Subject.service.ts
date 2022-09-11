import { Injectable } from '@angular/core';
import { ISubject } from 'src/app/Interfaces/ISubject';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  private readonly baseApi = environment.api;
  private readonly controller : string = "Subject";
  private readonly apiUrl : string = `${this.baseApi}/${this.controller}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private readonly http: HttpClient
    ) { }

  //method to get the data from server
  GetSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.apiUrl);
  }

  // get a only one subject
  GetSubject(id: number): Observable<ISubject> {
    return this.http.get<ISubject>(`${this.apiUrl}/${id}`);
  }

  //method to add new subject at the list
  AddSubject(subject: ISubject): Observable<ISubject>{
    return this.http.post<ISubject>(this.apiUrl, subject, this.httpOptions)
    .pipe(
      catchError((error) => {
        console.log(error.error.message);
        return throwError(() => new error);
      })
    );
  }
  
  //update a subject
  UpdateSubject(subject: ISubject): Observable<ISubject>{
    return this.http.put<ISubject>(`${this.apiUrl}/${subject.id}`, subject, this.httpOptions)
  }

  //delete a subject
  DeleteSubject(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}
