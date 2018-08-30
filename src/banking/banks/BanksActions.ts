export const GET_BANKS = 'banks/GET_BANKS';
export type GET_BANKS = typeof GET_BANKS;

export const GET_BANKS_REQUESTED = 'banks/GET_BANKS_REQUESTED';
export type GET_BANKS_REQUESTED = typeof GET_BANKS_REQUESTED;

export const GET_BANKS_SUCCESS = 'banks/GET_BANKS_SUCCESS';
export type GET_BANKS_SUCCESS = typeof GET_BANKS_SUCCESS;

export const GET_BANKS_FAILED = 'banks/GET_BANKS_FAILED';
export type GET_BANKS_FAILED = typeof GET_BANKS_FAILED;

type GetBanksProps = {
  type: GET_BANKS;
};

type GetBanksRequestedProps = {
  type: GET_BANKS_REQUESTED;
};

type GetBanksSuccessProps = {
  type: GET_BANKS_SUCCESS;
  payload: {
    data: Array<any>;
  };
};

type GetBanksFailedProps = {
  type: GET_BANKS_FAILED;
  payload: {
    error: Error;
  };
};

export type BanksActionsProps = GetBanksProps | GetBanksRequestedProps | GetBanksSuccessProps | GetBanksFailedProps;

export const getBanks = (): GetBanksProps => {
  return {
    type: GET_BANKS
  };
};

export const getBanksRequested = (): GetBanksRequestedProps => {
  return {
    type: GET_BANKS_REQUESTED
  };
};

export const getBanksSuccess = (data: Array<any>): GetBanksSuccessProps => {
  return {
    type: GET_BANKS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBanksFailed = (error: Error): GetBanksFailedProps => {
  return {
    type: GET_BANKS_FAILED,
    payload: {
      error
    }
  };
};
