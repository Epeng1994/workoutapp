import { FETCH_SPOTIFY_CATEGORIES, SEARCH_SPOTIFY_CATEGORY } from '../actions/index.js';



export default function(state=[1,2,3],action){
    switch(action.type){
        case FETCH_SPOTIFY_CATEGORIES:
            return {
                categoryData:action.payload
            }
        case SEARCH_SPOTIFY_CATEGORY:
            return {
                currentPlaylist: action.payload
            }
        default:
            return state;
    }
}

