import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { InscriptionsService } from '../inscriptions.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { StudentsService } from '../../students/students.service';
import { CoursesService } from '../../courses/courses.service';
import { Store } from '@ngrx/store';

@Injectable()
export class InscriptionEffects {

  constructor(private actions$: Actions, 
              private inscriptionsService: InscriptionsService,
              private studentsService: StudentsService,
              private coursesService: CoursesService,
              private notifierService: NotifierService,
              private store: Store) {
    this.studentsService.loadStudents();
    this.coursesService.loadCourses();
  }

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        this.inscriptionsService.getInscriptions().pipe(
          map(data => InscriptionActions.loadInscriptionsSuccess({ data })),
          catchError(error => {
            this.notifierService.showAnyError(error);
            return of(InscriptionActions.loadInscriptionsFailure({ error }))
          }))
      )
    );
  });  

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadStudents),
      concatMap(() =>        
        this.studentsService.getStudents().pipe(
          map(data => InscriptionActions.loadStudentsSuccess({ data })),
          catchError(error => {
            this.notifierService.showAnyError(error);
            return of(InscriptionActions.loadStudentsFailure({ error }))
          }))
      )
    );
  });  

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadCourses),
      concatMap(() =>
        this.coursesService.getCourses().pipe(
          map(data => InscriptionActions.loadCoursesSuccess({ data })),
          catchError(error => {
            this.notifierService.showAnyError(error);
            return of(InscriptionActions.loadCoursesFailure({ error }))
          }))
      )
    );
  });    

  createInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionActions.createInscription),
      concatMap((action) =>
        this.inscriptionsService.addInscription(action.payload).pipe(
          map(data => InscriptionActions.createInscriptionSuccess({ data })),
          catchError(error => of(InscriptionActions.createInscriptionFailure({ error }))))
      )
    );
  });

  createInscriptionSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionActions.createInscriptionSuccess),
      map(() => this.store.dispatch(InscriptionActions.loadInscriptions()))
    );
  }, { dispatch: false });
}
