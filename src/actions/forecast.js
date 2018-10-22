export const getSomeCity = (woeid) => {
  return dispatch => {
    fetch(`/api/location/${woeid}/`)
      .then( response => response.json() )   
      .then( json => dispatch({ 
        type: 'GET_SOME_CITY', 
        payload: json.consolidated_weather
      }));
  }
}