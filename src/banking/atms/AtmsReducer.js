import AtmsActions from './AtmsActions';

const ATMS_INITIAL_STATE = {
  isFetching: true,
  geolocation: null,
  name: null,
  url: null,
  atmsCache: {},
  error: null
};

export default function atms(state = ATMS_INITIAL_STATE, action) {
  switch (action.type) {
    case AtmsActions.GET_ATMS_REQUESTED:
      const { name, url } = action.payload;

      return {
        ...state,
        isFetching: true,
        name,
        url,
        error: null
      };
    case AtmsActions.GET_ATMS_SUCCESS: {
      const { response } = action.payload;

      let brandNode = response.data[0].Brand[0];
      let brandName = brandNode.BrandName;

      // create atm data for each node just with data we actually need
      let atms = brandNode.ATM.map(atm => {
        let postalAddress = atm.Location.PostalAddress;
        return {
          identification: atm.Identification,
          name: brandName,
          countryCode: postalAddress.Country,
          address: formatAddress(postalAddress),
          coords: postalAddress.GeoLocation.GeographicCoordinates,
          numOfAtms: 1
        };
      });

      let filteredAtms = removeDuplicatesAndCountAtmsAtAdrress(atms);

      let atmsCache = {
        ...state.atmsCache,
        [state.url]: filteredAtms
      };
      return {
        ...state,
        isFetching: false,
        atmsCache
      };
    }
    case AtmsActions.GET_ATMS_FAILED:
      const { error } = action.payload;

      return {
        ...state,
        isFetching: false,
        error: error.toString()
      };
    default:
      return state;
  }
}

const formatAddress = postalAddress => {
  let address = 'Unknown';
  if (postalAddress) {
    address = '';
    if (postalAddress.StreetName) {
      address = `${postalAddress.StreetName}, `;
    }
    address += `${postalAddress.TownName}, ${postalAddress.PostCode}`;
  }

  return address;
};

const removeDuplicatesAndCountAtmsAtAdrress = atms => {
  let seen = {};
  return atms.filter(atm => {
    if (seen.hasOwnProperty(atm.address)) {
      seen[atm.address].numOfAtms++;
      return false;
    } else {
      seen[atm.address] = atm;
      return true;
    }
  });
};
