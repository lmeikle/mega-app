import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import atms, { AtmsStoreProps } from './atms/AtmsReducer';
import banks, { BanksStoreProps } from './banks/BanksReducer';

import { watchGetBanks } from './banks/BanksSagas';
import { watchGetAtms } from './atms/AtmsSagas';

export interface BankingStoreProps {
  atms: AtmsStoreProps;
  banks: BanksStoreProps;
}

export const banking = combineReducers<BankingStoreProps>({
  atms,
  banks
});

export function* bankingSagas() {
  yield all([watchGetBanks(), watchGetAtms()]);
}
