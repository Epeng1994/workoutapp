import { FETCH_SPOTIFY_CATEGORIES } from '../actions/index.js';



export default function(state=[1,2,3],action){
    switch(action.type){
        case FETCH_SPOTIFY_CATEGORIES:
            return {
                categoryData:action.payload
            }
        default:
            return state;
    }
}

