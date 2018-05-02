import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';
import Playground from './components/Playground';


class KpiPage extends Component {
  render() {
    const ATTR_REGION = 'label.owner.region';
    const ATTR_EL_REGION_EAST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1225';
    const ATTR_EL_REGION_WEST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1237';

    const ATTR_DEPARTMENT = 'label.owner.department';
    const ATTR_EL_DEPARTMENT_DIRECT = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1226';
    const ATTR_EL_DEPARTMENT_INSIDE = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1234';

    const scope = {
      Kpi,
      ATTR_REGION,
      ATTR_EL_REGION_EAST,
      ATTR_EL_REGION_WEST,
      ATTR_DEPARTMENT,
      ATTR_EL_DEPARTMENT_DIRECT,
      ATTR_EL_DEPARTMENT_INSIDE,
    };

    const scopeDesc = `
// Following are the constants in scope for this playground:

const ATTR_REGION = 'label.owner.region';
const ATTR_EL_REGION_EAST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1225';
const ATTR_EL_REGION_WEST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1237';

const ATTR_DEPARTMENT = 'label.owner.department';
const ATTR_EL_DEPARTMENT_DIRECT = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1226';
const ATTR_EL_DEPARTMENT_INSIDE = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1234';`;

    return (
      <div className="mainscreen">
        <Playground
          title="Kpi"
          scope={scope}
          scopeDesc={scopeDesc}
          code={`render(
  <Kpi
    projectId="fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk"
    measure="abf0d42yaIkL"
    format="$#,##0"
    filters={[{
      positiveAttributeFilter: {
        displayForm: {
          identifier: ATTR_DEPARTMENT
        },
        in: [ATTR_EL_DEPARTMENT_DIRECT]
      }
    }]}
    LoadingComponent={() => <span>Loading…</span>}
  />
)`}
        />
      </div>
    );
  }
}

export default KpiPage;
