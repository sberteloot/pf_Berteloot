import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, map } from 'rxjs';
import { IStudent, IStudentCU } from './students/models/student';
import { StudentsmockService } from './students/mock/studentsmock.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _students$ = new BehaviorSubject<IStudent[]>([]);

  constructor(private studentsMockService : StudentsmockService) { }

  loadStudents() : void{
    this.studentsMockService.getStudentsMock().subscribe({
      next : (arrayStudentsMock) => this._students$.next(arrayStudentsMock)
    })
  }

  getStudents() : Observable<IStudent[]>{
    return this._students$.asObservable();
  }

  insertStudent(student : IStudentCU) : void{
    this._students$.pipe(take(1)).subscribe({
      next : (arrayStudents) => {
        this._students$.next([
          ...arrayStudents,
          {...student, id : arrayStudents.length + 1}
        ])
      }
    })
  }

  updateStudent(id : number, student : IStudentCU) : void {
    this._students$.pipe(take(1)).subscribe({
      next: (arrayStudents) => {
        this._students$.next(
          arrayStudents.map((studentArray) =>
          studentArray.id === id ? { ...studentArray, ...student } : studentArray
          )
        );
      },
    });
  }

  deleteStudent(id : number) : void {
    this._students$.pipe(take(1)).subscribe({
      next: (arrayStudents) => {
        this._students$.next(
          arrayStudents.filter((studentArray) => studentArray.id !== id)
        );
      },      
    });
  }

  getStudentById(id : number) : Observable<IStudent | undefined> {
    return this._students$.pipe(
      map((arrayStudents) =>  arrayStudents.find((student) => student.id === id)))    
  }
}
