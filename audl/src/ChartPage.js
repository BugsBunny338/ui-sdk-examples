import React, { Component } from 'react';
import { AfmComponents } from '@gooddata/react-components';
import Playground from './components/Playground';

const {
  BarChart,
  LineChart,
  ColumnChart,
} = AfmComponents;

class ChartPage extends Component {
  render() {
    const ATTR_REGION = 'label.owner.region';
    const ATTR_EL_REGION_EAST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1225';
    const ATTR_EL_REGION_WEST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1237';

    const ATTR_DEPARTMENT = 'label.owner.department';
    const ATTR_EL_DEPARTMENT_DIRECT = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1226';
    const ATTR_EL_DEPARTMENT_INSIDE = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1234';

    const scope = {
      BarChart,
      LineChart,
      ColumnChart,
      ATTR_REGION,
      ATTR_EL_REGION_EAST,
      ATTR_EL_REGION_WEST,
      ATTR_DEPARTMENT,
      ATTR_EL_DEPARTMENT_DIRECT,
      ATTR_EL_DEPARTMENT_INSIDE,
    };

    const scopeDesc = `
// Following are the available components in scope for this playground:

<BarChart />
<LineChart />
<ColumnChart />`;

    return (
      <div className="mainscreen">
        <Playground
          title="Chart"
          scope={scope}
          scopeDesc={scopeDesc}
          code={`render(
  <BarChart
    projectId="fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk"
    afm={{
      measures: [{
        localIdentifier: 'm1',
        definition: {
          measure: {
            item: {
              uri: '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/14636'
            }
          }
        }
      }],
      attributes: [{
        localIdentifier: 'a1',
        displayForm: {
          uri: '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1252'
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
