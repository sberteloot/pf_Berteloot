import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { adminGuard } from "../core/guards/admin.guard";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /dashboard/home
        path: 'home',
        component: HomeComponent,
        data: {title:'Home'}
      },
      {
        // /dashboard/students
        path: 'students',
        loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule)
      },
      {
        // /dashboard/courses
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule)
      },
      {
        // /dashboard/users
        path: 'users',
        canActivate:[adminGuard],
        loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule)
      },
      {
        // /dashboard/inscriptions
        path: 'inscriptions',
        loadChildren: () => import('./pages/inscriptions/inscriptions.module').then((m) => m.InscriptionsModule)
      },      
      {
        path: '**',
        redirectTo: 'home'
      }
    ]),
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule{}
