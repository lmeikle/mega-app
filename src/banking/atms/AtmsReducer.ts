import { AtmsActionsProps, GET_ATMS, GET_ATMS_REQUESTED, GET_ATMS_SUCCESS, GET_ATMS_FAILED } from './AtmsActions';
import { AtmProps } from './AtmsPropTypes';

export type AtmsStoreProps = {
  isFetching: boolean;
  geolocation?: object;
  name?: string;
  url: string;
  atmsCache: { [index: string]: any };
  errorMessage?: string;
};

const ATMS_INITIAL_STATE = {
  isFetching: true,
  url: '',
  atmsCache: {}
};

export default function atms(state: AtmsStoreProps = ATMS_INITIAL_STATE, action: AtmsActionsProps) {
  switch (action.type) {
    case GET_ATMS: {
      const { name, url } = action.payload;

      return {
        ...state,
        name,
        url,
        errorMessage: ''
      };
    }
    case GET_ATMS_REQUESTED:
      const { name, url } = action.payload;

      return {
        ...state,
        isFetching: true,
        name,
        url,
        errorMessage: ''
      };
    case GET_ATMS_SUCCESS: {
      const { response } = action.payload;

      let brandNode = response.data[0].Brand[0];
      let brandName = brandNode.BrandName;

      // create atm data for each node just with data we actually need
      let atms: Array<AtmProps> = brandNode.ATM.map(
        (atm: any): AtmProps => {
          let postalAddress = atm.Location.PostalAddress;
          return {
            identification: atm.Identification,
            name: brandName,
            countryCode: postalAddress.Country,
            address: formatAddress(postalAddress),
            coords: postalAddress.GeoLocation.GeographicCoordinates,
            numOfAtms: 1
          };
        }
      );

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
    case GET_ATMS_FAILED:
      const { error } = action.payload;

      return {
        ...state,
        isFetching: false,
        errorMessage: error.toString()
      };
    default:
      return state;
  }
}

const formatAddress = (postalAddress: any) => {
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

const removeDuplicatesAndCountAtmsAtAdrress = (atms: Array<AtmProps>) => {
  let seen: any = {};
  return atms.filter((atm: any) => {
    if (seen.hasOwnProperty(atm.address)) {
      seen[atm.address].numOfAtms++;
      return false;
    } else {
      seen[atm.address] = atm;
      return true;
    }
  });
};
