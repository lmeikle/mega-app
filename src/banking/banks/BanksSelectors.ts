import { createSelector } from 'reselect';
import { StoreStateProps } from '../../configureStore';

const banksState = (state: StoreStateProps) => state.banking.banks;

export const getBanksWithAtmAPI = createSelector(banksState, banks => banks.banksWithAtmAPI);
export const isFetching = createSelector(banksState, banks => banks.isFetching);
