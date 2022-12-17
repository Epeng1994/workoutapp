import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './Spotify.css';
import Playlist from './Playlist';
import { fetchCategoryData,searchByCategory } from '../../actions';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
const auth = process.env.REACT_APP_0AUTH_TOKEN;

function Spotify(props){
    const [token,setToken] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

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
        if(categories.length===0){
            props.fetchCategoryData(token);
            setCategories(props.categoryData)
        }
        return ()=>{
            
        }
    },[]);  

    return(
        <>
            <div>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }
                <div>
                    <h3>Need a playlist suggestion?</h3>
                    <label for='categories'>Categories</label>
                    <select onChange ={e=> setSelectedCategory(e.target.value)}type='drop'>
                        <option value= ''>-----</option>
                        {categories ? categories.sort(a=>a.name).map(item=>{
                            return(
                                <option id = {item.id} value = {item.id}>{item.name}</option>
                            )
                        }): null}
                    </select>
                    <button onClick = {()=>props.searchByCategory(selectedCategory, token)}>Search</button>
                </div>
                <h7>Click image for more information</h7>
            </div>
            {props.currentPlaylist && <Playlist data={props.currentPlaylist}/>}
        </>
    )
}

const mapStateToProps = state =>{
    return {
        categoryData:state.categoryData,
        currentPlaylist: state.currentPlaylist
    }
}

export default connect(mapStateToProps,{fetchCategoryData,searchByCategory})(Spotify);