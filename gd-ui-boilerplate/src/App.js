import React, { useState, useEffect } from 'react';
import { Headline, ColumnChart, Execute, Visualization, Model } from '@gooddata/react-components';
import C from './catalog';
import config from './config';
import AttributeDropdown from './components/AttributeDropdown';
import CustomBarChart from './components/CustomBarChart';
import { loginMachinery } from './utils';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    loginMachinery({ ...config }, () => setIsLogged(true));
  });

  if (!isLogged) {
    return <span>Checking your credentials, please wait…</span>;
  }

  return (
    <div className="App">
      <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
        <AttributeDropdown
          {...config}
          placeholder="Filter devices"
          attribute={C.attributeDisplayForm('Device Type')}
          filters={filters}
          updateFilters={setFilters}
        />
      </div>
      <div>
        Spend: <Headline
          {...config}
          filters={filters}
          primaryMeasure={Model.measure(C.measure('Spend'))}
        />
        <br />
        <br />
      </div>
      <div style={{ height: 400 }}>
        <Visualization
          {...config}
          filters={filters}
          identifier="aau4chNcel8b"
        />
      </div>
      <div style={{ height: 400 }}>
        <ColumnChart
          {...config}
          filters={filters}
          measures={[
            Model.measure(C.measure('Spend % of Whole')),
            Model.measure(C.measure('Actions % of Whole')),
            Model.measure(C.measure('Clicks % of Whole'))
          ]}
          viewBy={Model.attribute(C.attributeDisplayForm('Device Type'))}
          config={{
            // colors: ['rgb(241,135,2)', 'rgb(107,192,216)', 'rgb(133,209,188)'],
            stackMeasures: true,
            stackMeasuresToPercent: true
          }}
        />
      </div>
      <div style={{ height: 400 }}>
        <Execute
          {...config}
          afm={{
            measures: [{
              localIdentifier: 'm1',
              definition: {
                measure: {
                  item: {
                    identifier: C.measure('Spend % of Whole')
                  }
                }
              }
            }],
            attributes: [{
              localIdentifier: 'a1',
              displayForm: {
                identifier: C.attributeDisplayForm('Device Type')
              }
            }],
            filters
          }}
          children={CustomBarChart}
        />
      </div>
    </div>
  );
}

export default App;
