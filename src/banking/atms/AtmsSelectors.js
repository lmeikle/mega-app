import { createSelector } from 'reselect';

const atmsState = state => state.banking.atms;

export const getAtms = createSelector(atmsState, atms => atms.atmsCache[atms.url]);
export const getName = createSelector(atmsState, atms => atms.name);
export const getError = createSelector(atmsState, atms => atms.error);
export const getAtmsCache = createSelector(atmsState, atms => atms.atmsCache);
