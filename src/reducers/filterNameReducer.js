const initialState = {
    newValue: ''
  };
  export const filterNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_NAME_UPDATE_VALUE':
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };