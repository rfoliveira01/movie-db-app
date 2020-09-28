const initialState = {
    newValue: ''
  };
  export const filterGenreReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_GENRE_UPDATE_VALUE':
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };