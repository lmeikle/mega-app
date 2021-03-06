import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ApiClient } from './APIClient';
import CourseSignupActions from './CourseSignupActions';

function* fetchPeopleAsync() {
  try {
    yield put(CourseSignupActions.fetchPeopleRequest());
    const response = yield call(ApiClient.loadPeople);
    yield put(CourseSignupActions.fetchPeopleSuccess(response));
  } catch (e) {}
}

export function* watchFetchPeople() {
  yield takeLatest(CourseSignupActions.FETCH_PEOPLE, fetchPeopleAsync);
}

function* savePeopleAsync(action) {
  try {
    yield put(CourseSignupActions.savePeopleRequest());
    let people = yield select(state => state.courseSignup.people);
    yield call(() => ApiClient.savePeople([...people, action.people]));
    yield put(CourseSignupActions.savePeopleSuccess([...people, action.people]));
  } catch (e) {
    yield put(CourseSignupActions.savePeopleFailure(e));
  }
}

export function* watchSavePeople() {
  yield takeLatest(CourseSignupActions.SAVE_PEOPLE, savePeopleAsync);
}
