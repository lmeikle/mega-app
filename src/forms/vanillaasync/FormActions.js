/* eslint-disable no-use-before-define */
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export function fetchPeople() {
  return { type: FETCH_PEOPLE };
}

export const FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST';
export function fetchPeopleRequest() {
  return { type: FETCH_PEOPLE_REQUEST };
}

export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export function fetchPeopleSuccess(people) {
  return { type: FETCH_PEOPLE_SUCCESS, people };
}

export const SAVE_PEOPLE = 'SAVE_PEOPLE';
export function savePeople(people) {
  return { type: SAVE_PEOPLE, people };
}

export const SAVE_PEOPLE_REQUEST = 'SAVE_PEOPLE_REQUEST';
export function savePeopleRequest() {
  return { type: SAVE_PEOPLE_REQUEST };
}

export const SAVE_PEOPLE_FAILURE = 'SAVE_PEOPLE_FAILURE';
export function savePeopleFailure(error) {
  return { type: SAVE_PEOPLE_FAILURE, error };
}

export const SAVE_PEOPLE_SUCCESS = 'SAVE_PEOPLE_SUCCESS';
export function savePeopleSuccess(people) {
  return { type: SAVE_PEOPLE_SUCCESS, people };
}
