import { combineReducers } from 'redux';

//import cities from './cities';
// import favorites from './favorites';
// import forecast from './forecast';
// import filterCity from './filterCity';



function cities(state = [], action) {
  if(action.type === 'FETCH_CITIES_SUCCESS') {
    return action.payload;
  }
  return state;
}

function favorites(state = [], action) {
  if(action.type === 'ADD_CITY') {
    return [
      ...state,
      action.payload
    ];
  } else if(action.type === 'REMOVE_CITY') {
      return state.filter(favorites => favorites.woeid !== action.payload);
    }
  return state;
}

 function filterCity(state = '', action) {
  if(action.type === 'FIND_CITY') {
    return action.payload;
  }
  return state;
}

function forecast(state = [], action) {
  if(action.type === 'GET_SOME_CITY') {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  cities,
  favorites,
  forecast,
  filterCity
});