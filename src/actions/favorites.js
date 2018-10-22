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