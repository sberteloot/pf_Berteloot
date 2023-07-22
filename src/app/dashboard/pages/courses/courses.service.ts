import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { ICourse } from './models/course';
import { CoursesmockService } from './mock/coursesmock.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses$ = new BehaviorSubject<ICourse[]>([]);
  private courses$ = this._courses$.asObservable();

  constructor(private coursesServiceMock:CoursesmockService) { }

  loadCourses() : void{
    this.coursesServiceMock.getCoursesMock().subscribe({
      next : (arrayCoursesMock) => this._courses$.next(arrayCoursesMock)
    });
  }

  getCourses() : Observable<ICourse[]>{
    return this.courses$;
  }

}
