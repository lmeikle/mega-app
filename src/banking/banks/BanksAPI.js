import paticipantStoreJson from './paticipant_store.json';

/**
 * Gets the list of banks which have an ATM API.
 *
 * At present this is just read from a downloaded file, as there is not an actual API request available.
 * Still written with promises in case this changes in the future.
 */
export function fetchBanksWithAtmAPIData() {
  return new Promise((resolve, reject) => {
    resolve(paticipantStoreJson.data);
  });
}
