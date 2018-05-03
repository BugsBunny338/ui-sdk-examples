import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';
import Playground from './components/Playground';

import {
  PROJECT_ID,
  M_NUM_OF_ACTIVITIES,
  A_ACTIVITY_TYPE,
  A_EL_ACTIVITY_TYPE_EMAIL,
  A_EL_ACTIVITY_TYPE_IN_PERSON_MEETING,
  A_EL_ACTIVITY_TYPE_PHONE_CALL,
  A_EL_ACTIVITY_TYPE_WEB_MEETING,
} from './constants/catalog';


class KpiPage extends Component {
  render() {
    const NUMBER_OF_ACTIVITIES = M_NUM_OF_ACTIVITIES;
    const ACTIVITY_TYPE = A_ACTIVITY_TYPE;
    const ACTIVITY_TYPE_EMAIL = A_EL_ACTIVITY_TYPE_EMAIL;
    const ACTIVITY_TYPE_IN_PERSON_MEETING = A_EL_ACTIVITY_TYPE_IN_PERSON_MEETING;
    const ACTIVITY_TYPE_PHONECALL = A_EL_ACTIVITY_TYPE_PHONE_CALL;
    const ACTIVITY_TYPE_WEB_MEETING = A_EL_ACTIVITY_TYPE_WEB_MEETING;

    const scope = {
      Kpi,
      NUMBER_OF_ACTIVITIES,
      ACTIVITY_TYPE,
      ACTIVITY_TYPE_EMAIL,
      ACTIVITY_TYPE_IN_PERSON_MEETING,
      ACTIVITY_TYPE_PHONECALL,
      ACTIVITY_TYPE_WEB_MEETING,
    };

    const scopeDesc = `
// Following are the constants in scope for this play ground:

const NUMBER_OF_ACTIVITIES            = '${M_NUM_OF_ACTIVITIES}';
const ACTIVITY_TYPE                   = '${A_ACTIVITY_TYPE}';
const ACTIVITY_TYPE_EMAIL             = '${A_EL_ACTIVITY_TYPE_EMAIL}';
const ACTIVITY_TYPE_IN_PERSON_MEETING = '${A_EL_ACTIVITY_TYPE_IN_PERSON_MEETING}';
const ACTIVITY_TYPE_PHONECALL         = '${A_EL_ACTIVITY_TYPE_PHONE_CALL}';
const ACTIVITY_TYPE_WEB_MEETING       = '${A_EL_ACTIVITY_TYPE_WEB_MEETING}';`;

    return (
      <div className="mainscreen">
        <Playground
          title="Kpi"
          scope={scope}
          scopeDesc={scopeDesc}
          code={`render(
  <Kpi
    projectId="${PROJECT_ID}"
    measure={NUMBER_OF_ACTIVITIES}
    format="#,##0"
    filters={[{
      positiveAttributeFilter: {
        displayForm: {
          identifier: ACTIVITY_TYPE
        },
        in: [ACTIVITY_TYPE_EMAIL, ACTIVITY_TYPE_PHONECALL]
      }
    }]}
    LoadingComponent={() => <span>Loading…</span>}
  />
)`}
          livePreviewClassname="kpi"
        />
      </div>
    );
  }
}

export default KpiPage;
