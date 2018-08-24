import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as yup from 'yup'; // for everything
import CourseSignupActions from '../coursesignup/CourseSignupActions.js';
import loadingImage from '../coursesignup/loading.gif';
import CourseSelectContainer from './CourseSelectContainer';
import { Field } from './Field';

class CourseSignupContainerFormik extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    saveStatus: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchPeople();
  }

  resetForm = () => {
    this.props.handleReset();
    this.props.resetSaveStatus();
  };

  render() {
    if (this.props.isLoading) {
      return <img alt="loading" src={loadingImage} />;
    }

    const { saveStatus, values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, isValid } = this.props;

    return (
      <div>
        <h1>Course Sign Up Sheet- using formik</h1>

        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            type="text"
            label="Name"
            placeholder="Name"
            className={`form-control ${errors.name && touched.name && 'is-invalid'}`}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />

          <br />

          <Field
            name="email"
            type="text"
            label="Email"
            placeholder="Email"
            className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          <br />

          {<CourseSelectContainer values={values} handleBlur={handleBlur} errors={errors} touched={touched} handleChange={handleChange} />}

          <br />
          {
            {
              SUCCESS: <input value="Saved!" type="submit" disabled />,
              SAVING: <input value="Saving..." type="submit" disabled />,
              ERROR: <input value="Save Failed - Retry?" type="submit" disabled={!isValid} />,
              READY: <input value="Submit" type="submit" disabled={!isValid} />
            }[saveStatus]
          }
          <br />
          <br />

          <button type="button" disabled={!dirty || isSubmitting} onClick={this.resetForm}>
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

CourseSignupContainerFormik = withFormik({
  displayName: 'CourseSignupContainerFormik', // helps with React DevTools

  mapPropsToValues: props => ({
    name: props.user.name,
    email: props.user.email,
    department: props.user.department,
    course: props.user.course
  }),

  validationSchema: yup.object().shape({
    name: yup.string().required('You need a name'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    department: yup.string().required('You need a department'),
    course: yup.string().required('You need a course')
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values);

    setTimeout(() => {
      setSubmitting(false);
    }, 250);
  }
})(CourseSignupContainerFormik);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseSignupContainerFormik);
