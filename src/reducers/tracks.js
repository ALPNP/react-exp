const initialState = [];

export default function tracks(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return action.payload;
  } else if (action.type === 'FETCH_REQUEST') {
    return [...state];
  } else if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      action
    }
  }
  return state;
}
