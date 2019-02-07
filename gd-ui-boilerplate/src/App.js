import React, { Component } from 'react';
import { Kpi, ColumnChart, Execute, Visualization } from './components/afmConnected';
import { Model } from '@gooddata/react-components';
import { AfmActions } from '@gooddata/gdc-afm-connect';
import { connect } from 'react-redux';
import C from './catalog';
import config from './config';
import { FG_MAIN } from './constants';
import AttributeDropdown from './components/AttributeDropdown';
import CustomBarChart from './components/CustomBarChart';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleIncomingCityFilterChange = this.handleIncomingCityFilterChange.bind(this);
    this.handleOutcomingCityFilterChange = this.handleOutcomingCityFilterChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('message', this.handleIncomingCityFilterChange);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleIncomingCityFilterChange);
  }

  handleIncomingCityFilterChange(message) {
      // catching postMessages when embedded into pixel-perfect dashboard
      let data;

      console.log(message);

      if (message.data) {
        try {
          data = JSON.parse(message.data);
        } catch(e) {
          data = message.data;
        }
      }

      if (data && data.gdc && data.gdc.name === 'filter.value.changed') {
        const values = data.gdc.data;

        console.log(values);

        if (values.length && values[0].label === C.attributeDisplayForm('Location City')) {
          this.props.cityFilterChanged(values)
        }
      }
  }

  handleOutcomingCityFilterChange(payload) {
    const { label, values } = payload;

    var postMessageStructure = {
      gdc: {
        setFilterContext: values.length ? values.map(value => ({
          label,
          type: 'attribute',
          value: value.label
        })) : [{
          label,
          type: 'attribute',
          value: 'GDC_SELECT_ALL'
        }]
      }
    };

    window.parent.postMessage(JSON.stringify(postMessageStructure), '*');
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            const postMessageStructure = {
              gdc: {
                setFilterContext: [{
                  label: 'date.date.mmddyyyy',
                  type: 'date',
                  from: '2017-01-01',
                  to: '2017-12-31'
                }]
              }
            };

            window.parent.postMessage(JSON.stringify(postMessageStructure), '*');
          }}
        >Set date filter to Jan 1 2017 - Dec 31 2017</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  cityFilterChanged: (values) => dispatch(AfmActions.updatePositiveAttributeFilter(
    FG_MAIN,
    C.attributeDisplayForm('Location City'),
    values.map(value => value.elementUri)
  ))
});

export default connect(null, mapDispatchToProps)(App);
