import { reducer as reduxFormReducer } from 'redux-form';
import { all } from 'redux-saga/effects';
import { reducer } from './vanillaasync/FormReducer.js';
import { watchFetchPeople, watchSavePeople } from './vanillaasync/FormSagas';

export const vanillaAsycnFormReducer = reducer;
export const form = reduxFormReducer;

export function* vanillaFormSagas() {
  yield all([watchFetchPeople(), watchSavePeople()]);
}
