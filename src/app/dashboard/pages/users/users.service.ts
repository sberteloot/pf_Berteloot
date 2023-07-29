import { Injectable } from '@angular/core';
import { IUser, IUserCU } from './models/user';
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

  insertUser(user : IUserCU) : void{
    this._users$.pipe(take(1)).subscribe({
      next : (arrayUsers) => {
        this._users$.next([
          ...arrayUsers,
          {...user, id : arrayUsers.length + 1}
        ])
      }
    })
  }

  updateUser(id : number, user : IUserCU) : void {
    this._users$.pipe(take(1)).subscribe({
      next: (arrayUsers) => {
        this._users$.next(
          arrayUsers.map((userArray) =>
          userArray.id === id ? { ...userArray, ...user } : userArray
          )
        );
      },
    });
  }

  deleteUser(id : number) : void {
    this._users$.pipe(take(1)).subscribe({
      next: (arrayUsers) => {
        this._users$.next(
          arrayUsers.filter((userArray) => userArray.id !== id)
        );
      },      
    });
  }

}
