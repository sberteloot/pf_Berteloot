import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionDetailComponent } from './components/inscription-detail/inscription-detail.component';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';

@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionDetailComponent,
    InscriptionDialogComponent,
    InscriptionListComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule
  ]
})
export class InscriptionsModule { }
