import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import LoginForm from '../login/LoginForm';
import LoginFormUsingSemantic from '../loginusingsemantic/LoginForm';
import FormContainer from '../vanillaasync/FormContainer';
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
          <Route path={`${this.props.match.url}/loginusingsemantic`} render={() => <LoginFormUsingSemantic onSubmit={this.submit} initialValues={this.getInitialValues()} />} />
          <Route path={`${this.props.match.url}/vanillaasync`} render={() => <FormContainer />} />
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
                  <Link to={`${this.props.match.url}/vanillaasync`}>
                    <div className="forms-item">
                      <div>Vanilla Async Form with redux</div>
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
