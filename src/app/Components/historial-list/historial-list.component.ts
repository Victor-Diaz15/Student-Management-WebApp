import { Component, OnInit } from '@angular/core';
import { IStudentListRes } from 'src/app/Interfaces/IStudentListRes';
import { StudentListService } from 'src/app/Services/StudentList.service';

@Component({
  selector: 'app-historial-list',
  templateUrl: './historial-list.component.html',
  styleUrls: ['./historial-list.component.scss']
})
export class HistorialListComponent implements OnInit {

  studentLists: IStudentListRes[] = [];

  constructor(
    private studentListService: StudentListService
  ) { }

  ngOnInit(): void {
    this.GetStudentLists();
  }

  GetStudentLists(){
    this.studentListService.GetStudentLists()
    .subscribe(x => this.studentLists = [...x]);
  }

}
