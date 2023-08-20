import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionDetailComponent } from './components/inscription-detail/inscription-detail.component';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './store/inscription.effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionFeature } from './store/inscription.reducer';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionDetailComponent,
    InscriptionDialogComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionFeature),
    EffectsModule.forFeature([InscriptionEffects])
  ]
})
export class InscriptionsModule { }
