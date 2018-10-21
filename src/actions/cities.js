
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
