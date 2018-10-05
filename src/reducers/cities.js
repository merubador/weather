const initialState = []

export default function cities(state = initialState, action) {
    if(action.type === 'ADD_CITY') {
        return [
            ...state,
            action.payload
        ];
    } else if(action.type === 'REMOVE_CITY') {
        const commentId = action.payload;
        return state.filter(city => city.id !== commentId);
    }
    return state;
}