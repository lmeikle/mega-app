/*****************************************************************
 * Fix Enzyme Adapter with react 16
 *****************************************************************/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

/*****************************************************************
 * jest-dom - some helpful assertions
 *****************************************************************/
import 'jest-dom/extend-expect';

/*****************************************************************
 * react-testing-library helper
 *****************************************************************/
// this is basically: afterEach(cleanup)
import 'react-testing-library/cleanup-after-each';

/*****************************************************************
 * fetch
 *****************************************************************/
import fetch from 'jest-fetch-mock';
global.fetch = fetch;

/*****************************************************************
 * Mock geolocation
 *****************************************************************/
const mockGeolocation = {
  getCurrentPosition: jest.fn(cb => cb({ coords: { latitude: 123, longitude: 456 } })),
  watchPosition: jest.fn()
};

navigator.geolocation = mockGeolocation;
