import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./students.component";
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /dashboard/students
        path: '',
        component: StudentsComponent,
        data: {title:'ABM de Estudiantes'}
      },
      {
        // /dashboard/students/:id
        path: ':id',
        component: StudentDetailComponent,
        data: {title:'Detalle del Estudiante'}
      }      
    ])  
  ],
  exports: [RouterModule],
})
export class StudentsRoutingModule{}
