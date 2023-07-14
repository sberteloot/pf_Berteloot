import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NamesurnamePipe } from 'src/app/shared/pipes/namesurname.pipe';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    NamesurnamePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    StudentsComponent
  ]
})
export class StudentsModule { }
