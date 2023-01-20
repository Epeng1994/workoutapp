import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './Spotify.css';
import Playlist from './Playlist';
import { fetchCategoryData,searchByCategory,clearPlaylistData } from '../../actions';
import SpotifyAuth from './SpotifyLogin';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
const auth = process.env.REACT_APP_0AUTH_TOKEN;

function Spotify(props){
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const {token} = props

    useEffect(()=>{

    },[]);  

    return(
        <>
            <div>
                <SpotifyAuth/>
                <div>
                    <h3>Need a playlist suggestion?</h3>
                    <label for='categories'>Categories</label>
                    <select onChange ={e=> setSelectedCategory(e.target.value)}type='drop'>
                        <option value= ''>-----</option>
                        {categories ? categories.map(item=>{
                            return(
                                <option id = {item.id} value = {item.id}>{item.name}</option>
                            )
                        }): null}
                    </select>
                    <button onClick = {()=>props.searchByCategory(selectedCategory, token)}>Search</button>
                    <button onClick = {()=>props.clearPlaylistData()}>Clear</button>
                </div>
                <h7>Click image for more information</h7>
            </div>
            {props.currentPlaylist && <Playlist/>}
        </>
    )
}

const mapStateToProps = state =>{
    return {
        categoryData:state.categoryData,
        currentPlaylist: state.currentPlaylist,
        token:state.token
    }
}

export default connect(mapStateToProps,{fetchCategoryData,searchByCategory, clearPlaylistData})(Spotify);