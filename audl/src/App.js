// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import Navigation from './Navigation';
import './App.css';

const logo = require('./static/logo.png');

const App = () => (
  <div className="App">
    <div className="ContentContainer">
      <div className="LeftNavContainer">
        <div className="LeftNavBlock LeftNavLogo">
          <img src={logo} alt="GoodData Logo" />
          <h4>App UX Design Library</h4>
        </div>
        <Navigation />
      </div>
      <div className="Content">
        Content
      </div>
    </div>
  </div>
);

export default App;
