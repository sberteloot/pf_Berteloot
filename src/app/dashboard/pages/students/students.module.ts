import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CustomDateAdapter } from 'src/app/shared/adapters/customdateadapter';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentsDialogComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule
  ],
  exports : [
    StudentsComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: CustomDateAdapter }
  ]  
})
export class StudentsModule { }
