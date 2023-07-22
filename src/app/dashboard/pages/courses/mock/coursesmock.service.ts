import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ICourse } from '../models/course';

const COURSES_MOCK: Observable<ICourse[]> = of([
  {
    id: 1,
    name: 'Angular',
    description: 'Curso de Angular',
    price: 14000,
    start : new Date('2023-09-01')
  },
  {
    id: 2,
    name: 'React',
    description: 'Curso de React',
    price: 11000,
    start : new Date('2023-10-01')
  }  
]).pipe(delay(10));

@Injectable({
  providedIn: 'root'
})
export class CoursesmockService {

  constructor() { }

  getCoursesMock() : Observable<ICourse[]>{
    return COURSES_MOCK;
  }
}
