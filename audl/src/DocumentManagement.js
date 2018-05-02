import React, { Component } from 'react';
import './content.css';


class DocumentManagement extends Component {
  render() {
    return (
      <div className="mainscreen">
        <h1>Document Management</h1>
        <h2>Seismic</h2>
        <p>A polished solution application handling document management including monitoring of usage, etc...</p>
        <div className="tag">Responsive</div>
        <div className="tag">Ad-hoc</div>
        <div className="tag">Embedded KPI dashboards</div>
        <div className="tag">Custom visualisations</div>
        <div className="tag">Recommendations</div>
        <div className="tag">Funnel chart</div>
        <div className="tag">Custom filters</div>
        <div className="tag">Top navigation</div>
        <div className="tag">Custom filters</div>
        <div className="tag" >Date filters</div>
        <div className="horizontalBlock">
          <div className="shadowbox">
            {/* <img className="cover" src={require('./static/seismic/Home screen.jpg')} /> */}
            <div className="shadowBoxTitle">
              <h3>Home dashboard</h3>
              <div className="caption">Compared role being hired with other potential roles.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            {/* <img className="cover" src={require('./static/seismic/Homepage V2.jpg')} /> */}
            <div className="shadowBoxTitle">
              <h3>News screen</h3>
              <div className="caption">Compare active credit card with other options.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            {/* <img className="cover" src={require('./static/seismic/View screen.jpg')} /> */}
            <div className="shadowBoxTitle">
              <h3>View screen</h3>
              <div className="caption">Compare performance of specific pieces of content.</div>
              <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
            </div>
          </div>
          <div className="shadowbox">
            <div className="shadowbox">
              {/* <img className="cover" src={require('./static/seismic/Your Dashboard.jpg')} /> */}
              <div className="shadowBoxTitle">
                <h3>KPI dashboards</h3>
                <div className="caption">Embedded KPI dashboard to for collecting &amp; sharing insights</div>
                <div className="left"><a href="">Sketch</a>, <a href="">Code</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="downloadBlock">
          {/* <img src={require('./static/icon-tag.png')} /> */}
          <a href="">Download template</a>
        </div>
      </div>
    );
  }
}

export default DocumentManagement;
