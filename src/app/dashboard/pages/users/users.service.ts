import { Injectable } from '@angular/core';
import { IUser } from './models/user';
import { UsersmockService } from './mock/usersmock.service';
import { BehaviorSubject, Observable, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users$ = new BehaviorSubject<IUser[]>([]);

  constructor(private usersMockService : UsersmockService) { }

  loadUsers() : void{
    this.usersMockService.getUsersMock().subscribe({
      next : (arrayUsersMock) => this._users$.next(arrayUsersMock)
    })
  }

  getUsers() : Observable<IUser[]>{
    return this._users$.asObservable();
  }
  
  getUserById(id : number) : Observable<IUser | undefined> {
    return this._users$.pipe(
      map((arrayUsers) =>  arrayUsers.find((user) => user.id === id)))    
  }

}
