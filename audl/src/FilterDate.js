import React, { Component } from 'react';

const mockupDatePicker = require('./static/molecules/mockup-date-picker.png');
const mockupCodeDatePicker = require('./static/molecules/mockup-code-date-picker.png');

class MoleculeDateFilter extends Component {
  render() {
    return (
      <div className="mainscreen">
        <h1>Date filter</h1>
        <p>Simple date filter consting of two textfields filtering the visualisatisons / blocks</p>
        <img src={mockupDatePicker} witdh="300px" alt="mockup date picker" />
        <h2>Source code</h2>
        <img src={mockupCodeDatePicker} alt="mockup code date picker" />
      </div>
    );
  }
}

export default MoleculeDateFilter;
