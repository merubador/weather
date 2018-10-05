import { combineReducers } from 'redux';
import { routerReduser } from 'react-router-redux';

import cities from './cities';
import filterCity from './filterCity';
import search from './search';

export default combineReducers({
    //routing: routerReduser,
    cities,
    filterCity,
    search
});