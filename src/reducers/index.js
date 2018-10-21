import { combineReducers } from 'redux';

import cities from './cities';
import favorites from './favorites';

export default combineReducers({
  cities,
  favorites
});