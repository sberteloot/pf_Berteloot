import { Component, Input } from '@angular/core';
import { IStudent } from '../../models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent {

  @Input()
  arrayStudents: IStudent[] = [];
  
  displayedColumns: string[] = ['id', 'namesurname', 'email', 'birth'];
}
