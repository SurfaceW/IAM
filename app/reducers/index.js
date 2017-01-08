// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import points from './points';

const rootReducer = combineReducers({
  points,
  counter,
  routing
});

export default rootReducer;
