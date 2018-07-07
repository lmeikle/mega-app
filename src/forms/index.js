import { reducer as reduxFormReducer } from 'redux-form';
import { all } from 'redux-saga/effects';
import { courseSignupReducer } from './coursesignup/CourseSignupReducer.js';
import { watchFetchPeople, watchSavePeople } from './coursesignup/CourseSignupSagas';

export const courseSignup = courseSignupReducer;
export const form = reduxFormReducer;

export function* courseSignupSagas() {
  yield all([watchFetchPeople(), watchSavePeople()]);
}
