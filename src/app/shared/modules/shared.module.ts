import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesDirective } from '../directives/titles.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsFormsControlsPipe } from '../pipes/errors-forms-controls.pipe';
import { NamesurnamePipe } from '../pipes/namesurname.pipe';
import { ConfirmdialogComponent } from '../components/confirmdialog/confirmdialog.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TitlesDirective,
    NamesurnamePipe,
    ErrorsFormsControlsPipe,
    ConfirmdialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    TitlesDirective,
    NamesurnamePipe,
    ErrorsFormsControlsPipe
  ]  
})
export class SharedModule { }
