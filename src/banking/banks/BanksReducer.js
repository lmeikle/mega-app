import BanksActions from './BanksActions';

const BANKS_INITIAL_STATE = {
  banksWithAtmAPI: null
};

export default function banks(state = BANKS_INITIAL_STATE, action) {
  switch (action.type) {
    case BanksActions.GET_BANKS_REQUESTED:
      return {
        ...state,
        isFetching: true,
        banksWithAtmAPI: null
      };
    case BanksActions.GET_BANKS_SUCCESS: {
      const { response } = action.payload;

      let banksWithAtmAPI = [];
      for (let bank of response) {
        if (bank.supportedAPIs.atms) {
          banksWithAtmAPI.push({
            name: bank.name,
            url: `${bank.baseUrl}/${bank.supportedAPIs.atms[0]}/atms`
          });
        }
      }

      return {
        ...state,
        isFetching: false,
        banksWithAtmAPI
      };
    }
    case BanksActions.GET_BANKS_FAILED:
      return {
        ...state,
        isFetching: false,
        banksWithAtmAPI: null
      };
    default:
      return state;
  }
}
