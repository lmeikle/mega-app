import { call, put, select, takeLatest } from 'redux-saga/effects';
import { apiClient } from './APIClient';
import { FETCH_PEOPLE, SAVE_PEOPLE, fetchPeopleRequest, fetchPeopleSuccess, savePeopleRequest, savePeopleSuccess, savePeopleFailure } from './FormActions';

function* fetchPeopleAsync() {
  try {
    yield put(fetchPeopleRequest());
    const response = yield call(apiClient.loadPeople);
    yield put(fetchPeopleSuccess(response));
  } catch (e) {}
}

export function* watchFetchPeople() {
  yield takeLatest(FETCH_PEOPLE, fetchPeopleAsync);
}

function* savePeopleAsync(action) {
  try {
    yield put(savePeopleRequest());
    const response = yield call(() => apiClient.savePeople(action.people));
    yield put(savePeopleSuccess(action.people));
  } catch (e) {
    yield put(savePeopleFailure(e));
  }
}

export function* watchSavePeople() {
  yield takeLatest(SAVE_PEOPLE, savePeopleAsync);
}
