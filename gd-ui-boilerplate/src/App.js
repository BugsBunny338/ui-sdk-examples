import React, { useState, useEffect } from 'react';
import { Headline, ColumnChart, Execute, Visualization, Model, DateFilter, DateFilterHelpers } from '@gooddata/react-components';
import C from './catalog';
import config from './config';
import AttributeDropdown from './components/AttributeDropdown';
import CustomBarChart from './components/CustomBarChart';
import { loginMachinery } from './utils';

import '@gooddata/react-components/styles/css/main.css';
import '@gooddata/react-components/styles/css/dateFilter.css';
import './App.css';

const dateFilterOptions = {
  allTime: {
    localIdentifier: 'ALL_TIME',
    type: 'allTime',
    name: '',
    visible: true,
  },
  absoluteForm: {
    localIdentifier: 'ABSOLUTE_FORM',
    type: 'absoluteForm',
    from: '2017-01-01',
    to: '2017-06-30',
    name: '',
    visible: true,
  },
  absolutePreset: [{
    from: '2017-01-01',
    to: '2017-01-01',
    name: 'First day of 2017',
    localIdentifier: 'first-day-of-2017',
    visible: true,
    type: 'absolutePreset',
  }, {
    from: '2017-01-01',
    to: '2017-01-07',
    name: 'First week of 2017',
    localIdentifier: 'first-week-of-2017',
    visible: true,
    type: 'absolutePreset',
  }]
};

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [dateFilter, setDateFilter] = useState(dateFilterOptions.allTime);
  const [attributeFilter, setAtributeFilter] = useState(null);

  useEffect(() => {
    loginMachinery({ ...config }, () => setIsLogged(true));
  });

  if (!isLogged) {
    return <span>Checking your credentials, please wait…</span>;
  }

  const filters = [
    DateFilterHelpers.mapOptionToAfm(dateFilter, {
      identifier: C.dateDataSet('Date (Date)')
    }),
    attributeFilter
  ].filter(filter => !!filter);

  return (
    <div className="App">
      <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
        <AttributeDropdown
          {...config}
          placeholder="Filter cities"
          attribute={C.attributeDisplayForm('Location City')}
          filter={attributeFilter}
          updateFilter={setAtributeFilter}
        />
      </div>
      <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
        <DateFilter
          selectedFilterOption={dateFilter}
          filterOptions={dateFilterOptions}
          onApply={setDateFilter}
          // TODO following should not be required
          dateFilterMode="active"
          excludeCurrentPeriod={false}
          availableGranularities={['GDC.time.month', 'GDC.time.year', 'GDC.time.quarter', 'GDC.time.date']}
        />
      </div>
      <div>
        # of Location City: <Headline
          {...config}
          filters={filters}
          primaryMeasure={Model.measure(C.measure('# Location City'))}
        />
        <br />
        <br />
      </div>
      <div style={{ height: 400 }}>
        <Visualization
          {...config}
          filters={filters}
          identifier="aby6oS6DbpFX"
        />
      </div>
      <div style={{ height: 400 }}>
        <ColumnChart
          {...config}
          filters={filters}
          measures={[Model.measure(C.measure('# Checks'))]}
          viewBy={Model.attribute(C.attributeDisplayForm('Location City'))}
          stackBy={Model.attribute(C.attributeDisplayForm('Location Name'))}
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
