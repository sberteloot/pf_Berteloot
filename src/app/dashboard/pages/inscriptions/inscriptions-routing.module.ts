import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscriptionsComponent } from "./inscriptions.component";

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
        component: InscriptionsComponent,
        data: {title:'Detalle de la Inscripción'}
      }      
    ])  
  ],
  exports: [RouterModule],
})
export class InscriptionsRoutingModule{}
