import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { RouterModule } from '@angular/router';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesDialogComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
