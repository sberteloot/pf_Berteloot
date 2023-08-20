import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { IInscription } from '../models/inscription';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  data : IInscription[];
}

export const initialState: State = {
  data: []
};

export const reducer = createReducer(
  initialState,
  on(InscriptionActions.loadInscriptions, state => state),
  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => {
    return{      
      data: action.data
    }
  }),
  on(InscriptionActions.loadInscriptionsFailure, (state, action) => state),
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

