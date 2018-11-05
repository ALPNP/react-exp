let mockApiData = [
  {
    id: 1,
    name: 'Svibidi'
  },
  {
    id: 2,
    name: 'dsgsdh'
  },{
    id: 3,
    name: 'dhdhsdh'
  },
];

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('tracks is get');
    dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
  }, 2000)
};

export const getTracksTest = () => {
  return dispatch => {
    dispatch({type: 'FETCH_REQUEST'});
    return fetchPosts().then(([res, json]) => {
      if (res.status === 200) {
        dispatch({type: 'FETCH_SUCCESS', payload: json})
      } else {
        dispatch({type: 'FETCH_ERROR', payload: json})
      }
    })
  }
};

function fetchPosts() {
  const URL = 'https://api.ipify.org?format=json';
  return fetch(URL, {method: 'GET'})
    .then(res => Promise.all([res, res.json()]))
}
