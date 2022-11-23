/*
Play/Pause
Prev
Next
Like/Favorite
Shuffle

*/

import {useState,useEffect} from 'react';
import './Spotify.css'


function Playlist(props){
    const { data } = props;
    console.log(data)
    return(
        <div className = "playlist">
            <img src = {data.images[0].url}/>
            <div className = 'playlistInfo'>
                <a href = {data.external_urls.spotify}>Listen Now on Spotify</a>
                <p>{data.name}</p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}   

export default Playlist;