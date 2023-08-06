import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, map } from 'rxjs';
import { IStudent, IStudentCU } from '../students/models/student';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url = environment.baseApiUrl + "students";
  private _students$ = new BehaviorSubject<IStudent[]>([]);

  constructor(private httpClient : HttpClient,
    private notifier : NotifierService) { }

  loadStudents() : void{
    this.httpClient.get<IStudent[]>(this.url).subscribe({
      next: (response) => {
        this._students$.next(response);
      },
      error: (err) => {
        this.notifier.showAnyError(err);
      }
    })
  }

  getStudents() : Observable<IStudent[]>{
    return this._students$.asObservable();
  }

  insertStudent(student : IStudentCU) : void{
    this.httpClient.post(this.url, student).subscribe({
      next : () => this.loadStudents(),
      error: () => {
        this.notifier.showError('Hubo un error agregar el estudiante');
      }
    })
  }

  updateStudent(id : number, student : IStudentCU) : void {
    this.httpClient.put(this.url + "/" + id, student).subscribe({
      next : () => this.loadStudents(),
      error: () => {
        this.notifier.showError('Hubo un error actualizar el estudiante');
      }
    })
  }

  deleteStudent(id : number) : void {
    this.httpClient.delete(this.url + "/" + id).subscribe({
      next : () => this.loadStudents(),
      error: () => {
        this.notifier.showError('Hubo un error eliminar el estudiante');
      }
    })
  }

  getStudentById(id : number) : Observable<IStudent | undefined> {
    return this._students$.pipe(
      map((arrayStudents) =>  arrayStudents.find((student) => student.id === id)))    
  }
}
