import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { IStudent } from './models/student';
import { ConfirmdialogComponent } from 'src/app/shared/components/confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  
  arrayStudents: IStudent[] = [];

  constructor(private studentDialog : MatDialog, 
              private confirmDialog: MatDialog){}

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

  onEditStudent(studentToEdit : IStudent){
    this.studentDialog
      .open(StudentsDialogComponent, 
        {
          panelClass: 'student__dialog__panel',
          data: studentToEdit
        })
      .afterClosed()
      .subscribe({
          next: (student) => {

            if (student) {
              this.arrayStudents = this.arrayStudents.map((obj) => {
                return obj.id === studentToEdit.id
                  ? { ...obj, ...student } 
                  : obj; 
              });
            }
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
