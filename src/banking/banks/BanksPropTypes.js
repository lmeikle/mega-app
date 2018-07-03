import { arrayOf, string, shape } from 'prop-types';

export const banksWithAtmAPIType = arrayOf(
  shape({
    name: string.isRequired,
    url: string.isRequired
  })
);
