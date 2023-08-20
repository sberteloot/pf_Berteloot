import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { IInscription } from '../models/inscription';
import { IStudent } from '../../students/models/student';
import { ICourse } from '../../courses/models/course';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  data : IInscription[];
  students : IStudent[];
  courses : ICourse[];
}

export const initialState: State = {
  data: [],
  students: [],
  courses:[]
};

export const reducer = createReducer(
  initialState,
  on(InscriptionActions.loadInscriptions, state => state),
  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => {
    return{      
      ...state,
      data: action.data
    }
  }),
  on(InscriptionActions.loadInscriptionsFailure, (state, action) => state),

  on(InscriptionActions.loadStudents, state => state),
  on(InscriptionActions.loadStudentsSuccess, (state, action) => {
    return{      
      ...state,      
      students: action.data
    }
  }),
  on(InscriptionActions.loadStudentsFailure, (state, action) => state),  

  on(InscriptionActions.loadCourses, state => state),
  on(InscriptionActions.loadCoursesSuccess, (state, action) => {
    return{      
      ...state,
      courses: action.data
    }
  }),
  on(InscriptionActions.loadCoursesFailure, (state, action) => state),    
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

