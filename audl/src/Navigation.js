import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Navigation extends Component {
  render() {
    const isActive = 'active'; // TODO

    return (
      <div className="Navigation">
        <div className="LeftNavBlock">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="LeftNavBlock">
          <ul className="ul">
            <li><Link className={`MenuItem Section ${isActive}`} to="/">Getting started</Link></li>
            <li><Link className={`MenuItem Section ${isActive}`} to="/Organisms">Solutions</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Boilerplate">Default boilerplate</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/document-management">Document Management</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/TrafficAnalysis">Traffic Analysis</Link></li>

            <li><Link className={`MenuItem Section ${isActive}`} to="/Empty">Organisms</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Navigation: top</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Navigation: left</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/NavigationHome">Navigation: Homepage</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Embedded Analytical Designer</Link></li>

            <li><Link className={`MenuItem Child ${isActive}`} to="/SideBySide">Side-by-side comparison</Link></li>
            <li><Link className={`MenuItem Section ${isActive}`} to="/Empty">Molecules</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">KPI block</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Barchart</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Columnchart</Link></li>

            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Linechart</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/MoleculeDateFilter">Filter - Date</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Filter - Attribute</Link></li>

            <li><Link className={`MenuItem Section ${isActive}`} to="/Empty">Atoms</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Label</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/KpiPlayground">KPI</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Legend</Link></li>

            <li><Link className={`MenuItem Section ${isActive}`} to="/Empty">Interactions</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Open in AD</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Visual filters</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Exporting</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/Empty">Eventing</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
