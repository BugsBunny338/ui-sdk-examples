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
import { loginMachinery } from './utils';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    };

    this.handleIncomingCityFilterChange = this.handleIncomingCityFilterChange.bind(this);
    this.handleOutcomingCityFilterChange = this.handleOutcomingCityFilterChange.bind(this);
  }

  componentDidMount() {
    loginMachinery({ ...config }, () => this.setState({ isLogged: true }) );

    window.addEventListener('message', this.handleIncomingCityFilterChange);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleIncomingCityFilterChange);
  }

  handleIncomingCityFilterChange(message) {
    // catching postMessages when embedded into pixel-perfect dashboard
    let data;

    if (message.data) {
      try {
        data = JSON.parse(message.data);
      } catch(e) {
        data = message.data;
      }
    }

    if (data && data.gdc && data.gdc.name === 'filter.value.changed') {
      const values = data.gdc.data;

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
    const { isLogged } = this.state;

    if (!isLogged) {
      return <span>Checking your credentials, please wait…</span>;
    }

    return (
      <div className="App">
        <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
          <AttributeDropdown
            {...config}
            filterGroup={FG_MAIN}
            attribute={C.attributeDisplayForm('Category')}
            placeholder="Category"
            onChange={this.handleOutcomingCityFilterChange}
          />
        </div>
        <div>
          $ Ab Cost: <Kpi
            {...config}
            filterGroup={FG_MAIN}
            measure={C.measure('$ Ab Cost')}
          />
          <br />
          <br />
        </div>
        <div style={{ height: 400 }}>
          <Visualization
            {...config}
            filterGroup={FG_MAIN}
            identifier={C.visualization('$ Ab Cost by Category (Pie by Jiri)')}
            config={{
              colorPalette: [{
                guid: '01',
                fill: { r: 255, g: 255, b: 60 }
              }, {
                guid: '02',
                fill: { r: 170, g: 108, b: 57 }
              }, {
                guid: '03',
                fill: { r: 34, g: 102, b: 102 }
              }, {
                guid: '04',
                fill: { r: 45, g: 136, b: 45 }
              }, {
                guid: '05',
                fill: { r: 212, g: 106, b: 106 }
              }, {
                guid: '06',
                fill: { r: 212, g: 154, b: 106 }
              }, {
                guid: '07',
                fill: { r: 64, g: 127, b: 127 }
              }, {
                guid: '08',
                fill: { r: 85, g: 170, b: 85 }
              }, {
                guid: '09',
                fill: { r: 85, g: 0, b: 0 }
              }],
              colorMapping: [{
                  predicate: (headerItem) =>
                    headerItem.attributeHeaderItem && headerItem.attributeHeaderItem.name === 'Admin',
                  color: {
                    type: 'guid',
                    value: '01'
                  }
              }, {
                  predicate: (headerItem) =>
                    headerItem.attributeHeaderItem && headerItem.attributeHeaderItem.name === 'App-Service',
                  color: {
                    type: 'guid',
                    value: '02'
                  }
              }, {
                  predicate: (headerItem) =>
                    headerItem.attributeHeaderItem && headerItem.attributeHeaderItem.uri === '/gdc/md/zuyu5r42fr85ekgo982t8px41we1baef/obj/234/elements?id=15',
                  color: {
                    type: 'guid',
                    value: '03'
                  }
              }]
            }}
          />
        </div>
        <div style={{ height: 400 }}>
          <Visualization
            {...config}
            filterGroup={FG_MAIN}
            config={{
              legend: {
                enabled: true,
                position: 'right'
              }
            }}
            identifier={C.visualization('Category/RT Costs (Bar by Jiri)')}
          />
        </div>
        <div style={{ height: 400 }}>
          <ColumnChart
            {...config}
            filterGroup={FG_MAIN}
            measures={[Model.measure(C.measure('$ Ab Cost'))]}
            viewBy={Model.attribute(C.attributeDisplayForm('Category'))}
            stackBy={Model.attribute(C.attributeDisplayForm('Resource Type'))}
            config={{
              legend: {
                enabled: true,
                position: 'right'
              }
            }}
          />
        </div>
        <div style={{ height: 400 }}>
          <Execute
            {...config}
            filterGroup={FG_MAIN}
            afm={{
              measures: [{
                localIdentifier: 'm1',
                definition: {
                  measure: {
                    item: {
                      identifier: C.measure('$ Ab Cost')
                    }
                  }
                }
              }],
              attributes: [{
                localIdentifier: 'a1',
                displayForm: {
                  identifier: C.attributeDisplayForm('Category')
                }
              }]
            }}
            children={CustomBarChart}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  cityFilterChanged: (values) => {
    if (values[0].value === 'GDC_SELECT_ALL') {
      dispatch(AfmActions.removeAttributeFilter(
        FG_MAIN,
        C.attributeDisplayForm('Location City')
      ));
    } else {
      dispatch(AfmActions.updatePositiveAttributeFilter(
        FG_MAIN,
        C.attributeDisplayForm('Location City'),
        values.map(value => value.elementUri)
      ));
    }
  }
});

export default connect(null, mapDispatchToProps)(App);
