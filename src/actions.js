export const getCities = (city) => {
  return dispatch => {
    if(city !== '') {
      fetch(`/api/location/search/?query=${city}`)
        .then(response => response.json())
        .then(data => dispatch({ type: 'FETCH_CITIES_SUCCESS', payload: data }));
    } else {
        dispatch({ type: 'FETCH_CITIES_SUCCESS', payload: [] });
      }
  }
}

export const addCity = (woeid, name) => {
  const payload = {
    woeid,
    name
  };
  
  return dispatch => {
    dispatch({ type: 'ADD_CITY', payload });
  }
}

export const removeCity = (woeid) => {
  return dispatch => {
    dispatch({ type: 'REMOVE_CITY', payload: woeid });
  }
}

export const findCity = (name) => {
  return dispatch => {
    dispatch({ type: 'FIND_CITY', payload: name });
  }
}

export const getSomeCity = (woeid) => {
  return dispatch => {
    fetch(`/api/location/${woeid}/`)
      .then( response => response.json() )   
      .then( json => dispatch({ 
        type: 'GET_SOME_CITY', 
        payload: { 
          weather: json.consolidated_weather,
          title: json.title
        }
      }));
  }
}