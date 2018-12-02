import React, { Component } from 'react';
import { Visualization, Table } from '@gooddata/react-components';
import config from './config';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: []
    };

    this.setFilters = this.setFilters.bind(this);
  }

  setFilters() {
    this.setState({
      filters: [{
        positiveAttributeFilter: {
          displayForm: {
            uri: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2209'
          },
          in: ['/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2208/elements?id=6340103']
        }
      }]
    });
  }

  render() {
    const { filters } = this.state;

    console.log(filters);

    return (
      <div className="App">
        <button onClick={this.setFilters}>set filters</button>
        <div style={{ height: 400 }}>
          <Visualization
            {...config}
            identifier="act2Khypdnz6"
            filters={filters}
          />
        </div>
        <div style={{ height: 400 }}>
          <Table
            {...config}
            attributes={[{
              visualizationAttribute: {
                displayForm: {
                  uri: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2209'
                },
                localIdentifier: 'a1'
              }
            }]}
            filters={filters}
          />
        </div>
      </div>
    );
  }
}

export default App;
