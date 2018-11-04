import React, { Component } from 'react';
import EdiTextLib from 'react-editext';
import './EdiText.css';

export default class EdiText extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val);
  };
  render() {
    return (
      <div className="edi-text-container">
        <div className="edi-text-title">EdiText Example</div>
        <EdiTextLib type="text" value="What is real? How do you define real?" onSave={this.onSave} />
      </div>
    );
  }
}
