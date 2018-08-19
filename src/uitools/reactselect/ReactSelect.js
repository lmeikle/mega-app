import React, { Component } from 'react';
import Select from 'react-select';
import GroupedSelect from './groupedselect/GroupedSelect';
import MultiSelect from './multiselect/MultiSelect';
import FixedOptions from './fixedoptions/FixedOptions';
import './ReactSelect.css';

const SimpleSelect = () => {
  const options = [{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' }, { value: 'vanilla', label: 'Vanilla' }];

  return <Select options={options} />;
};

export default class ReactSelect extends Component {
  render() {
    return (
      <div>
        <div className="react-select-title">ReactSelect</div>
        <h3>Simple Select</h3>
        <SimpleSelect />
        <h3>Grouped Select</h3>
        <GroupedSelect />
        <h3>Multi Select</h3>
        <MultiSelect />
        <h3>Fixed Options</h3>
        <FixedOptions />
      </div>
    );
  }
}
