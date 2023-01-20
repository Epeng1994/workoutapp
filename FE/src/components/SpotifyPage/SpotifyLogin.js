import {useState,useEffect} from 'react';
import { connect } from 'react-redux';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
const auth = process.env.REACT_APP_0AUTH_TOKEN;



function SpotifyAuth(){
    const [token,setToken] = useState('');

    function logout(){
        setToken('');
        window.localStorage.removeItem('token');
    };
    useEffect(()=>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = "";
            window.localStorage.setItem("token", token);
        };
        setToken(token);
        // if(categories.length===0){
        //     props.fetchCategoryData(token);
        //     setCategories(props.categoryData)
        // }
        return ()=>{
            
        }
    },[]);  
    return(
        <>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                : <button onClick={logout}>Logout</button>
            }
        </>
    )
};

const mapStateToProps = state =>{
    return {
        token:state.token
    }
}

export default connect(mapStateToProps,{})(SpotifyAuth);