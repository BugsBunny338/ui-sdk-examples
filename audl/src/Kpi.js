import React, { Component } from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import { Kpi } from '@gooddata/react-components';


class KpiPlayground extends Component {
  render() {
    const ATTR_REGION = 'label.owner.region';
    const ATTR_EL_REGION_EAST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1225';
    const ATTR_EL_REGION_WEST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1237';

    const ATTR_DEPARTMENT = 'label.owner.department';
    const ATTR_EL_DEPARTMENT_DIRECT = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1226';
    const ATTR_EL_DEPARTMENT_INSIDE = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1234';

    const LOADING_COMP_1 = () => <span>Loading...</span>;
    const LOADING_COMP_2 = () => <span>X</span>;

    const scope = {
      Kpi,
      ATTR_REGION,
      ATTR_EL_REGION_EAST,
      ATTR_EL_REGION_WEST,
      ATTR_DEPARTMENT,
      ATTR_EL_DEPARTMENT_DIRECT,
      ATTR_EL_DEPARTMENT_INSIDE,
      LOADING_COMP_1,
      LOADING_COMP_2,
    };

    return (
      <div className="mainscreen">
        <h1>Kpi</h1>
        <h2>Scope</h2>
        <pre><b>// Following are the constants in scope for this playground:</b><br /><br />
const ATTR_REGION = 'label.owner.region';<br />
const ATTR_EL_REGION_EAST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1225';<br />
const ATTR_EL_REGION_WEST = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1023/elements?id=1237';<br />
          <br />
const ATTR_DEPARTMENT = 'label.owner.department';<br />
const ATTR_EL_DEPARTMENT_DIRECT = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1226';<br />
const ATTR_EL_DEPARTMENT_INSIDE = '/gdc/md/fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk/obj/1026/elements?id=1234';<br />
        </pre>
        <LiveProvider
          noInline
          scope={scope}
          code={`render(
    <Kpi
        projectId="fqz4w13o7eyv8ndy1c1cnlyvb9srq2dk"
        measure="abf0d42yaIkL"
        filters={[{
            positiveAttributeFilter: {
                displayForm: {
                    identifier: ATTR_DEPARTMENT
                },
                in: [ATTR_EL_DEPARTMENT_DIRECT]
            }
        }]}
        LoadingComponent={LOADING_COMP_1}
    />
)`}
        >
          <h2>Source</h2>
          <LiveEditor />
          <LiveError />
          <h2>Preview</h2>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
}

export default KpiPlayground;
