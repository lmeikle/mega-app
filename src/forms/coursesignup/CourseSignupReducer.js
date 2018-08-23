import CourseSignupActions from './CourseSignupActions.js';

const initialState = {
  people: [],
  isLoading: false,
  saveStatus: 'READY',
  person: {
    name: '',
    email: '',
    course: null,
    department: null
  }
};

export function courseSignupReducer(state = initialState, action) {
  switch (action.type) {
    case CourseSignupActions.FETCH_PEOPLE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case CourseSignupActions.FETCH_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        people: action.people,
        isLoading: false
      });
    case CourseSignupActions.SAVE_PEOPLE_REQUEST:
      return Object.assign({}, state, {
        saveStatus: 'SAVING'
      });
    case CourseSignupActions.SAVE_PEOPLE_FAILURE:
      return Object.assign({}, state, {
        saveStatus: 'ERROR'
      });
    case CourseSignupActions.SAVE_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        people: action.people,
        person: {
          name: '',
          email: '',
          course: null,
          department: null
        },
        saveStatus: 'SUCCESS'
      });
    case CourseSignupActions.RESET:
      return Object.assign({}, state, {
        saveStatus: 'READY'
      });
    default:
      return state;
  }
}
