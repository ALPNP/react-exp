const initialState = ['1', '2'];

export default function playLists(state = initialState, action) {
  if (action.type === 'ADD_PLAYLIST') {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
