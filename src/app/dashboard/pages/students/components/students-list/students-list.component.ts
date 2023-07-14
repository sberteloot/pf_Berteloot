import { Component } from '@angular/core';
import { IStudent } from '../../models/student';

const arrayStudents: IStudent[] = [
  {id: 1, name: 'sergio', surname: 'berteloot', email: 'sjberteloot@gmail.com', birth :new Date("1977-03-09")},
  {id: 2, name: 'jose', surname: 'gonzalez', email: 'jose.gonzalez@gmail.com', birth :new Date("2001-03-05")},
  {id: 3, name: 'ana', surname: 'lopez', email: 'ana.lopez@gmail.com', birth :new Date("2003-05-07")},
  {id: 4, name: 'maria', surname: 'sanchez', email: 'maria.sanchez@gmail.com', birth :new Date("1999-12-21")}
];

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent {
  displayedColumns: string[] = ['id', 'namesurname', 'email', 'birth'];
  dataSource = arrayStudents;
}
