import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscription from './inscription.reducer';

export const selectInscriptionState = createFeatureSelector<fromInscription.State>(
  fromInscription.inscriptionFeatureKey
);

export const selectInscriptions = createSelector(selectInscriptionState, (state) => state.data)

export const selectStudents = createSelector(selectInscriptionState, (state) => state.students)

export const selectCourses = createSelector(selectInscriptionState, (state) => state.courses)

export const selectInscriptionDetailtStudent = createSelector(selectInscriptionState, (state) => state.inscriptionDetail?.student !== undefined ? state.inscriptionDetail?.student.name + ' ' + state.inscriptionDetail?.student.surname : ' ')

export const selectInscriptionDetailCourse  = createSelector(selectInscriptionState, (state) => state.inscriptionDetail?.course.name)

export const selectInscriptionDetailExists  = createSelector(selectInscriptionState, (state) => state.inscriptionDetail !== null)