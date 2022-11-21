import {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Spotify.css';

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
                Authorization: `Bearer BQAEw6DHJV3-H0DpsXOga4ZEgs427RtGmrBfebzpPFGXAsTjgrdOopmW1URP_xI4Q2xT6ip3qnayC-0nc4DKIu2k0Pi8hnJt5Dl1A6qOVhkdsPzU2Rr9KOzjHWhmpojZqgS4orPFNCVo8KYbcLx7PiPRaQKkKM7dcVULpfcDHISFOHf1GDIShtbM5nyf9ozy2qw`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        setArtists(data.artists.items);
    }
    const searchByArtistId = async id =>{
        await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`,{
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div onClick = {()=>searchByArtistId(artist.id)}className = "artist" key={artist.id}>
                <img src={artist.images.length ? artist.images[0].url:'/music_icon.png'} alt="artist image"/>
                <div>{artist.name}</div>
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
                <div className = "artistGrid">
                    {renderArtists()}
                </div>
                
            </div>
        </>
    )
}


export default Spotify;