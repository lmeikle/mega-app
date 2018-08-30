import { BanksActionsProps, GET_BANKS_REQUESTED, GET_BANKS_SUCCESS, GET_BANKS_FAILED } from './BanksActions';
import { BankProps } from './BanksPropTypes';

export type BanksStoreProps = {
  isFetching: boolean;
  banksWithAtmAPI: Array<BankProps>;
};

const BANKS_INITIAL_STATE = {
  isFetching: true,
  banksWithAtmAPI: []
};

export default function banks(state: BanksStoreProps = BANKS_INITIAL_STATE, action: BanksActionsProps) {
  switch (action.type) {
    case GET_BANKS_REQUESTED:
      return {
        isFetching: true,
        banksWithAtmAPI: []
      };
    case GET_BANKS_SUCCESS: {
      const { data } = action.payload;

      let banksWithAtmAPI = [];
      for (let bank of data) {
        if (bank.supportedAPIs.atms) {
          banksWithAtmAPI.push({
            name: bank.name,
            url: `${bank.baseUrl}/${bank.supportedAPIs.atms[0]}/atms`
          });
        }
      }

      return {
        isFetching: false,
        banksWithAtmAPI
      };
    }
    case GET_BANKS_FAILED:
      return {
        isFetching: false,
        banksWithAtmAPI: []
      };
    default:
      return state;
  }
}
