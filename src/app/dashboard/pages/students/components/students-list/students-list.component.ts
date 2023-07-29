import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent {

  @Input()
  arrayStudents: IStudent[] = [];

  @Output()
  onDeleteStudent = new EventEmitter<IStudent>();

  @Output()
  onEditStudent = new EventEmitter<IStudent>();

  @Output()
  onDetailStudent = new EventEmitter<IStudent>();
  
  displayedColumns: string[] = ['id', 'namesurname', 'email', 'birth', 'actions']; 
}
