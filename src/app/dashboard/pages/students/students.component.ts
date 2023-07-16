import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { IStudent } from './models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  
  arrayStudents: IStudent[] = [
    {id: 1, name: 'sergio', surname: 'berteloot', email: 'sjberteloot@gmail.com', birth :new Date("1977-03-09")},
    {id: 2, name: 'jose', surname: 'gonzalez', email: 'jose.gonzalez@gmail.com', birth :new Date("2001-03-05")},
    {id: 3, name: 'ana', surname: 'lopez', email: 'ana.lopez@gmail.com', birth :new Date("2003-05-07")},
    {id: 4, name: 'maria', surname: 'sanchez', email: 'maria.sanchez@gmail.com', birth :new Date("1999-12-21")}
  ];

  constructor(private studentDialog : MatDialog){}

  openDialog(){
    this.studentDialog
      .open(StudentsDialogComponent, {panelClass: 'student__dialog__panel'})
      .afterClosed()
      .subscribe({
        next : (student) => {
          if(student){
            this.arrayStudents = [
              ...this.arrayStudents,
              {
                id: this.arrayStudents.length + 1,
                name: student.name,
                email: student.email,
                surname: student.surname,
                birth: student.birth
              },
            ];
          }
        }
      });
  }
  
}
