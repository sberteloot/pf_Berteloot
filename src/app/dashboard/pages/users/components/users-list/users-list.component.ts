import { Component, Output, Input, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input()
  arrayUsers : IUser[] = [];

  @Output()
  onDeleteUser = new EventEmitter<IUser>();

  @Output()
  onDetailUser = new EventEmitter<IUser>();

  @Output()
  onEditUser = new EventEmitter<IUser>();

  displayedColumns: string[] = ['id', 'namesurname', 'email', 'actions']; 
}
