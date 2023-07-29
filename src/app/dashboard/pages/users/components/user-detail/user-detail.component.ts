import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { IUser } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: IUser | undefined = undefined;

  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notifier: NotifierService){

    if (!Number(this.activatedRoute.snapshot.params['id'])) {
      this.router.navigate(['dashboard', 'students']);
      this.notifier.showError(`${this.activatedRoute.snapshot.params['id']} no es un ID valido`);
    } else {
      this.getUser(Number(this.activatedRoute.snapshot.params['id']));
    }
    
  }

  getUser(id : number) : void {
    this.usersService.loadUsers();
    this.usersService.getUserById(1).subscribe({
      next : (user) => this.user = user
    })    
  }
}
