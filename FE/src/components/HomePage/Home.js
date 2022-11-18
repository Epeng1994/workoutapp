import {useState, useEffect} from 'react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE



function Home(props){
    const {dates} = props;
    const [token,setToken] = useState('');
    const currentTime = new Date().getHours();
    const currentTimeString = currentTime >= 0 && currentTime < 12 ? 'Morning' : currentTime >= 12 && currentTime < 18 ? 'Afternoon' : 'Evening'

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
                <h1>Good {`${currentTimeString} ${'user'}`}</h1>
            </div>
            <div>
                Music generator here
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }
            </div>
        </>
    )
}
export default Home;