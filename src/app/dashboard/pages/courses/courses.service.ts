import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { ICourse } from './models/course';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url = environment.baseApiUrl + "courses";
  private _courses$ = new BehaviorSubject<ICourse[]>([]);

  constructor(private httpClient : HttpClient,
    private notifier : NotifierService) { }

  loadCourses() : void{
    this.httpClient.get<ICourse[]>(this.url).subscribe({
      next: (response) => {
        this._courses$.next(response);
      },
      error: (err) => {
        this.notifier.showAnyError(err);
      }
    })
  }

  getCourses() : Observable<ICourse[]>{
    return this._courses$.asObservable();
  }

  insertCourse(course : ICourse) : void {
    this.httpClient.post(this.url, course).subscribe({
      next : () => this.loadCourses(),
      error: () => {
        this.notifier.showError('Hubo un error agregar el curso');
      }
    })
  }

  updateCourse(id : number, course : ICourse) : void {
    this.httpClient.put(this.url + "/" + id, course).subscribe({
      next : () => this.loadCourses(),
      error: () => {
        this.notifier.showError('Hubo un error actualizar el curso');
      }
    })
  }
  
  deleteCourse(id : number) : void {
    this.httpClient.delete(this.url + "/" + id).subscribe({
      next : () => this.loadCourses(),
      error: () => {
        this.notifier.showError('Hubo un error eliminar el curso');
      }
    })
  }

  getCuurseById(id : number) : Observable<ICourse | undefined> {
      return this._courses$.pipe(
        map((arrayCourses) =>  arrayCourses.find((course) => course.id === id)))    
  }
}
