import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import atms from './atms/AtmsReducer';
import banks from './banks/BanksReducer';

import { watchGetBanks } from './banks/BanksSagas';
import { watchGetAtms } from './atms/AtmsSagas';

export const banking = combineReducers({
  atms,
  banks
});

export function* bankingSagas() {
  yield all([watchGetBanks(), watchGetAtms()]);
}
