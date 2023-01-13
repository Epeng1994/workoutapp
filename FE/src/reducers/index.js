import { FETCH_SPOTIFY_CATEGORIES, SEARCH_SPOTIFY_CATEGORY, CLEAR_SPOTIFY_PLAYLIST } from '../actions/index.js';


const initialState = {
    currentPlaylist:null,
    categoryData:[]
}


export default function(state=initialState,action){
    switch(action.type){
        case FETCH_SPOTIFY_CATEGORIES:
            return {
                ...state,categoryData:action.payload
            }
        case SEARCH_SPOTIFY_CATEGORY:
            return {
                ...state,currentPlaylist: action.payload
            }
        case CLEAR_SPOTIFY_PLAYLIST:
            return {
                ...state,currentPlaylist: null
            }
        default:
            return state;
    }
}

