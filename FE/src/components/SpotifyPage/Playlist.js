import {useState,useEffect} from 'react';
import './Spotify.css'
import { connect } from 'react-redux'

function Playlist(props){
    const [visible,setVisible] = useState(false)
    const [playlist,setPlaylist] = useState(props.currentPlaylist ? props.currentPlaylist : null)

    useEffect(()=>{
        setPlaylist(props.currentPlaylist)
    },[props.currentPlaylist])

    const Redirect = e =>{
        window.location.replace(e)
    }

    const Toggle = e =>{
        setVisible(!visible);
    }

    return(
        <div className = "playlist">
            <img alt = 'playlist-icon' src = {playlist.images[0].url}/>
            <div onClick = {e=>Toggle(e.target)} className = {`playlistInfo fade-${visible?'in':'out'}`}>
                <h2>{playlist.name}</h2>
                <p className = "playlistDescription">{playlist.description}</p>
            </div>
            <button className = "playlist-button" onClick = {()=>Redirect(playlist.external_urls.spotify)}>Listen Now on Spotify</button>
        </div>
    )
}   

const mapStateToProps = state =>{
    return {
        currentPlaylist: state.currentPlaylist
    }
}

export default connect(mapStateToProps,{})(Playlist);