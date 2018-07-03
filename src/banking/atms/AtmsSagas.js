import { call, put, select, takeLatest } from 'redux-saga/effects';
import AtmsActions from './AtmsActions';
import { getAtmsCache } from './AtmsSelectors';
import { fetchAtmData } from './AtmsAPI';

function* getAtmsAsync(action) {
  try {
    let atmsCache = yield select(state => getAtmsCache(state));
    if (atmsCache[action.payload.url]) {
      return;
    }

    yield put(AtmsActions.getAtmsRequested(action.payload.name, action.payload.url));
    const response = yield call(() => fetchAtmData(action.payload.url));
    yield put(AtmsActions.getAtmsSuccess(response));
  } catch (e) {
    yield put(AtmsActions.getAtmsFailed(e));
  }
}

export function* watchGetAtms() {
  yield takeLatest(AtmsActions.GET_ATMS, getAtmsAsync);
}
