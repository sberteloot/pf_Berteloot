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
  inscriptionDetail : IInscription | null;
}

export const initialState: State = {
  data: [],
  students: [],
  courses:[],
  inscriptionDetail:null,
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
  on(InscriptionActions.loadInscriptionsFailure, (state) => state),

  on(InscriptionActions.loadStudents, state => state),
  on(InscriptionActions.loadStudentsSuccess, (state, action) => {
    return{      
      ...state,      
      students: action.data
    }
  }),
  on(InscriptionActions.loadStudentsFailure, (state) => state),  

  on(InscriptionActions.loadCourses, state => state),
  on(InscriptionActions.loadCoursesSuccess, (state, action) => {
    return{      
      ...state,
      courses: action.data
    }
  }),
  on(InscriptionActions.loadCoursesFailure, (state) => state),    

  on(InscriptionActions.loadInscriptionDetail, state => state),
  on(InscriptionActions.loadInscriptionDetailSuccess, (state, action) => {
    return{      
      ...state,
      inscriptionDetail: action.data[0]
    }
  }),
  on(InscriptionActions.loadInscriptionDetailFailure, (state) => state),      
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

