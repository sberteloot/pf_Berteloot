import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { ICourse } from './models/course';
import { CoursesmockService } from './mock/coursesmock.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses$ = new BehaviorSubject<ICourse[]>([]);

  constructor(private coursesServiceMock:CoursesmockService) { }

  loadCourses() : void{
    this.coursesServiceMock.getCoursesMock().subscribe({
      next : (arrayCoursesMock) => this._courses$.next(arrayCoursesMock)
    });
  }

  getCourses() : Observable<ICourse[]>{
    return this._courses$.asObservable();
  }

  insertCourse(course : ICourse) : void {
    this._courses$.pipe(take(1)).subscribe({
      next : (arrayCourses) => this._courses$.next(
        [
          ...arrayCourses,
          {...course, id : arrayCourses.length + 1}
        ]
      )
    })
  }

  updateCourse(id : number, course : ICourse) : void {
    this._courses$.pipe(take(1)).subscribe({
      next : (arrayCourses) => {
        this._courses$.next(
          arrayCourses.map((courseArray) =>
          courseArray.id === id ? { ...courseArray, ...course } : courseArray          
        )
      )}
    })
  }
  
  deleteCourse(id : number) : void {
    this._courses$.pipe(take(1)).subscribe({
      next : (arrayCourses) => {
        this._courses$.next(
          arrayCourses.filter((courseArray) => courseArray.id !== id)
        )
      }
    })
  }

  getCuurseById(id : number) : Observable<ICourse | undefined> {
      return this._courses$.pipe(
        map((arrayCourses) =>  arrayCourses.find((course) => course.id === id)))    
  }
}
