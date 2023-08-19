import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './models/course';
import { Observable, take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from 'src/app/shared/components/confirmdialog/confirmdialog.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  arrayCourses : Observable<ICourse[]>;
  userAuthIsAdmin : boolean = false;

  constructor(private coursesService:CoursesService,
              private confirmDialog:MatDialog,
              private couseDialog:MatDialog,
              private router: Router,
              private authService : AuthService){
    this.coursesService.loadCourses();
    this.arrayCourses = this.coursesService.getCourses();    

    this.authService.isAdmin().pipe(take(1)).subscribe({
      next : isAdmin => this.userAuthIsAdmin = isAdmin
    })
  }

  openDialog(){
    this.couseDialog
      .open(CoursesDialogComponent, {panelClass: 'course__dialog__panel'})
      .afterClosed()
      .subscribe({
        next : (course) => {
          if(course){
            this.coursesService.insertCourse(course);
          }
        }
      });
  }

  onEditCourse(courseEdit : ICourse){
    this.couseDialog
      .open(CoursesDialogComponent, 
        {
          panelClass: 'course__dialog__panel',
          data: courseEdit
        }
      )
      .afterClosed()
      .subscribe({
        next : (course) => {
          if(course){
            this.coursesService.updateCourse(courseEdit.id, course)
          }
        }
      });    
  }

  onDeleteCourse(course : ICourse){
    this.confirmDialog
    .open(ConfirmdialogComponent, {
      data: `¿Está seguro que desea quitar de la lista a ${ course.name }?`
    })
    .afterClosed()
    .subscribe((confirm: Boolean) => {
      if(confirm){
        this.coursesService.deleteCourse(course.id);
      }
    });
  }

  onDetailCourse(course : ICourse){
    this.router.navigate(['dashboard/courses', course.id]);
  }

}