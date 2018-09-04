import {
  BanksActionTypes,
  GetBanksActionProps,
  GetBanksRequestedActionProps,
  GetBanksSuccessActionProps,
  GetBanksFailedActionProps
} from './BanksTypes';

export const getBanks = (): GetBanksActionProps => {
  return {
    type: BanksActionTypes.GET_BANKS
  };
};

export const getBanksRequested = (): GetBanksRequestedActionProps => {
  return {
    type: BanksActionTypes.GET_BANKS_REQUESTED
  };
};

export const getBanksSuccess = (data: Array<any>): GetBanksSuccessActionProps => {
  return {
    type: BanksActionTypes.GET_BANKS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBanksFailed = (error: Error): GetBanksFailedActionProps => {
  return {
    type: BanksActionTypes.GET_BANKS_FAILED,
    payload: {
      error
    }
  };
};
