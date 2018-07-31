import { fetchBanksWithAtmAPIData } from '../BanksAPI';

describe('testing banks api', () => {
  test('fetches data - is just loaded from a file', async () => {
    let res = await fetchBanksWithAtmAPIData();
    expect(res.length).toEqual(17);
  });
});
