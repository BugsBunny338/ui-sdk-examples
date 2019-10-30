// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Execute } from '@gooddata/react-components';
// import { Execute } from './afmConnected';

export default class EnhancedExecute extends Component {
  static propTypes = {
    component: PropTypes.func,
    componentProps: PropTypes.object
  }

  render() {
    const {
      component: Component,
      componentProps = {},
      loading: Loading = () => (<span>Loading…</span>),
      error: Error = () => (<span>Error!</span>),
      noData: NoData = () => (<span>No data</span>),
      ...props
    } = this.props

    return (
      <Execute {...props}>
        {
          ({ error, isLoading, result }) => {
            if (isLoading) {
              return <Loading />;
            }

            if (error) {
              return <Error />;
            }

            const hasMultipleDimensions = result.executionResult.paging.count.length > 1
            const rowCount = result.executionResult.paging.count[0]
            const seriesCount = hasMultipleDimensions ? result.executionResult.paging.count[1] : 1

            if (!rowCount) {
              return <NoData />;
            }

            return (
              <Component
                rowCount={rowCount}
                seriesCount={seriesCount}
                data={result.executionResult}
                {...componentProps}
              />
            )
          }
        }
      </Execute>
    )
  }
}
