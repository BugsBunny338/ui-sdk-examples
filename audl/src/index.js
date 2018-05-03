// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import gooddata from '@gooddata/gooddata-js';
import '@gooddata/react-components/styles/css/main.css';

import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import GettingStarted from './GettingStarted';
import DocumentManagement from './DocumentManagement';
import NavigationHomepage from './NavigationHomepage';
import SideBySideComparison from './SideBySideComparison';
import Chart from './ChartPage';
import FilterDate from './FilterDate';
import Kpi from './Kpi';
import Empty from './Empty';

import './index.css';
import './content.css';


window.gooddata = gooddata;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={GettingStarted} />
        <Route path="/document-management" component={DocumentManagement} />
        <Route path="/empty" component={Empty} />
        <Route path="/organisms/navigation-homepage" component={NavigationHomepage} />
        <Route path="/organisms/side-by-side-comparison" component={SideBySideComparison} />
        <Route path="/molecules/chart" component={Chart} />
        <Route path="/molecules/filter-date" component={FilterDate} />
        <Route path="/atoms/kpi" component={Kpi} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
