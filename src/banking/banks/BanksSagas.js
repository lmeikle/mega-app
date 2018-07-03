import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchBanksWithAtmAPIData } from './BanksAPI';
import { getBanksWithAtmAPI } from './BanksSelectors';
import BanksActions from './BanksActions';

function* getBanksAsync() {
  try {
    let banksWithAtmAPI = yield select(state => getBanksWithAtmAPI(state));
    if (banksWithAtmAPI) {
      return;
    }

    yield put(BanksActions.getBanksRequested());
    const response = yield call(fetchBanksWithAtmAPIData);
    yield put(BanksActions.getBanksSuccess(response));
  } catch (e) {
    yield put(BanksActions.getBanksFailed(e));
  }
}

export function* watchGetBanks() {
  yield takeLatest(BanksActions.GET_BANKS, getBanksAsync);
}
