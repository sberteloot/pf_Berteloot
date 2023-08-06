import { Component } from '@angular/core';
import { IUser } from './models/user';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from 'src/app/shared/components/confirmdialog/confirmdialog.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  arrayUsers : Observable<IUser[]>;

  constructor(private usersService: UsersService,
              private router: Router,
              private confirmDialog: MatDialog,
              private userDialog: MatDialog){
    this.usersService.loadUsers();
    this.arrayUsers = this.usersService.getUsers();
  }

  onDetailUser(user : IUser){
    this.router.navigate(['dashboard/users', user.id]);
  }

  onDeleteUser(user : IUser){
    this.showConfirmDialog(user);
  }

  showConfirmDialog(user : IUser): void {
    this.confirmDialog
      .open(ConfirmdialogComponent, {
        data: `¿Está seguro que desea quitar de la lista a ${ user.name + " " + user.surname }?`
      })
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if(confirm){
          this.deleteUser(user);
        }
      });
  }

  deleteUser(user : IUser){
    this.usersService.deleteUser(user.id);
  }

  openDialog(){
    this.userDialog
      .open(UserDialogComponent, {panelClass: 'user__dialog__panel'})
      .afterClosed()
      .subscribe({
        next : (user) => {
          if(user){
            this.usersService.insertUser({
              name: user.name,
              email: user.email,
              surname: user.surname,
              password: user.password
            })
          }
        }
      });
  }

  onEditUser(userToEdit : IUser){
    this.userDialog
      .open(UserDialogComponent, 
        {
          panelClass: 'user__dialog__panel',
          data: userToEdit
        })
      .afterClosed()
      .subscribe({
          next: (user) => {
            if (user) {
              this.usersService.updateUser(userToEdit.id, userToEdit.token, user)
            }
          }
      });    
  }

}
