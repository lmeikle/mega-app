export const GET_ATMS = 'atms/GET_ATMS';
export type GET_ATMS = typeof GET_ATMS;

export const GET_ATMS_REQUESTED = 'atms/GET_ATMS_REQUESTED';
export type GET_ATMS_REQUESTED = typeof GET_ATMS_REQUESTED;

export const GET_ATMS_SUCCESS = 'atms/GET_ATMS_SUCCESS';
export type GET_ATMS_SUCCESS = typeof GET_ATMS_SUCCESS;

export const GET_ATMS_FAILED = 'atms/GET_ATMS_FAILED';
export type GET_ATMS_FAILED = typeof GET_ATMS_FAILED;

export type GetAtmsProps = {
  type: GET_ATMS;
  payload: {
    name: string;
    url: string;
  };
};

type GetAtmsRequestedProps = {
  type: GET_ATMS_REQUESTED;
  payload: {
    name: string;
    url: string;
  };
};

type GetAtmsSuccessProps = {
  type: GET_ATMS_SUCCESS;
  payload: {
    response: any;
  };
};

type GetAtmsFailedProps = {
  type: GET_ATMS_FAILED;
  payload: {
    error: Error;
  };
};

export type AtmsActionsProps = GetAtmsProps | GetAtmsRequestedProps | GetAtmsSuccessProps | GetAtmsFailedProps;

export const getAtms = (name: string, url: string): GetAtmsProps => {
  return {
    type: GET_ATMS,
    payload: {
      name,
      url
    }
  };
};

export const getAtmsRequested = (name: string, url: string): GetAtmsRequestedProps => {
  return {
    type: GET_ATMS_REQUESTED,
    payload: {
      name,
      url
    }
  };
};

export const getAtmsSuccess = (response: any): GetAtmsSuccessProps => {
  return {
    type: GET_ATMS_SUCCESS,
    payload: {
      response
    }
  };
};

export const getAtmsFailed = (error: Error): GetAtmsFailedProps => {
  return {
    type: GET_ATMS_FAILED,
    payload: {
      error
    }
  };
};
