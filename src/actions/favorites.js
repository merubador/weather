export const addCity = (woeid) => {
  const payload = {
    woeid
  };
  
  return dispatch => {
    dispatch({ type: 'ADD_CITY', payload });
  }
}