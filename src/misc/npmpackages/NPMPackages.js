import React, { Component } from 'react';
import tiny from '@lmeikle/my-tiny-npm-package';

class NPMPackages extends Component {
  componentDidMount() {}

  render() {
    let v = tiny('So much space!');

    return (
      <div>
        <h1>Trying out NPMPackages</h1>
        <hr />
        {v}
      </div>
    );
  }
}
export default NPMPackages;
