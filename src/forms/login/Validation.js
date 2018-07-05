export const validateForm = inputs => {
  const errors = {};

  if (!inputs.username) {
    errors.username = 'Enter your Username';
  } else if (inputs.username !== 'rajat') {
    errors.username = 'Username is incorrect';
  }

  if (!inputs.password) {
    errors.password = 'Enter your Password';
  }

  return errors;
};

export const requiredInput = input => (input ? undefined : `Input is required`);

export const correctInput = input => (input !== 'rajat' ? 'Incorrect Username' : undefined);

export const matchInput = (input, allInputs) => (input === allInputs.password ? undefined : 'Passwords do not match');
