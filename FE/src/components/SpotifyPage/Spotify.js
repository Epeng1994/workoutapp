import {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Spotify.css';
import Playlist from './Playlist';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
const auth = process.env.REACT_APP_0AUTH_TOKEN;

function Spotify(props){
    const [token,setToken] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [categoryData, setCategoryData] = useState('');

    useEffect(()=>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = "";
            window.localStorage.setItem("token", token);
        };
        setToken(token);
        if(categories.length<1)renderCategories();
        return ()=>{

        }
    },[]);


    function logout(){
        setToken('');
        window.localStorage.removeItem('token');
    };

    async function renderCategories(){
        await axios.get("https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_se&offset=5&limit=30",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(result=>{
            let data = [...result.data.categories.items].sort((a,b)=>{
                let textA = a.name.toUpperCase()
                let textB = b.name.toUpperCase()
                return (textA < textB) ? -1 : (textA>textB) ? 1 : 0
            })
            //console.log(data)
            setCategories(data)
        })
        .catch(error=>{
            console.log(error.response.data.error.message)
        })
    };
    

    const searchByCategory = async category_id => {
        //console.log(category_id)
        await axios.get(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(result=>{
            let randomIndexGenerator = Math.floor(Math.random()*20)
            //console.log(result.data.playlists.items[randomIndexGenerator])
            setCategoryData(result.data.playlists.items[randomIndexGenerator])
        })
        .catch(error=>{
            console.log(error.response.data.error.message)
        })
    }

    return(
        <>
            <div>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }
                <div>
                    <label for='categories'>Categories</label>
                    <select onChange ={e=> setSelectedCategory(e.target.value)}type='drop'>
                        <option value= ''>-----</option>
                        {categories ? categories.sort(a=>a.name).map(item=>{
                            return(
                                <option id = {item.id} value = {item.id}>{item.name}</option>
                            )
                        }): null}
                    </select>
                    <button onClick = {()=>searchByCategory(selectedCategory)}>Search</button>
                </div>
            </div>
            {categoryData && <Playlist data={categoryData}/>}
        </>
    )
}


export default Spotify;