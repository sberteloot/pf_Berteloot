import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { CourseDetailComponent } from './dashboard/pages/courses/components/course-detail/course-detail.component';
import { StudentDetailComponent } from './dashboard/pages/students/components/student-detail/student-detail.component';

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
        children: [
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
        ]        
      },
      {
        // /dashboard/courses
        path: 'courses',
        children: [
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
        ]
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