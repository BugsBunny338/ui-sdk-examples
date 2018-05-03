import React, { Component } from 'react';
import { AfmComponents } from '@gooddata/react-components';
import Playground from './components/Playground';

import {
  PROJECT_ID,
  M_NUM_OF_ACTIVITIES,
  M_NUM_OF_OPPORTUNITIES,
  M_NUM_OF_WON_OPPS,
} from './constants/catalog';

const {
  BarChart,
  LineChart,
  ColumnChart,
} = AfmComponents;

class ChartPage extends Component {
  render() {
    const COLORS = [
      'rgba(195, 49, 73, 1)',
      'rgba(168, 194, 86, 1)',
      'rgba(243, 217, 177, 1)',
      'rgba(194, 153, 121, 1)',
      'rgba(162, 37, 34, 1)',
    ];

    const NUMBER_OF_ACTIVITIES = M_NUM_OF_ACTIVITIES;
    const NUMBER_OF_OPPORTUNITIES = M_NUM_OF_OPPORTUNITIES;
    const NUMBER_OF_WON_OPPS = M_NUM_OF_WON_OPPS;

    const scope = {
      BarChart,
      LineChart,
      ColumnChart,
      NUMBER_OF_ACTIVITIES,
      NUMBER_OF_OPPORTUNITIES,
      NUMBER_OF_WON_OPPS,
      COLORS,
    };

    const scopeDesc = `
// Following are the available components in scope for this playground:

import { AfmComponents } from '@gooddata/react-components';
const { BarChart, LineChart, ColumnChart } = AfmComponents;

const NUMBER_OF_ACTIVITIES = '${M_NUM_OF_ACTIVITIES}';
const NUMBER_OF_OPPORTUNITIES = '${M_NUM_OF_OPPORTUNITIES}';
const NUMBER_OF_WON_OPPS = '${M_NUM_OF_WON_OPPS}';

const COLORS = [
  'rgba(195, 49, 73, 1)',
  'rgba(168, 194, 86, 1)',
  'rgba(243, 217, 177, 1)',
  'rgba(194, 153, 121, 1)',
  'rgba(162, 37, 34, 1)'
];`;

    return (
      <div className="mainscreen">
        <Playground
          title="Chart"
          scope={scope}
          scopeDesc={scopeDesc}
          code={`render(
  <ColumnChart
    projectId="${PROJECT_ID}"
    config={{ colors: COLORS }}
    afm={{
      measures: [{
        localIdentifier: 'm1',
        definition: {
          measure: {
            item: {
              identifier: NUMBER_OF_ACTIVITIES
            }
          }
        }
      }, {
        localIdentifier: 'm2',
        definition: {
          measure: {
            item: {
              identifier: NUMBER_OF_OPPORTUNITIES
            }
          }
        }
      }]
    }}
  />
)`}
          livePreviewClassname="chart"
        />
      </div>
    );
  }
}

export default ChartPage;
