import { Injectable } from '@angular/core';
import { IUser, IUserCU } from './models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take, map } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { environment } from 'src/environments/environment';
import { generateToken } from 'src/app/shared/helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = environment.baseApiUrl + "users";
  private _users$ = new BehaviorSubject<IUser[]>([]);

  constructor(private httpClient : HttpClient,
              private notifier : NotifierService) { }

  loadUsers() : void{
    this.httpClient.get<IUser[]>(this.url).subscribe({
      next: (response) => {
        this._users$.next(response);
      },
      error: (err) => {
        this.notifier.showAnyError(err);
      }
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
    let token = generateToken();
    this.httpClient.post(this.url, { ...user, token }).subscribe({
      next : () => this.loadUsers(),
      error: () => {
        this.notifier.showError('Hubo un error agregar el usuario');
      }
    })
  }

  updateUser(id : number, token : string,  user : IUserCU) : void {
    this.httpClient.put(this.url + "/" + id, { ...user, token }).subscribe({
      next : () => this.loadUsers(),
      error: () => {
        this.notifier.showError('Hubo un error actualizar el usuario');
      }
    })
  }

  deleteUser(id : number) : void {
    this.httpClient.delete(this.url + "/" + id).subscribe({
      next : () => this.loadUsers(),
      error: () => {
        this.notifier.showError('Hubo un error eliminar el usuario');
      }
    })
  }

}
