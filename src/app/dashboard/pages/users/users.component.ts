import { Component } from '@angular/core';
import { IUser } from './models/user';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  arrayUsers : Observable<IUser[]>;

  constructor(private usersService: UsersService,
              private router: Router){
    this.usersService.loadUsers();
    this.arrayUsers = this.usersService.getUsers();
  }

  onDetailUser(user : IUser){
    this.router.navigate(['dashboard/users', user.id]);
  }

}
