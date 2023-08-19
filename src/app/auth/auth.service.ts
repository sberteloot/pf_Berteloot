import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/dashboard/pages/users/models/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map } from "rxjs";
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlUsers = environment.baseApiUrl + "users";
  private _authUser$ = new BehaviorSubject<IUser | null>(null);

  constructor(private httpClient : HttpClient,
              private router : Router,
              private notifier : NotifierService){}

  login(email:string, password:string) : void {

    this.httpClient.get<IUser[]>(this.urlUsers, {
      params: {
        email: email,
        password: password
      }
    }).subscribe({
      next: (response) => {
        if (response.length) {
          const authUser = response[0];
          this._authUser$.next(authUser);          
          this.router.navigate(['/dashboard/home']);
          localStorage.setItem('token', authUser.token);
          localStorage.setItem('authUserDisplay', authUser.name + " " + authUser.surname);
        } else {
          this.notifier.showError('Email o contraseña invalida');
          this._authUser$.next(null);
        }
      },
      error : (error) => this.notifier.showAnyError(error)
      
    })
  }

  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<IUser[]>(this.urlUsers, {
      params: {
        token: localStorage.getItem('token') || '',
      }
    }).pipe(
      map((usersResult) => {
        return !!usersResult.length
      })
    )
  }

  getAuthObservable() : Observable<IUser | null> {
    return this._authUser$.asObservable();
  }

  getAuthUserDisplay() : string | null{
    return localStorage.getItem('authUserDisplay') || ''
  }

}
