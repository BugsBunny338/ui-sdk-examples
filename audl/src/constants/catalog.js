import { CatalogHelper } from '@gooddata/react-components';
import catalogJson from './catalog.json';

const C = new CatalogHelper(catalogJson);

export const PROJECT_ID = catalogJson.projectId;

export const M_NUM_OF_ACTIVITIES = C.metric('# of Activities'); // acKjadJIgZUN
export const M_NUM_OF_OPPORTUNITIES = C.metric('# of Opportunities'); // afdV48ABh8CN
export const M_NUM_OF_WON_OPPS = C.metric('# of Won Opps.'); // abf0d42yaIkL

export const A_ACTIVITY_TYPE = C.attributeDisplayForm('Activity Type'); // label.activity.type

export const A_EL_ACTIVITY_TYPE_EMAIL = '/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/941/elements?id=4';
export const A_EL_ACTIVITY_TYPE_IN_PERSON_MEETING = '/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/941/elements?id=6';
export const A_EL_ACTIVITY_TYPE_PHONE_CALL = '/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/941/elements?id=5';
export const A_EL_ACTIVITY_TYPE_WEB_MEETING = '/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/941/elements?id=3';
