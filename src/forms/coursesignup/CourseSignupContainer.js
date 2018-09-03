import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import CourseSignupActions from './CourseSignupActions.js';
import CourseSelectContainer from './CourseSelectContainer';
import InputFieldContainer from './InputFieldContainer';
import loadingImage from './loading.gif';

class CourseSignupContainer extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    saveStatus: PropTypes.string.isRequired,
    fields: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    fields: this.props.fields || {
      name: '',
      email: '',
      course: null,
      department: null
    },
    fieldErrors: {}
  };

  UNSAFE_componentWillMount() {
    this.props.fetchPeople();
  }

  UNSAFE_componentWillReceiveProps(update) {
    this.setState({ fields: update.fields });
  }

  onFormSubmit = evt => {
    const person = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    this.props.onSubmit([...this.props.people, person]);
  };

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  validate = () => {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!person.name) return true;
    if (!person.email) return true;
    if (!person.course) return true;
    if (!person.department) return true;
    if (errMessages.length) return true;

    return false;
  };

  render() {
    if (this.props.isLoading) {
      return <img alt="loading" src={loadingImage} />;
    }

    const dirty = Object.keys(this.state.fields).length;
    let status = this.props.saveStatus;
    if (status === 'SUCCESS' && dirty) status = 'READY';

    return (
      <div>
        <h1>Course Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <InputFieldContainer
            placeholder="Name"
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={val => (val ? false : 'Name Required')}
          />

          <br />

          <InputFieldContainer
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={val => (isEmail(val) ? false : 'Invalid Email')}
          />

          <br />

          <CourseSelectContainer department={this.state.fields.department} course={this.state.fields.course} onChange={this.onInputChange} />

          <br />

          {
            {
              SAVING: <input value="Saving..." type="submit" disabled />,
              SUCCESS: <input value="Saved!" type="submit" disabled />,
              ERROR: <input value="Save Failed - Retry?" type="submit" disabled={this.validate()} />,
              READY: <input value="Submit" type="submit" disabled={this.validate()} />
            }[status]
          }
        </form>

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
    fields: state.courseSignup.person,
    people: state.courseSignup.people,
    saveStatus: state.courseSignup.saveStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPeople: () => {
      dispatch(CourseSignupActions.fetchPeople());
    },
    onSubmit: people => {
      dispatch(CourseSignupActions.savePeople(people));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseSignupContainer);
