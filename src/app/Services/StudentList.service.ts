import { Injectable } from '@angular/core';
import { IStudentList } from 'src/app/Interfaces/IStudentList';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IStudentListRes } from '../Interfaces/IStudentListRes';

@Injectable({
  providedIn: 'root'
})

export class StudentListService {
  private readonly baseApi = environment.api;
  private readonly controller : string = "StudentList";
  private readonly apiUrl : string = `${this.baseApi}/${this.controller}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private readonly http: HttpClient
    ) { }

  //method to get the data from server
  GetStudentLists(): Observable<IStudentListRes[]> {
    return this.http.get<IStudentListRes[]>(this.apiUrl);
  }

  // get a only one studentList
  GetStudentList(id: number): Observable<IStudentListRes> {
    return this.http.get<IStudentListRes>(`${this.apiUrl}/${id}`);
  }

  //method to add new studentList at the list
  AddStudentList(studentList: IStudentList): Observable<IStudentList>{
    return this.http.post<IStudentList>(this.apiUrl, studentList, this.httpOptions)
  }
  
  //update a studentList
  UpdateStudentList(studentList: IStudentList): Observable<void>{
    return this.http.put<void>(this.apiUrl, studentList, this.httpOptions)
  }

  //delete a studentList
  DeleteStudentList(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}
