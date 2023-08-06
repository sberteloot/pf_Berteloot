import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /auth/login
        path: 'login',
        component: LoginComponent
      }      
    ]),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
