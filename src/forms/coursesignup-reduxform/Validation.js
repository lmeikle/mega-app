import isEmail from 'validator/lib/isEmail';

export const validateForm = inputs => {
  const errors = {};

  if (!inputs.name) {
    errors.name = 'Enter your Name';
  }

  if (!inputs.email) {
    errors.password = 'Enter your Email';
  }

  if (!inputs.department) {
    errors.department = 'Please select a department';
  }

  if (!inputs.course) {
    errors.course = 'Please select a course';
  }

  return errors;
};

export const requiredInput = val => (val ? false : `Is required`);

export const validEmail = val => (isEmail(val) ? false : 'Invalid Email');
