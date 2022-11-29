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
    const [visible,setVisible] = useState(false)

    const Redirect = e =>{
        window.location.replace(e)
    }

    const Toggle = e =>{
        setVisible(!visible);
    }

    return(
        <div className = "playlist">
            <img src = {data.images[0].url}/>
            <div style= {{opacity : visible ? 0:.8}} onClick = {e=>Toggle(e.target)} className = 'playlistInfo'>
                <h2>{data.name}</h2>
                <p className = "playlistDescription">{data.description}</p>
            </div>
            <button onClick = {()=>Redirect(data.external_urls.spotify)}>Listen Now on Spotify</button>
        </div>
    )
}   

export default Playlist;