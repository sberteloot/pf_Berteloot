import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
