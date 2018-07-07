const CourseSignupActions = {
  FETCH_PEOPLE: 'coursesignup/FETCH_PEOPLE',
  FETCH_PEOPLE_REQUEST: 'coursesignup/FETCH_PEOPLE_REQUEST',
  FETCH_PEOPLE_SUCCESS: 'coursesignup/FETCH_PEOPLE_SUCCESS',
  SAVE_PEOPLE: 'coursesignup/SAVE_PEOPLE',
  SAVE_PEOPLE_REQUEST: 'coursesignup/SAVE_PEOPLE_REQUEST',
  SAVE_PEOPLE_SUCCESS: 'coursesignup/SAVE_PEOPLE_SUCCESS',
  SAVE_PEOPLE_FAILURE: 'coursesignup/SAVE_PEOPLE_FAILURE',

  fetchPeople() {
    return { type: CourseSignupActions.FETCH_PEOPLE };
  },

  fetchPeopleRequest() {
    return { type: CourseSignupActions.FETCH_PEOPLE_REQUEST };
  },

  fetchPeopleSuccess(people) {
    return { type: CourseSignupActions.FETCH_PEOPLE_SUCCESS, people };
  },

  savePeople(people) {
    return { type: CourseSignupActions.SAVE_PEOPLE, people };
  },

  savePeopleRequest() {
    return { type: CourseSignupActions.SAVE_PEOPLE_REQUEST };
  },

  savePeopleSuccess(people) {
    return { type: CourseSignupActions.SAVE_PEOPLE_SUCCESS, people };
  },

  savePeopleFailure(error) {
    return { type: CourseSignupActions.SAVE_PEOPLE_FAILURE, error };
  }
};

export default CourseSignupActions;
