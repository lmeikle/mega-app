import { createSelector } from 'reselect';

const banksState = state => state.banking.banks;

export const getBanksWithAtmAPI = createSelector(banksState, banks => banks.banksWithAtmAPI);
