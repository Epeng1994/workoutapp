import {useState} from 'react';
import './Spotify.css'
import { connect } from 'react-redux'

function Playlist(props){
    const [visible,setVisible] = useState(false)
    const Redirect = e =>{
        window.location.replace(e)
    }

    const Toggle = e =>{
        setVisible(!visible);
    }

    return(
        <div className = "playlist">
            <img src = {props.currentPlaylist.images[0].url}/>
            <div onClick = {e=>Toggle(e.target)} className = {`playlistInfo fade-${visible?'in':'out'}`}>
                <h2>{props.currentPlaylist.name}</h2>
                <p className = "playlistDescription">{props.currentPlaylist.description}</p>
            </div>
            <button className ="" onClick = {()=>Redirect(props.currentPlaylist.external_urls.spotify)}>Listen Now on Spotify</button>
        </div>
    )
}   

const mapStateToProps = state =>{
    return {
        currentPlaylist: state.currentPlaylist
    }
}

export default connect(mapStateToProps,{})(Playlist);