import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { NamesurnamePipe } from 'src/app/shared/pipes/namesurname.pipe';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NamesurnamePipe,
    StudentsComponent,
    StudentsListComponent,
    StudentsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule
  ],
  exports : [
    StudentsComponent
  ]
})
export class StudentsModule { }
