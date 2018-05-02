import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Navigation extends Component {
  render() {
    const isActive = false && 'active'; // TODO

    return (
      <div className="Navigation">
        <div className="LeftNavBlock">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="LeftNavBlock">
          <ul className="ul">
            <li><Link className={`MenuItem Section ${isActive}`} to="/">Getting started</Link></li>
            <li><span className="MenuItem Section">Solutions</span></li>
            <li><span className="MenuItem Child">Default boilerplate</span></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/document-management">Document Management</Link></li>
            <li><span className="MenuItem Child">Traffic Analysis</span></li>

            <li><Link className={`MenuItem Section ${isActive}`} to="/empty">Organisms</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Navigation: top</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Navigation: left</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/organisms/navigation-homepage">Navigation: Homepage</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Embedded Analytical Designer</Link></li>

            <li><Link className={`MenuItem Child ${isActive}`} to="/SideBySide">Side-by-side comparison</Link></li>
            <li><Link className={`MenuItem Section ${isActive}`} to="/empty">Molecules</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">KPI block</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Barchart</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Columnchart</Link></li>

            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Linechart</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/MoleculeDateFilter">Filter - Date</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Filter - Attribute</Link></li>

            <li><Link className={`MenuItem Section ${isActive}`} to="/empty">Atoms</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Label</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/KpiPlayground">KPI</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Legend</Link></li>

            <li><Link className={`MenuItem Section ${isActive}`} to="/empty">Interactions</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Open in AD</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Visual filters</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Exporting</Link></li>
            <li><Link className={`MenuItem Child ${isActive}`} to="/empty">Eventing</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
