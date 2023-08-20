import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IInscription, IInscriptionCU } from '../models/inscription';
import { HttpErrorResponse } from '@angular/common/http';
import { IStudent } from '../../students/models/student';
import { ICourse } from '../../courses/models/course';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: IInscription[] }>(),
    'Load Inscriptions Failure': props<{ error: HttpErrorResponse }>(),

    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: IStudent[] }>(),
    'Load Students Failure': props<{ error: HttpErrorResponse }>(),    

    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: ICourse[] }>(),
    'Load Courses Failure': props<{ error: HttpErrorResponse }>(),        

    'Create Inscription': props<{payload: IInscriptionCU}>(),
    'Create Inscription Success': props<{ data: IInscription }>(),
    'Create Inscription Failure': props<{ error: HttpErrorResponse }>(),            
  }
});
