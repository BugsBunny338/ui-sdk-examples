import React, { Component } from 'react';
import { AttributeElements } from '@gooddata/react-components';
import { afmConnect } from '@gooddata/gdc-afm-connect';
import Select from 'react-select';

class AttributeDropdown extends Component {
  constructor(props) {
    super(props);

    this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  onChangeFilter(options) {
    const {
      attribute,
      filterGroup,
      removeAttributeFilter,
      updatePositiveAttributeFilter,
      onChange
    } = this.props;

    if (options.length) {
      updatePositiveAttributeFilter(
        filterGroup,
        attribute,
        options.map(option => option.value)
      );
      onChange({ label: attribute, values: options });
    } else {
      removeAttributeFilter(
        filterGroup,
        attribute
      );
      onChange({ label: attribute, values: [] });
    }
  }

  render() {
    const {
      sdk,
      filters,
      projectId,
      attribute,
      placeholder
    } = this.props;

    sdk.md.getObjectUri(projectId, attribute).then((result) => {
      sdk.md.getValidElements(projectId, result.split('/').pop(), { limit: 100 }).then(console.log);
    });

    return (
      <AttributeElements
        sdk={sdk}
        projectId={projectId}
        identifier={attribute}
        options={{ limit: 100 }}
        children={({ validElements, isLoading, error }) => {
          const options = validElements ? validElements.items.map(item => ({
            label: item.element.title,
            value: item.element.uri
          })) : [];
          const selectedOptions = filters.length ?
            filters[0].positiveAttributeFilter.in : [];
          return (
            <Select
              isMulti
              onChange={this.onChangeFilter}
              options={options}
              value={options.filter(option => selectedOptions.find(selectedOption => selectedOption === option.value))}
              isLoading={isLoading}
              placeholder={placeholder}
            />
          );
        }}
      />
    );
  }
}

export default afmConnect(AttributeDropdown);
