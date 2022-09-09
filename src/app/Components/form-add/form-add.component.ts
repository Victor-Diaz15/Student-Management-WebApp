import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/IStudent';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  
  @Output() newHero = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewHero(hero: string){
    this.newHero.emit(hero);
  }


}
