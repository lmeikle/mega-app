// Use `const enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export const BanksActionTypes = {
  GET_BANKS: '@@banks/GET_BANKS',
  GET_BANKS_REQUESTED: '@@banks/GET_BANKS_REQUESTED',
  GET_BANKS_SUCCESS: '@@banks/GET_BANKS_SUCCESS',
  GET_BANKS_FAILED: '@@banks/GET_BANKS_FAILED'
};

export type GetBanksActionProps = {
  // @ts-ignore
  type: BanksActionTypes.GET_BANKS;
};

export type GetBanksRequestedActionProps = {
  // @ts-ignore
  type: BanksActionTypes.GET_BANKS_REQUESTED;
};

export type GetBanksSuccessActionProps = {
  // @ts-ignore
  type: BanksActionTypes.GET_BANKS_SUCCESS;
  payload: {
    data: Array<any>;
  };
};

export type GetBanksFailedActionProps = {
  // @ts-ignore
  type: BanksActionTypes.GET_BANKS_FAILED;
  payload: {
    error: Error;
  };
};

export type BanksActionsProps = GetBanksActionProps | GetBanksRequestedActionProps | GetBanksSuccessActionProps | GetBanksFailedActionProps;

export type BankProps = {
  name: string;
  url: string;
};

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export type BanksStoreProps = {
  readonly isFetching: boolean;
  readonly banksWithAtmAPI: Array<BankProps>;
};
