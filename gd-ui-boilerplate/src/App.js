import React, { Component } from 'react';
import { Headline, ColumnChart, Execute } from './components/afmConnected';
import { Visualization, Model } from '@gooddata/react-components';
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
  }

  componentDidMount() {
    loginMachinery({ ...config }, () => this.setState({ isLogged: true }) );
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
            attribute={C.attributeDisplayForm('Location City')}
            placeholder="Filter cities"
          />
        </div>
        <div>
          # of Location City: <Headline
            {...config}
            filterGroup={FG_MAIN}
            primaryMeasure={Model.measure(C.measure('# Location City'))}
          />
          <br />
          <br />
        </div>
        <div style={{ height: 400 }}>
          <Visualization
            {...config}
            identifier="aaDKNE91d2wl"
          />
        </div>
        <div style={{ height: 400 }}>
          <Visualization
            {...config}
            identifier="aaTJJW6adsaj"
          />
        </div>
        <div style={{ height: 400 }}>
          <ColumnChart
            {...config}
            filterGroup={FG_MAIN}
            measures={[Model.measure(C.measure('# Checks'))]}
            viewBy={Model.attribute(C.attributeDisplayForm('Location City'))}
            stackBy={Model.attribute(C.attributeDisplayForm('Location Name'))}
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
                      identifier: C.measure('# Checks')
                    }
                  }
                }
              }],
              attributes: [{
                localIdentifier: 'a1',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location City')
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

export default App;
