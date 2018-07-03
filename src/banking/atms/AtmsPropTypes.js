import { arrayOf, object as obj, number, string, shape } from 'prop-types';

export const atmsType = arrayOf(
  shape({
    identification: string.isRequired,
    name: string.isRequired,
    countryCode: string.isRequired,
    address: string.isRequired,
    coords: obj.isRequired,
    numOfAtms: number.isRequired
  })
);
