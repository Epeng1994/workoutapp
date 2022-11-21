import {useState, useEffect} from 'react';
import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE

function Spotify(props){
    const [token,setToken] = useState('');
    const [searchKey, setSearchKey] = useState('')
    const [artists, setArtists] = useState([])

    useEffect(()=>{
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    },[])


    const logout = () =>{
        setToken('')
        window.localStorage.removeItem('token')
    }

    
    const searchArtists = async (e) =>{
        e.preventDefault();
        const {data} = await axios.get("https://api.spotify.com/v1/search",{
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return(
        <>
            <div>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>
                {renderArtists()}
            </div>
        </>
    )
}


export default Spotify;