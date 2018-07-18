import BanksActions from './BanksActions';

const BANKS_INITIAL_STATE = {
  isFetching: true,
  banksWithAtmAPI: []
};

export default function banks(state = BANKS_INITIAL_STATE, action) {
  switch (action.type) {
    case BanksActions.GET_BANKS_REQUESTED:
      return {
        isFetching: true,
        banksWithAtmAPI: []
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
        isFetching: false,
        banksWithAtmAPI
      };
    }
    case BanksActions.GET_BANKS_FAILED:
      return {
        isFetching: false,
        banksWithAtmAPI: []
      };
    default:
      return state;
  }
}
