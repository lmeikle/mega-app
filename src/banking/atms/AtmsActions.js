const AtmsActions = {
  GET_ATMS: 'atms/GET_ATMS',
  GET_ATMS_REQUESTED: 'atms/GET_ATMS_REQUESTED',
  GET_ATMS_SUCCESS: 'atms/GET_ATMS_SUCCESS',
  GET_ATMS_FAILED: 'atms/GET_ATMS_FAILED',

  getAtms(name, url) {
    return {
      type: this.GET_ATMS,
      payload: {
        name,
        url
      }
    };
  },

  getAtmsRequested(name, url) {
    return {
      type: this.GET_ATMS_REQUESTED,
      payload: {
        name,
        url
      }
    };
  },

  getAtmsSuccess(response) {
    return {
      type: this.GET_ATMS_SUCCESS,
      payload: {
        response
      }
    };
  },

  getAtmsFailed(error) {
    return {
      type: this.GET_ATMS_FAILED,
      payload: {
        error
      }
    };
  }
};

export default AtmsActions;
