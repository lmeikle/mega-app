import { call, put, select, takeLatest } from 'redux-saga/effects';
import { StoreStateProps } from '../../index';
import { fetchBanksWithAtmAPIData } from './BanksAPI';
import { getBanksWithAtmAPI } from './BanksSelectors';
import * as BanksActions from './BanksActions';

export function* getBanksAsync() {
  try {
    let banksWithAtmAPI = yield select((state: StoreStateProps) => getBanksWithAtmAPI(state));
    if (banksWithAtmAPI && banksWithAtmAPI.length > 0) {
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