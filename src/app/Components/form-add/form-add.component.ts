import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  
  @Output() newStudent = new EventEmitter<IStudent>();
  _newStudent: IStudent = {
    id: 0,
    firstName: '',
    lastName: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  addNewStudent(firstName: string, lastName: string)
  {
    console.log(firstName);
    console.log(lastName);
    this._newStudent.firstName = firstName;
    this._newStudent.lastName = lastName;
    this.newStudent.emit(this._newStudent);
  }
}
