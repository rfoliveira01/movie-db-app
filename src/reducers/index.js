import { filterNameReducer } from './filterNameReducer.js';
import { filterGenreReducer } from './filterGenreReducer.js';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  filterNameState: filterNameReducer,
  filterGenreState: filterGenreReducer
}); 