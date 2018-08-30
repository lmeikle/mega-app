export type AtmProps = {
  identification: string;
  name: string;
  countryCode: string;
  address: string;
  coords: {
    Latitude: string;
    Longitude: string;
  };
  numOfAtms: number;
  distance?: number;
};
