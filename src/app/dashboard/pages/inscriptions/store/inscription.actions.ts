import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IInscription } from '../models/inscription';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: IInscription[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
  }
});
