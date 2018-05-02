import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { screen: 'GettingStarted' };
  }

  render() {
    var isActive = isActive ? 'active' : '';

    return (
      <div className="Navigation">
        <div className="LeftNavBlock">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="LeftNavBlock">
          <ul className="ul">
            <li><div className={`MenuItem Section ${isActive}`} onClick={() => (this.props.onNavigate('GettingStarted'))}>Getting started</div></li>
            <li><div className="MenuItem Section" onClick={() => (this.props.onNavigate('Organisms'))}>Solutions</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Boilerplate'))}>Default boilerplate</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('DocumentManagement'))}>Document Management</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('TrafficAnalysis'))}>Traffic Analysis</div></li>

            <li><div className="MenuItem Section" onClick={() => (this.props.onNavigate('Empty'))}>Organisms</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Navigation: top</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Navigation: left</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('NavigationHome'))}>Navigation: Homepage</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Embedded Analytical Designer</div></li>

            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('SideBySide'))}>Side-by-side comparison</div></li>
            <li><div className="MenuItem Section" onClick={() => (this.props.onNavigate('Empty'))}>Molecules</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>KPI block</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Barchart</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Columnchart</div></li>

            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Linechart</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('MoleculeDateFilter'))}>Filter - Date</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Filter - Attribute</div></li>


            <li><div className="MenuItem Section" onClick={() => (this.props.onNavigate('Empty'))}>Atoms</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Label</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('KpiPlayground'))}>KPI</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Legend</div></li>

            <li><div className="MenuItem Section" onClick={() => (this.props.onNavigate('Empty'))}>Interactions</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Open in AD</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Visual filters</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Exporting</div></li>
            <li><div className="MenuItem Child" onClick={() => (this.props.onNavigate('Empty'))}>Eventing</div></li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
