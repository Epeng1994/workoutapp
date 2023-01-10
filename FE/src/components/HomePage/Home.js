import { useNavigate } from "react-router-dom";
import React, {useEffect} from 'react';
import "./Home.css";

function Home(props){
    const currentTime = new Date().getHours();
    const currentTimeString = currentTime >= 0 && currentTime < 12 ? 'Morning' : currentTime >= 12 && currentTime < 18 ? 'Afternoon' : 'Evening'

    const navigate = useNavigate()

    const Redirect= e =>{
        navigate(e)
    }

    useEffect(()=>{

    },[])

    return(
        <>
            <div>
                <div className = 'title'>Working It Out</div>
                <h2>Good {`${currentTimeString} ${'user'}`}</h2>
                <div className = "container">
                    <div className = "homeButtons ">
                        <button className = "homepage-option" value = "/workoutlog" onClick = {e=>Redirect(e.target.value)}>Check in</button>
                        <button className = "homepage-option" value = "/spotify" onClick = {e=>Redirect(e.target.value)}>Spotify Music</button>
                        <button className = "homepage-option" value = "/timer" onClick = {e=>Redirect(e.target.value)}>Timer</button>
                    </div>
                </div>
                
            </div>

        </>
    )
}
export default Home;