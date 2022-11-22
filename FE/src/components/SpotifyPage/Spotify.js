import {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Spotify.css';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE
const auth = process.env.REACT_APP_0AUTH_TOKEN

function Spotify(props){
    const [token,setToken] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [artists, setArtists] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(()=>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = "";
            window.localStorage.setItem("token", token);
        };
        setToken(token);
        renderCategories();
    },[]);


    const logout = () =>{
        setToken('');
        window.localStorage.removeItem('token');
    };
    
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
        });
        setArtists(data.artists.items);
    };

    const clearSearch = (e) =>{
        setArtists([]);
    };

    // const searchByArtistId = async id =>{
    //     await axios.get(`https://api.spotify.com/v1/browse/categories/acoustic?country=SE&locale=sv_SE`,{
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(result=>{
    //         console.log(result)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // }

    const renderArtists = () => {
        return artists.map(artist => (
            //onClick = {()=>searchByArtistId(artist.id)}
            <div className = "artist" key={artist.id}>
                <img src={artist.images.length ? artist.images[0].url:'/music_icon.png'} alt="artist image"/>
                <div>{artist.name}</div>
            </div>
        ));
    };

    async function renderCategories(){
        await axios.get("https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_se&offset=5&limit=30",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(result=>{
            setCategories(result.data.categories.items)
        })
        .catch(error=>{
            console.log(error)
        })
    };
    

    return(
        <>
            <div>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    : <button onClick={logout}>Logout</button>
                }
                <div className = "container">
                    {/* <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button>Search</button>
                    </form>
                    <button onClick = {()=>clearSearch()}>Clear</button> */}
                </div>
                <div className = "artistGrid">
                    {artists ? renderArtists() : null}
                </div>
                <div>
                    <label for='categories'>Categories</label>
                    <select type='drop'>
                        <option>-----</option>
                        {categories ? categories.map(item=>{
                            return(
                                <option>{item.name}</option>
                            )
                        }): null}
                    </select>
                </div>


            </div>
        </>
    )
}


export default Spotify;