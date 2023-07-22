import { Injectable } from '@angular/core';
import { IStudent } from '../models/student';
import { Observable, delay, of } from 'rxjs';

const STUDENTS_MOCK: Observable<IStudent[]> = of([
  {
    id: 1,
    name: 'Sergio',
    surname: 'Berteloot',
    email: 'sjberteloot@gmail.com',
    birth : new Date('1977-03-09')
  },
  {
    id: 2,
    name: 'Lucila',
    surname: 'Sanchez',
    email: 'lucila.sanchez@gmail.com',
    birth : new Date('1999-12-27')
  }  
]).pipe(delay(10));

@Injectable({
  providedIn: 'root'
})
export class StudentsmockService {

  constructor() { }

  getStudentsMock() : Observable<IStudent[]>{
    return STUDENTS_MOCK;
  }
}
