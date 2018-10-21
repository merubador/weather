const initialState = [];

export default function cities(state = initialState, action) {
  if(action.type === 'ADD_CITY') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}