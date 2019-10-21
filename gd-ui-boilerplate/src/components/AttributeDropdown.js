import React from 'react';
import { AttributeElements, Model } from '@gooddata/react-components';
import Select from 'react-select';

function AttributeDropdown({ sdk, projectId, placeholder, attribute, filter, updateFilter }) {
  const onChangeFilter = (options) => {
    if (options.length) {
      updateFilter(
        Model.positiveAttributeFilter(attribute, options.map(option => option.value))
      );
    } else {
      updateFilter(null);
    }
  };

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
        const selectedOptions = filter ?
          filter.positiveAttributeFilter.in : [];
        return (
          <Select
            isMulti
            onChange={onChangeFilter}
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

export default AttributeDropdown;
