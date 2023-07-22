import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';

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
      },
      {
        // /dashboard/courses
        path: 'courses',
        component: CoursesComponent,
        data: {title:'ABM de Cursos'}
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        // /auth/login
        path: 'login',
        component: LoginComponent
      },
      {
        // /auth/register
        path: 'register',
        component: RegisterComponent
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