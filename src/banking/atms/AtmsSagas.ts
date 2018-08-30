import { call, put, select, takeLatest } from 'redux-saga/effects';
import { StoreStateProps } from '../../index';
import { GetAtmsProps, getAtmsRequested, getAtmsSuccess, getAtmsFailed, GET_ATMS } from './AtmsActions';
import { getAtmsCache } from './AtmsSelectors';
import { fetchAtmData } from './AtmsAPI';

export function* getAtmsAsync(action: GetAtmsProps) {
  try {
    let atmsCache = yield select((state: StoreStateProps) => getAtmsCache(state));
    if (atmsCache[action.payload.url]) {
      return;
    }

    yield put(getAtmsRequested(action.payload.name, action.payload.url));
    const response = yield call(() => fetchAtmData(action.payload.url));
    yield put(getAtmsSuccess(response));
  } catch (e) {
    yield put(getAtmsFailed(e));
  }
}

export function* watchGetAtms() {
  yield takeLatest(GET_ATMS, getAtmsAsync);
}
