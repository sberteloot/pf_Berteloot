import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { InscriptionsService } from '../inscriptions.service';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Injectable()
export class InscriptionEffects {

  constructor(private actions$: Actions, 
              private inscriptionsService: InscriptionsService,
              private notifierService: NotifierService) {}

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
}
