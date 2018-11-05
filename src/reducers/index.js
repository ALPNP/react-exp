import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import playLists from './playlists';
import tracks from './tracks';
import filterTracks from "./filterTracks";

export default combineReducers({
  routing: routerReducer,
  tracks,
  playLists,
  filterTracks
});
