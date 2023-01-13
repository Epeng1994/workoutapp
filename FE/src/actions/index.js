import axios from 'axios';

export const FETCH_SPOTIFY_CATEGORIES = 'FETCH_SPOTIFY_CATEGORIES';
export const SEARCH_SPOTIFY_CATEGORY = 'SEARCH_SPOTIFY_CATEGORY';
export const CLEAR_SPOTIFY_PLAYLIST = 'CLEAR_SPOTIFY_PLAYLIST';

export function fetchCategoryData(token){
    return async function(dispatch){
        return await axios.get("https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_se&offset=5&limit=30",{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(result=>{
                    let data = [...result.data.categories.items].sort((a,b)=>{
                        let textA = a.name.toUpperCase()
                        let textB = b.name.toUpperCase()
                        return (textA < textB) ? -1 : (textA>textB) ? 1 : 0
                    })
                    dispatch(setCategoryData(data))
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        }

function setCategoryData(data){
    return{
        type:FETCH_SPOTIFY_CATEGORIES,
        payload:data
    };
};

export function clearPlaylistData(){
    return async function(dispatch){
        return dispatch(clearPlaylist())
    };
};

function clearPlaylist(){
    return{
        type:CLEAR_SPOTIFY_PLAYLIST,
        payload:{}
    };
};

export function searchByCategory(category_id,token){
    return async function(dispatch){
        return await axios.get(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(result=>{
            let randomIndexGenerator = Math.floor(Math.random()*20)
            dispatch(setCurrentCategoryData(result.data.playlists.items[randomIndexGenerator]))
        })
        .catch(error=>{
            console.log(error.response.data.error.message)
        })
    };
};

function setCurrentCategoryData(data){
    return{
        type:SEARCH_SPOTIFY_CATEGORY,
        payload:data
    };
};