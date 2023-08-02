import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { CourseDetailComponent } from "./components/course-detail/course-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /dashboard/courses
        path: '',
        component: CoursesComponent,
        data: {title:'ABM de Cursos'}
      },
      {
        // /dashboard/courses/:id
        path: ':id',
        component: CourseDetailComponent,
        data: {title:'Detalle del Curso'}
      }
    ])  
  ],
  exports: [RouterModule],
})
export class CoursesRoutingModule{}
