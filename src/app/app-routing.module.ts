import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        // /dashboard/home
        path: 'home',
        component: HomeComponent,
        data: {title:'Home'}
      },
      {
        // /dashboard/students
        path: 'students',
        component: StudentsComponent,
        data: {title:'ABM de Estudiantes'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }