import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IStudent, IStudentCU } from './students/models/student';
import { StudentsmockService } from './students/mock/studentsmock.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _students$ = new BehaviorSubject<IStudent[]>([]);
  private students$ = this._students$.asObservable();

  constructor(private studentsMockService : StudentsmockService) { }

  loadStudents() : void{
    this.studentsMockService.getStudentsMock().subscribe({
      next : (arrayStudentsMock) => this._students$.next(arrayStudentsMock)
    })
  }

  getStudents() : Observable<IStudent[]>{
    return this.students$;
  }

  insertStudent(student : IStudentCU) : void{
    this.students$.pipe(take(1)).subscribe({
      next : (arrayStudents) => {
        this._students$.next([
          ...arrayStudents,
          {...student, id : arrayStudents.length + 1}
        ])
      }
    })
  }

  updateStudent(id : number, student : IStudentCU) : void {
    this.students$.pipe(take(1)).subscribe({
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
    this.students$.pipe(take(1)).subscribe({
      next: (arrayStudents) => {
        this._students$.next(
          arrayStudents.filter((studentArray) => studentArray.id !== id)
        );
      },      
    });
  }
}
