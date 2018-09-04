import { call, put, select, takeLatest } from 'redux-saga/effects';
import { StoreStateProps } from '../../configureStore';
import { fetchBanksWithAtmAPIData } from './BanksAPI';
import { getBanksWithAtmAPI } from './BanksSelectors';
import { getBanksRequested, getBanksSuccess, getBanksFailed } from './BanksActions';
import { BanksActionTypes } from './BanksTypes';

export function* getBanksAsync() {
  try {
    let banksWithAtmAPI = yield select((state: StoreStateProps) => getBanksWithAtmAPI(state));
    if (banksWithAtmAPI && banksWithAtmAPI.length > 0) {
      return;
    }

    yield put(getBanksRequested());
    const response = yield call(fetchBanksWithAtmAPIData);
    yield put(getBanksSuccess(response));
  } catch (e) {
    yield put(getBanksFailed(e));
  }
}

export function* watchGetBanks() {
  yield takeLatest(BanksActionTypes.GET_BANKS, getBanksAsync);
}
