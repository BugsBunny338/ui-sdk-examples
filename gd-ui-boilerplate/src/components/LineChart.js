import React, { Component } from 'react';
import {
  FlexibleXYPlot,
  Crosshair,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  DiscreteColorLegend
} from 'react-vis';
import { range, isEqual } from 'lodash';

import Execute from '../components/EnhancedExecute';
import Loading from '../components/Loading';
import NoData from '../components/NoData';
import config from '../config';
// import { FG_MAIN } from '../constants';
// import { formatCount } from '../utils';

import 'react-vis/dist/style.css';

const SLIDER_DEFAULT = 5;
const LINE_COLORS = ['#12939A','#79C7E3','#3364F5','#FF9933','#EF5D28'];

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attribute: 'label.dimplacements.campaignname',
      limit: SLIDER_DEFAULT,
      crosshairValues: []
    };

    this.setCrosshairValues = this.setCrosshairValues.bind(this);
  }

  setCrosshairValues(newCrosshairValues) {
    // this is terrible, but unless setState() is called only when dataPoint changed,
    // react-vis onMouseLeave is never called; probably bug in react-vis related to
    // https://github.com/uber/react-vis/issues/381
    const crosshairValues = this.state.crosshairValues;

    if (!isEqual(crosshairValues, newCrosshairValues)) {
      this.setState({ crosshairValues: newCrosshairValues });
    }
  }

  render() {
    const { attribute, limit, crosshairValues } = this.state;

    const afm = {
      measures: [{
        localIdentifier: 'm0',
        definition: {
          measure: {
            item: {
              // identifier: 'abK5oT8chJdq' // Authentic Viewable Impressions
              identifier: 'aaEONKpOgBBm' // Authentic Viewable Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm5',
        definition: {
          measure: {
            item: {
              // identifier: 'abRDHvxGdcFL' // Viewable Time 5 sec Impressions
              identifier: 'aamXJKXwhrLQ' // Viewable Time 5 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm10',
        definition: {
          measure: {
            item: {
              // identifier: 'aalDNsPthPjc' // Viewable Time 10 sec Impressions
              identifier: 'aadXOOyFdeM9' // Viewable Time 10 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm15',
        definition: {
          measure: {
            item: {
              // identifier: 'aaSDNAgzaEFU' // Viewable Time 15 sec Impressions
              identifier: 'aabXQPhfd57z' // Viewable Time 15 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm20',
        definition: {
          measure: {
            item: {
              // identifier: 'aaVDNJHRa5XG' // Viewable Time 20 sec Impressions
              identifier: 'aaxXSGN2eW5M' // Viewable Time 20 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm25',
        definition: {
          measure: {
            item: {
              // identifier: 'ab3DK2yBaG9o' // Viewable Time 25 sec Impressions
              identifier: 'aadXTYtxdtfr' // Viewable Time 25 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm30',
        definition: {
          measure: {
            item: {
              // identifier: 'aclDLjbEcN4w' // Viewable Time 30 sec Impressions
              identifier: 'aabXU1pGdTUa' // Viewable Time 30 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm35',
        definition: {
          measure: {
            item: {
              // identifier: 'abbDNHm8bFTc' // Viewable Time 35 sec Impressions
              identifier: 'aabXXrs2eTGO' // Viewable Time 35 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm40',
        definition: {
          measure: {
            item: {
              // identifier: 'aaPDPFcGd854' // Viewable Time 40 sec Impressions
              identifier: 'aabX9yz4dCc3' // Viewable Time 40 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm45',
        definition: {
          measure: {
            item: {
              // identifier: 'aboDOw87ifUZ' // Viewable Time 45 sec Impressions
              identifier: 'aadYarUtdUo1' // Viewable Time 45 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm50',
        definition: {
          measure: {
            item: {
              // identifier: 'aaTDQ9wfbNgE' // Viewable Time 50 sec Impressions
              identifier: 'aabYbbyUehlO' // Viewable Time 50 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm55',
        definition: {
          measure: {
            item: {
              // identifier: 'acGDNqHMge0I' // Viewable Time 55 sec Impressions
              identifier: 'aabYcoOieMY1' // Viewable Time 55 sec Impressions Top 50
            }
          }
        }
      }, {
        localIdentifier: 'm60',
        definition: {
          measure: {
            item: {
              // identifier: 'abbDPW0SeqC0' // Viewable Time 60 sec Impressions
              identifier: 'aacYdwcPfi7S' // Viewable Time 60 sec Impressions Top 50
            }
          }
        }
      }],
      attributes: [{
        localIdentifier: 'a1',
        displayForm: {
          identifier: attribute
        }
      }],
      filters: [{
        positiveAttributeFilter: {
          displayForm: {
            identifier: 'label.mediatypes.mediatype'
          },
          in: ['Display'],
          textFilter: true
        }
      }]
    };

    if (attribute === "label.domains.classifiedsite") {
      afm.filters.push({
        negativeAttributeFilter: {
          displayForm: {
            identifier: 'label.domains.classifiedsite'
            },
          notIn: {
            values: ['Mobile In-App']
          }
        }
      })
    };

    const resultSpec = {
      sorts: [{
        measureSortItem: {
          direction: 'desc',
          locators: [{
            measureLocatorItem: {
              measureIdentifier: 'm0'
            }
          }]
        }
      }]
    };

    // console.log('crosshairValues', crosshairValues);

    return (
      <div className="linePage">
        <div className="line-content-wrap">
          <div className="switch">
            <input
              type="radio"
              id="campaign"
              name="attribute"
              value="label.dimplacements.campaignname"
              onChange={(e) => this.setState({ attribute: e.target.value })}
              defaultChecked
            />
            <label htmlFor="campaign">Campaign</label>
            <input
              type="radio"
              id="placement"
              name="attribute"
              value="label.dimplacements.placementname"
              onChange={(e) => this.setState({ attribute: e.target.value })}
            />
            <label htmlFor="placement">Placement</label>
            <input
              type="radio"
              id="creative"
              name="attribute"
              value="label.authenticperformance.creativeid"
              onChange={(e) => this.setState({ attribute: e.target.value })}
            />
            <label htmlFor="creative">Creative</label>
            <input
              type="radio"
              id="adsize"
              name="attribute"
              value="label.staticvalues.adsizebucketid"
              onChange={(e) => this.setState({ attribute: e.target.value })}
            />
            <label htmlFor="adsize">Ad Size</label>
            <input
              type="radio"
              id="devicedelivery"
              name="attribute"
              value="label.devicetypes.device"
              onChange={(e) => this.setState({ attribute: e.target.value })}
            />
            <label htmlFor="devicedelivery">Device Delivery</label>
            <input
              type="radio"
              id="site"
              name="attribute"
              value="label.domains.classifiedsite"
              onChange={(e) => this.setState({ attribute: e.target.value })}
            />
            <label htmlFor="site">Site</label>
            <input
              type="radio"
              id="app"
              name="attribute"
              value="label.applicationdata.name"
              onChange={(e) => this.setState({ attribute: e.target.value })}
            />
            <label htmlFor="app">App</label>
          </div>
          <div className="chart">
            <Execute
              {...config}
              // filterGroup={FG_MAIN}
              afm={afm}
              resultSpec={resultSpec}
              loading={() => <Loading />}
              noData={() => <NoData />}
              component={(execution) => {
                const execData = execution.data;
                // console.log('execData', execData);
                const rows = execData.data.slice(0, limit);
                const legend = [];
                // console.log('rows', rows);

                const data = rows.map((row, i) => {
                  const title = execData.headerItems[0][0][i].attributeHeaderItem.name;
                  // Can't send empty string to 'title' prop for legend so send white space
                  // https://github.com/uber/react-vis/issues/1036
                  legend.push({title: title ? title : ' ', color: LINE_COLORS[i]});
                  return [
                    { x: 0, y: parseFloat(row[0]), meta: execData.headerItems[0][0][i] },
                    { x: 5, y: parseFloat(row[1]), meta: execData.headerItems[0][0][i] },
                    { x: 10, y: parseFloat(row[2]), meta: execData.headerItems[0][0][i] },
                    { x: 15, y: parseFloat(row[3]), meta: execData.headerItems[0][0][i] },
                    { x: 20, y: parseFloat(row[4]), meta: execData.headerItems[0][0][i] },
                    { x: 25, y: parseFloat(row[5]), meta: execData.headerItems[0][0][i] },
                    { x: 30, y: parseFloat(row[6]), meta: execData.headerItems[0][0][i] },
                    { x: 35, y: parseFloat(row[7]), meta: execData.headerItems[0][0][i] },
                    { x: 40, y: parseFloat(row[8]), meta: execData.headerItems[0][0][i] },
                    { x: 45, y: parseFloat(row[9]), meta: execData.headerItems[0][0][i] },
                    { x: 50, y: parseFloat(row[10]), meta: execData.headerItems[0][0][i] },
                    { x: 55, y: parseFloat(row[11]), meta: execData.headerItems[0][0][i] },
                    { x: 60, y: parseFloat(row[12]), meta: execData.headerItems[0][0][i] }
                  ];
                });

                if (!data.length) {
                  return <NoData />;
                }

                // console.log('data', data);

                return (
                  <div
                    style={{ width: 908, height: 260 }}
                    onMouseOut={() => {
                      setTimeout(() => this.setState({ crosshairValues: [] }), 50);
                    }}
                  >
                    <FlexibleXYPlot
                      margin={{ left: 45, right: 15, top: 10, bottom: 40 }}
                      onMouseLeave={() => {
                        // console.log('onMouseLeave');
                        this.setState({ crosshairValues: [] });
                      }}
                    >
                      <VerticalGridLines
                        style={{ stroke: '#CECED2' }}
                        tickValues={range(0, 61, 5)}
                      />
                      <XAxis
                        tickValues={range(0, 61, 5)}
                        tickFormat={value => `${value}s`}
                      />
                      <YAxis
                        title="# of Impressions"
                        tickFormat={value => value}
                      />
                      {
                        data.map((dataSet, i) => (
                          <LineSeries
                            key={i}
                            data={dataSet}
                            color={LINE_COLORS[i]}
                            onNearestX={(value, { index }) => {
                              if (i === 0) {
                                // crosshair tooltip is grouped, so it's good enough
                                // on only one of the series
                                this.setCrosshairValues(data.map(d => d[index]));
                              }
                            }}
                          />
                        ))
                      }
                      {
                        crosshairValues.length ?
                          <Crosshair
                            values={crosshairValues}
                            titleFormat={(crosshairValues) => ({
                              title: 'Time', value: `${crosshairValues[0].x} sec`
                            })}
                            itemsFormat={(crosshairValues) => {
                              // console.log('dataPoints', dataPoints);
                              return crosshairValues.map((crosshairValue, i) => ({
                                title: <span><span style={{color:LINE_COLORS[i]}}>&#x25FC;</span>{crosshairValue.meta.attributeHeaderItem.name}</span>,
                                value: crosshairValue.y
                              }));
                            }}
                          /> : null
                      }
                      <DiscreteColorLegend
                        orientation="horizontal"
                        items={legend}
                      />
                    </FlexibleXYPlot>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default LineChart;
