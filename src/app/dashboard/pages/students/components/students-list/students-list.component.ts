import { Component, Input, booleanAttribute } from '@angular/core';
import { IStudent } from '../../models/student';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from 'src/app/shared/components/confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent {

  @Input()
  arrayStudents: IStudent[] = [];
  
  displayedColumns: string[] = ['id', 'namesurname', 'email', 'birth', 'actions'];

  constructor(public confirmDialog: MatDialog) {}

  showConfirmDialog(student : IStudent): void {
    this.confirmDialog
      .open(ConfirmdialogComponent, {
        data: `¿Está seguro que desea quitar de la lista a ${ student.name + " " + student.surname }?`
      })
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if(confirm){
          this.deleteStudent(student);
        }
      });
  }

  onDeleteStudent(student : IStudent){
    this.showConfirmDialog(student);
  }

  deleteStudent(student : IStudent){
    this.arrayStudents = this.arrayStudents.filter((obj) =>{
      return obj.id !== student.id;
    })
  }
}
