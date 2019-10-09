import React, { Component } from 'react';
import { Headline, ColumnChart, Model } from '@gooddata/react-components';

import config, { sdk as gooddata } from './config';
import { loginMachinery } from './utils';
import C from './catalog';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

const measureTitle = '[SUM] Meter Reading';
const measure = C.measure(measureTitle);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      isPopup: false,
      title: '',
      filters: []
    };

    this.handleIncomingFiltersFromKPIDashboards = this.handleIncomingFiltersFromKPIDashboards.bind(this);
  }

  componentDidMount() {
    loginMachinery({ ...config }, () => this.setState({ isLogged: true }) );

    window.addEventListener('message', this.handleIncomingFiltersFromKPIDashboards);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleIncomingFiltersFromKPIDashboards);
  }

  handleIncomingFiltersFromKPIDashboards(message) {
    let data;

    if (message.data) {
      try {
        data = JSON.parse(message.data);
      } catch(e) {
        data = message.data;
      }
    }

    // console.log(data.gdc);

    if (data && data.gdc && data.gdc.event && data.gdc.event.name === 'listeningForDrillableItems') {
      // Embedded KPI Dashboard is ready to listen for drillable items
      const postMessageStructure = {
        gdc: {
          product: "dashboard",
          event: {
            name: "drillableItems",
            data: {
              identifiers: [measure]
            }
          }
        }
      };
      document.getElementById('gooddata').contentWindow.postMessage(postMessageStructure, '*');
    }

    if (data && data.gdc && data.gdc.event && data.gdc.event.name === 'drill') {
      // It has been clicked into the chart --> show the pop-up
      const drillData = data.gdc.event.data;
      const attribute = {
        uri: drillData.drillContext.intersection[1].header.uri,
        id: drillData.drillContext.intersection[1].id,
        title: drillData.drillContext.intersection[1].title
      };
      const executionContextFilters = drillData.executionContext.filters || [];

      console.log(drillData);

      Promise.all([
        gooddata.md.getObjectDetails(attribute.uri)
      ]).then(results => {
        // Drill event tells what attributeDisplayForm uri was clicked on,
        // but to built AFM attribute uri (not attributeDisplayForm uri) is needed,
        // so getObjectDetails and look to what attribute these attributeDisplayForms belong to.
        // BTW This is crazy not optimized and serves only as demonstration!
        this.setState({
          isPopup: true,
          title: attribute.title,
          filters: [
            ...executionContextFilters,
            {
              positiveAttributeFilter: {
                displayForm: {
                  uri: attribute.uri
                },
                in: [`${results[0].attributeDisplayForm.content.formOf}/elements?id=${attribute.id}`]
              }
            }
          ]
        });
      });
    }
  }

  renderPopup() {
    const { isPopup, title, filters } = this.state;

    if (isPopup) {
      return (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-close" onClick={() => this.setState({ isPopup: false })}>✕</div>
            <div className="headline">
              {measureTitle} <Headline {...config} primaryMeasure={Model.measure(measure)} filters={filters} /> for hour {title}
            </div>
            <div className="chart">
              <ColumnChart
                {...config}
                measures={[Model.measure(measure)]}
                viewBy={Model.attribute(C.attributeDisplayForm('Minute HH:MM'))}
                filters={filters}
              />
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    const { isLogged } = this.state;

    if (!isLogged) {
      return <span>Checking your credentials, please wait…</span>;
    }

    return (
      <div className="App">
        {this.renderPopup()}
        <iframe id="gooddata" title="KD" src="https://secure.gooddata.com/dashboards/embedded/#/project/w27zvnmuxbtv9hc2q9v07hmjddr7chxb/dashboard/aaSwjxn5fLns"></iframe>
      </div>
    );
  }
}

export default App;
