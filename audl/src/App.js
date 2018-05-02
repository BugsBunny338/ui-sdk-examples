// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react';

import './App.css';

const App = () => (
  <div className="App">
    <h2>Better measure switcher</h2>
    <p>
      This example uses Redux to propagate the selected measure
      from a drop-down to the <tt>Kpi</tt> component.
    </p>
    <p>
      Unlike the stateful component demo, this Redux example only
      includes the more advanced demo with loading indicator
      and error handling.
    </p>
    <p>
      The following component shows the measure name next to the
      computed value. Since the computed value is retrieved from
      GoodData API with a small delay, we use
      the <tt>onLoadingChanged</tt> method to display a loading
      indicator and to ensure the measure name is changed after the
      proper value is loaded.
    </p>
  </div>
);

export default App;
