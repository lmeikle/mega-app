import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CourseSignupActions from '../coursesignup/CourseSignupActions.js';
import loadingImage from '../coursesignup/loading.gif';
import CourseSelectContainer from './CourseSelectContainer';
import { requiredInput, validEmail, validateForm } from './Validation';
import { renderInputField } from './Field';

class CourseSignupContainerReduxForm extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    saveStatus: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchPeople();
  }

  resetForm = () => {
    this.props.reset();
    this.props.resetSaveStatus();
  };

  render() {
    if (this.props.isLoading) {
      return <img alt="loading" src={loadingImage} />;
    }

    let { saveStatus, handleSubmit, valid, pristine, submitting } = this.props;

    return (
      <div>
        <h1>Course Sign Up Sheet- using redux-form</h1>

        <form onSubmit={handleSubmit}>
          <Field name="name" type="text" component={renderInputField} label="Name" placeholder="Name" />
          <br />
          <Field name="email" type="text" component={renderInputField} label="Email" placeholder="Email" validate={[requiredInput, validEmail]} />
          <br />
          <CourseSelectContainer />
          <br />
          {
            {
              SUCCESS: <input value="Saved!" type="submit" disabled />,
              SAVING: <input value="Saving..." type="submit" disabled />,
              ERROR: <input value="Save Failed - Retry?" type="submit" disabled={!valid} />,
              READY: <input value="Submit" type="submit" disabled={!valid} />
            }[saveStatus]
          }
          <br />
          <br />
          <button type="button" disabled={pristine || submitting} onClick={this.resetForm}>
            Reset
          </button>
        </form>
        <br />
        <br />
        <div>
          <h3>People</h3>
          <ul>
            {this.props.people.map(({ name, email, department, course }, i) => (
              <li key={i}>{[name, email, department, course].join(' - ')}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.courseSignup.isLoading,
    people: state.courseSignup.people,
    saveStatus: state.courseSignup.saveStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPeople: () => {
      dispatch(CourseSignupActions.fetchPeople());
    },
    onSubmit: data => {
      dispatch(CourseSignupActions.savePeople(data));
    },
    resetSaveStatus: () => {
      dispatch(CourseSignupActions.reset());
    }
  };
}

CourseSignupContainerReduxForm = reduxForm({
  form: 'CourseSignupContainerReduxForm',
  validate: validateForm
})(CourseSignupContainerReduxForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseSignupContainerReduxForm);
