import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, delay, of } from 'rxjs'; 

const USERS_MOCK: Observable<IUser[]> = of([
  {
    id: 1,
    name: 'Cristian',
    surname: 'Bermudez',
    email: 'cristian.bermudez@gmail.com',
    password : '123456'
  },
  {
    id: 2,
    name: 'Eliana',
    surname: 'Palacios',
    email: 'eliana.palacios@gmail.com',
    password : '123456'
  }  
]).pipe(delay(10));

@Injectable({
  providedIn: 'root'
})
export class UsersmockService {

  constructor() { }

  getUsersMock() : Observable<IUser[]>{
    return USERS_MOCK;
  }

}
