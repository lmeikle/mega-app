const BanksActions = {
  GET_BANKS: 'banks/GET_BANKS',
  GET_BANKS_REQUESTED: 'banks/GET_BANKS_REQUESTED',
  GET_BANKS_SUCCESS: 'banks/GET_BANKS_SUCCESS',
  GET_BANKS_FAILED: 'banks/GET_BANKS_FAILED',

  getBanks() {
    return {
      type: this.GET_BANKS
    };
  },

  getBanksRequested() {
    return {
      type: this.GET_BANKS_REQUESTED
    };
  },

  getBanksSuccess(response) {
    return {
      type: this.GET_BANKS_SUCCESS,
      payload: {
        response
      }
    };
  },

  getBanksFailed(error) {
    return {
      type: this.GET_BANKS_FAILED,
      payload: {
        error
      }
    };
  }
};

export default BanksActions;
