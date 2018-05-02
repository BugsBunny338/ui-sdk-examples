import React, { Component } from 'react';
import './content.css';

const navHome1 = require('./static/organisms_navigation-homepage/navHome-ex1.png');
const navHome2 = require('./static/organisms_navigation-homepage/navHome-ex2.png');
const navHome3 = require('./static/organisms_navigation-homepage/navHome-ex3.png');

class NavigationHome extends Component {
  render() {
    return (
      <div className="mainscreen">
        <h1>Navigation: Homepage</h1>
        <p>Homepage with shortcuts to important pages in the application.</p>
        <h2>Examples</h2>
        <div className="horizontalBlock">
          <div className="shadowbox">
            <img className="cover" src={navHome1} alt="nav home" />
            <div className="shadowBoxTitle">
              <h3>SAP</h3>
              <div className="caption">Compared role being hired with other potential roles.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            <img className="cover" src={navHome2} alt="nav home 2" />
            <div className="shadowBoxTitle">
              <h3>MasterCard</h3>
              <div className="caption">Compare active credit card with other options.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            <img className="cover" src={navHome3} alt="nav home 3" />
            <div className="shadowBoxTitle">
              <h3>Ad form</h3>
              <div className="caption">Compare performance of specific pieces of content.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
        </div>
        <h2>Best practices</h2>
        <p>
          <b>Do&#39;s:</b> This layout is responsive by definition. Make use of it.
        </p>
        <p>
          <b>Dont&#39;s: </b> Never use in other places than homepage, it will only confuse the user. Don&#39;t use this layout if the app has one screen / page significantly more important than the others.
        </p>
      </div>
    );
  }
}

export default NavigationHome;
