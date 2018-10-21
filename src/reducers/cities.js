const initialState = [];

export default function cities(state = initialState, action) {
  if(action.type === 'FETCH_CITIES_SUCCESS') {
    return action.payload;
  }
  return state;
}