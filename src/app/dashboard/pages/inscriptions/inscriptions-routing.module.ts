import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscriptionsComponent } from "./inscriptions.component";
import { InscriptionDetailComponent } from "./components/inscription-detail/inscription-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /dashboard/inscriptions
        path: '',
        component: InscriptionsComponent,
        data: {title:'Inscripciones'}
      },
      {
        // /dashboard/inscriptions/:id
        path: ':id',
        component: InscriptionDetailComponent,
        data: {title:'Inscripción'}
      }      
    ])  
  ],
  exports: [RouterModule],
})
export class InscriptionsRoutingModule{}
