import React, { Component } from 'react';
import { Field } from 'redux-form';
import Core from '../coursesignup/api/core.json';
import Electives from '../coursesignup/api/electives.json';
import { renderSelectField } from './Field';

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
  };

  renderDepartmentSelect = () => {
    return (
      <Field name="department" type="select" component={renderSelectField} label="Department" onChange={this.onSelectDepartment}>
        <option value="">Which department?</option>
        <option value="core">NodeSchool: Core</option>
        <option value="electives">NodeSchool: Electives</option>
      </Field>
    );
  };

  renderCourseSelect = () => {
    return (
      <Field name="course" type="select" component={renderSelectField} label="Course" disabled={this.state.courses.length === 0}>
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
      </Field>
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
