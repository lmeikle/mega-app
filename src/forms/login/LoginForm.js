import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myInput } from './Field';
import { requiredInput, correctInput, matchInput, validateForm } from './Validation';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="login-form-title">Login form using redux-form</div>
        <form onSubmit={handleSubmit}>
          <Field name="username" component={myInput} type="text" placeholder="Username" validate={[requiredInput, correctInput]} />
          <br />
          <Field name="password" component={myInput} type="password" placeholder="Password" validate={[requiredInput]} />
          <br />
          <Field name="confirm-password" component={myInput} type="password" placeholder="Confirm Password" validate={[requiredInput, matchInput]} />
          <br />
          <button type="submit" label="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'login',
  validateForm
})(LoginForm);

export default LoginForm;
