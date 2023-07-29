import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersListComponent } from './components/users-list/users-list.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserDialogComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
