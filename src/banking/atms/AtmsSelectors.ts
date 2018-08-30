import { createSelector } from 'reselect';
import { StoreStateProps } from '../../index';

const atmsState = (state: StoreStateProps) => state.banking.atms;

export const getAtms = createSelector(atmsState, atms => atms.atmsCache[atms.url]);
export const getName = createSelector(atmsState, atms => atms.name);
export const getErrorMessage = createSelector(atmsState, atms => atms.errorMessage);
export const getAtmsCache = createSelector(atmsState, atms => atms.atmsCache);
export const isFetching = createSelector(atmsState, atms => atms.isFetching);
