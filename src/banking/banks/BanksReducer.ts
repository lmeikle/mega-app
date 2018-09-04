import { Reducer } from 'redux';
import { BanksActionTypes, BanksActionsProps, BanksStoreProps } from './BanksTypes';

const BANKS_INITIAL_STATE: BanksStoreProps = {
  isFetching: true,
  banksWithAtmAPI: []
};

//export default function banks
const banksReducer: Reducer<BanksStoreProps> = (state: BanksStoreProps = BANKS_INITIAL_STATE, action: BanksActionsProps) => {
  switch (action.type) {
    case BanksActionTypes.GET_BANKS_REQUESTED:
      return {
        isFetching: true,
        banksWithAtmAPI: []
      };
    case BanksActionTypes.GET_BANKS_SUCCESS: {
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
    case BanksActionTypes.GET_BANKS_FAILED:
      return {
        isFetching: false,
        banksWithAtmAPI: []
      };
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { banksReducer as banks };
