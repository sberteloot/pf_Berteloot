import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesDirective } from '../directives/titles.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    TitlesDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    TitlesDirective
  ]  
})
export class SharedModule { }
