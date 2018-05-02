import React, { Component } from 'react';
import './content.css';


class GettingStarted extends Component {
  render() {
    return (
      <div className="mainscreen">
        <h1>Getting Started</h1>
        <p>This library helps you to design and create thoughtful, data-driven applications composed of different building blocks inspired by <a href="link to frost">atomic design</a>.</p>
        <h2>Get started right now?</h2>
        <p>Starting from already existing <a href="">solution</a> will help you to get a fast track towards an app solving a specific business problem. If none of the existing solutions works for you, start from the <a href="">default boilerplate</a> and use build the app bottom-up from <a href="">organisms</a>, <a href="">molecules</a> and <a href="">atoms</a>.</p>
        <h2>Building Data-driven Apps with Atomic Design</h2>
        <p>Atomic design is a helpful design system to help us think about interfaces both a cohesive whole and a collection of parts at the same time. It decomposes user interfaces to building blocks of different granularities:</p>
        <div className="horizontalBlock">
          <div className="shadowbox">
            {/* <div className="ratiowrapper4to3"><img className="icon" src={require('./static/icon-atom.png')} /></div> */}
            <div className="shadowBoxTitle">
              <b>Atoms</b> are the basic building blocks of all matter (and the interface). Each atom has distinct properties, and they can’t be broken down further without losing their meaning.
              <h5>Examples:</h5>
              <ul className="examples">
                <li><a href="">KPI</a></li>
                <li><a href="">Label</a></li>
              </ul>
            </div>
          </div>
          <div className="shadowbox">
            {/* <div className="ratiowrapper4to3"><img className="icon" src={require('./static/icon-molecule.png')} /></div> */}
            <div className="shadowBoxTitle">
              <b>Molecules</b> are groups of two or more atoms held together by (chemical) bonds. These combinations of atoms take on their own unique properties, and become more tangible and operational than atoms.
              <h5>Examples:</h5>
              <ul className="examples">
                <li><a href="">Barchart</a></li>
                <li><a href="">Date filter</a></li>
              </ul>
            </div>
          </div>
          <div className="shadowbox">
            {/* <div className="ratiowrapper4to3"><img className="icon" src={require('./static/icon-organism.png')} /></div> */}
            <div className="shadowBoxTitle">
              <b>Organisms</b> are assemblies of molecules functioning together as a unit. These relatively complex structures can range from single-celled organisms all the way up to incredibly sophisticated organisms like human beings.
              <h5>Examples:</h5>
              <ul className="examples">
                <li><a href="">Left navigation</a></li>
                <li><a href="" onClick={() => (this.props.onNavigate('SideBySide'))}>Side-by-side comparison</a></li>
              </ul>
            </div>
          </div>
          <div className="shadowbox">
            {/* <div className="ratiowrapper4to3"><img className="icon" src={require('./static/icon-solution.png')} /></div> */}
            <div className="shadowBoxTitle">
              <b>Solutions</b> are assemblies of organisms functioning together to solve a given business problem for one particular client. Solution contains everything from smooth user experience to brilliant visual design.
              <h5>Examples:</h5>
              <ul className="examples">
                <li><a href="">Document Management</a></li>
                <li><a href="">Traffic Analysis</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="horizontalBlock">
          <div className="shadowbox centeredTextBlock">
            <a href="">
              {/* <img className="icon" src={require('./static/icon-interactions.png')} /> */}
               Interactions
            </a> such as drills, filtering and custom events tie individual blocks together to make them work.
          </div>
        </div>
      </div>
    );
  }
}

export default GettingStarted;
