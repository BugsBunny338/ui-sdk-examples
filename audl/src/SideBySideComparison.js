import React, { Component } from 'react';

const sideBySide1 = require('./static/organisms_side-by-side-comparison/sideBySide-ex1.png');
const sideBySide2 = require('./static/organisms_side-by-side-comparison/sideBySide-ex2.png');
const sideBySide3 = require('./static/organisms_side-by-side-comparison/sideBySide-ex3.png');
const mockupCodeDatePicker = require('./static/molecules/mockup-code-date-picker.png');

class SideBySide extends Component {
  render() {
    return (
      <div className="mainscreen">
        <h1>Side-by-side Comparison</h1>
        <p>If you would like to show side-by-side comparison of two and more elements. It can be performance comparison of some company products, locations, employees etc..</p>
        <h2>Examples</h2>
        <div className="horizontalBlock">
          <div className="shadowbox">
            <img className="cover" src={sideBySide1} alt="side by side 1" />
            <div className="shadowBoxTitle">
              <h3>SAP</h3>
              <div className="caption">Compared role being hired with other potential roles.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            <img className="cover" src={sideBySide2} alt="side by side 2" />
            <div className="shadowBoxTitle">
              <h3>MasterCard</h3>
              <div className="caption">Compare active credit card with other options.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            <img className="cover" src={sideBySide3} alt="side by side 3" />
            <div className="shadowBoxTitle">
              <h3>Ad form</h3>
              <div className="caption">Compare performance of specific pieces of content.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
        </div>
        <h2>Best practices</h2>
        <p>Be cautious about how this will play with the other navigation elements. This should be a quick signposting to key pages rather than duplication of the main navigation.</p>
        <p><b>Do&#39;s:</b>  Clearly and visibly separate the &#34;columns&#34;. Enable the user to configure what columns are shown (unless low &amp; determined number of them is available.)</p>
        <p><b>Dont&#39;s: </b> Include many columns with all potential items user may need.</p>
        <h2>Source code</h2>
        <img src={mockupCodeDatePicker} alt="mockup code date picker" />
      </div>
    );
  }
}

export default SideBySide;
