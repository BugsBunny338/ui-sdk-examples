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

    const viz = vizuly2.viz.NestedBarChart("#viz_container"); // eslint-disable-line

    const dataField = "Federal";

    // const data = [{
    //   key: 'Pensions',
    //   values: [{
    //     key: 'Old age',
    //     values: [{
    //       key: 'Federal employee retirement and disability (602)',
    //       values: [{
    //         key: 'Special Benefits',
    //         values: [{
    //           Category: 'Special Benefits',
    //           Level1: 'Pensions',
    //           Level2: 'Old age',
    //           Level3: 'Federal employee retirement and disability (602)',
    //           Level4: 'Special Benefits',
    //           Federal: '0.38'
    //         }]
    //       }]
    //     }]
    //   }]
    // }];

    updateViz(data); // eslint-disable-line

    function updateViz(data) {
      data = data.slice(0,19);
      viz.data(data)
      .children(function (d) { return (d.values) ? d.values.filter(function (a) { return Number(a.rollup[dataField]) > 0 }) : null; })
      .key( function (d,i) { return getKey(d, i); })
      .depth(function (d) { return d.rollup.depth })
      .margin({left:'25%', top: '5%', bottom:'10%', right:100})
      .width('100%')
      .height('100%')
      .x(function (d, i)  { return d.rollup[dataField] })
      .y(function (d, i)  { return getKey(d, i); })
      .minBarWidth(10)
      .seriesLabel( function (d,i) { return d.key })
      .maxDrillDepth(4)
      .yTickFormat(trimLabel)
      .labelFormat(function (d) { return '$' + d3.format('.2f')(d) + ' M'; }) // eslint-disable-line
      .updateOnResize(true)
      .update();
    }

    function getKey(d, i) {
      return (d.key && d.key != "") ? d.key : d.Level4;
    }

    function trimLabel(d) {

      if (d.length > 20) {
        return d.substr(0,20) + '...';
      }
      else {
        return d;
      }
    }
  });

  if (!isLogged) {
    return <span>Checking your credentials, please wait…</span>;
  }

  return (
    <div className="App">
      <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
        <AttributeDropdown
          {...config}
          placeholder="Filter cities"
          attribute={C.attributeDisplayForm('Location City')}
          filters={filters}
          updateFilters={setFilters}
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
      <div className="container" style={{ width: '100%' }}>
        <div style={{ margin: '0px auto', marginTop: 50, marginBottom: 10, width: 300, textAlign: 'center' }}>US Federal State and Local Budgets</div>
        <div id="viz_container" className="z-depth-3" style={{ width: 800, height: 600, borderRadius: 10 }}></div>
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
