// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import GettingStarted from './GettingStarted';
import DocumentManagement from './DocumentManagement';
import NavigationHomepage from './NavigationHomepage';
import SideBySideComparison from './SideBySideComparison';
import FilterDate from './FilterDate';
import Empty from './Empty';

import './index.css';
import './content.css';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route exact path="/" component={GettingStarted} />
        <Route path="/document-management" component={DocumentManagement} />
        <Route path="/empty" component={Empty} />
        <Route path="/organisms/navigation-homepage" component={NavigationHomepage} />
        <Route path="/organisms/side-by-side-comparison" component={SideBySideComparison} />
        <Route path="/molecules/filter-date" component={FilterDate} />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
