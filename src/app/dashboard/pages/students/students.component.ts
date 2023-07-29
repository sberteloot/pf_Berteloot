import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { IStudent } from './models/student';
import { Observable } from 'rxjs';
import { ConfirmdialogComponent } from 'src/app/shared/components/confirmdialog/confirmdialog.component';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  
  arrayStudents: Observable<IStudent[]>;

  constructor(private studentDialog : MatDialog, 
              private confirmDialog: MatDialog,
              private studentsService: StudentsService,
              private router: Router){
    this.studentsService.loadStudents();
    this.arrayStudents = this.studentsService.getStudents();
  } 

  openDialog(){
    this.studentDialog
      .open(StudentsDialogComponent, {panelClass: 'student__dialog__panel'})
      .afterClosed()
      .subscribe({
        next : (student) => {
          if(student){
            this.studentsService.insertStudent({
              name: student.name,
              email: student.email,
              surname: student.surname,
              birth: student.birth
            })
          }
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
              this.studentsService.updateStudent(studentToEdit.id, student)
            }
          }
      });    
  }

  onDeleteStudent(student : IStudent){
    this.showConfirmDialog(student);
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

  deleteStudent(student : IStudent){
    this.studentsService.deleteStudent(student.id);
  }

  onDetailStudent(student : IStudent){
    this.router.navigate(['dashboard/students', student.id]);
  }
}
