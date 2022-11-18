import {useState, useEffect} from 'react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE

function Spotify(props){
    const [token,setToken] = useState('');


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

    return(
        <>
            <div>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }
            </div>
        </>
    )
}


export default Spotify;