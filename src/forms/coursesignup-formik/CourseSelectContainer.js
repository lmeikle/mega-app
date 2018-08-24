import React, { Component } from 'react';
import Core from '../coursesignup/api/core.json';
import Electives from '../coursesignup/api/electives.json';
import { SelectField } from './Field';

const Courses = {
  core: Core,
  electives: Electives
};

class CourseSelectContainer extends Component {
  state = {
    courses: []
  };

  onSelectDepartment = evt => {
    const department = evt.target.value;
    this.setState({ courses: [] });
    if (department) {
      apiClient(department).then(courses => {
        this.setState({ courses: courses });
      });
    }

    this.props.handleChange(evt);
  };

  renderDepartmentSelect = () => {
    const { values, touched, errors, handleBlur } = this.props;

    return (
      <SelectField
        name="department"
        type="select"
        label="Department"
        placeholder="Department"
        className={`form-control ${errors.department && touched.department && 'is-invalid'}`}
        value={values.department}
        onChange={this.onSelectDepartment}
        onBlur={handleBlur}
        error={errors.department}
        touched={touched.department}
      >
        <option value="">Which department?</option>
        <option value="core">NodeSchool: Core</option>
        <option value="electives">NodeSchool: Electives</option>
      </SelectField>
    );
  };

  renderCourseSelect = () => {
    const { values, touched, errors, handleBlur, handleChange } = this.props;

    return (
      <SelectField
        name="course"
        type="select"
        label="Course"
        placeholder="Course"
        className={`form-control ${errors.course && touched.course && 'is-invalid'}`}
        value={values.course}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.course}
        touched={touched.course}
        disabled={this.state.courses.length === 0}
      >
        {[
          <option value="" key="course-none">
            Which course?
          </option>,

          ...this.state.courses.map((course, i) => (
            <option value={course} key={i}>
              {course}
            </option>
          ))
        ]}
      </SelectField>
    );
  };

  render() {
    return (
      <div>
        {this.renderDepartmentSelect()}
        <br />
        {this.renderCourseSelect()}
      </div>
    );
  }
}

function apiClient(department) {
  return {
    then: function(cb) {
      setTimeout(() => {
        cb(Courses[department]);
      }, 250);
    }
  };
}

export default CourseSelectContainer;
