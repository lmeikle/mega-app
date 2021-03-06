import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import LoginForm from '../login/LoginForm';
import LoginFormUsingSemantic from '../loginusingsemantic/LoginForm';
import CourseSignupContainer from '../coursesignup/CourseSignupContainer';
import CourseSignupContainerReduxForm from '../coursesignup-reduxform/CourseSignupContainerReduxForm';
import CourseSignupContainerFormik from '../coursesignup-formik/CourseSignupContainerFormik';
import './Forms.css';

class Forms extends Component {
  submit = inputs => {
    if (['lmeikle'].includes(inputs.username)) {
      throw new SubmissionError({
        username: 'Username already taken'
      });
    } else {
      window.alert(JSON.stringify(inputs));
    }
  };

  getInitialValues() {
    return {
      username: 'lmeikle',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.url}/login`} render={() => <LoginForm onSubmit={this.submit} initialValues={this.getInitialValues()} />} />
          <Route
            path={`${this.props.match.url}/loginusingsemantic`}
            render={() => <LoginFormUsingSemantic onSubmit={this.submit} initialValues={this.getInitialValues()} />}
          />
          <Route path={`${this.props.match.url}/coursesignup`} render={() => <CourseSignupContainer />} />
          <Route path={`${this.props.match.url}/coursesignup-reduxform`} render={() => <CourseSignupContainerReduxForm />} />
          <Route
            path={`${this.props.match.url}/coursesignup-formik`}
            render={() => <CourseSignupContainerFormik user={{ name: '', email: '', department: '', course: '' }} />}
          />
          <Route
            path={`${this.props.match.url}/`}
            render={() => (
              <div>
                <div className="forms-title">Forms</div>
                <div>
                  <Link to={`${this.props.match.url}/login`}>
                    <div className="forms-item">
                      <div>Login form using redux-form</div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to={`${this.props.match.url}/loginusingsemantic`}>
                    <div className="forms-item">
                      <div>Login form using redux-form and semantic ui</div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to={`${this.props.match.url}/coursesignup`}>
                    <div className="forms-item">
                      <div>Course sign up form - vanilla, async, redux</div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to={`${this.props.match.url}/coursesignup-reduxform`}>
                    <div className="forms-item">
                      <div>Course sign up form - as above but using redux-form</div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to={`${this.props.match.url}/coursesignup-formik`}>
                    <div className="forms-item">
                      <div>Course sign up form - as above but using formik. (Build forms in React, without the tears)</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Forms;
