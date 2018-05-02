// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
export const search = (state = { string: '' }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        string: action.value,
      };

    default:
      return state;
  }
};
