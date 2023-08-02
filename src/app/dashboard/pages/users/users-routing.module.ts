import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { UsersComponent } from "./users.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /dashboard/users
        path: '',
        component: UsersComponent,
        data: {title:'ABM de Usuarios'}
      },
      {
        // /dashboard/users/:id
        path: ':id',
        component: UserDetailComponent,
        data: {title:'Detalle del Usuario'}
      }          
    ])  
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule{}
