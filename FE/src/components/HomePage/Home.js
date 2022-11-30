import { Link, useNavigate } from "react-router-dom";
import React, {useState,useEffect} from 'react';
import "./Home.css";

function Home(props){
    const {dates} = props;
    const currentTime = new Date().getHours();
    const currentTimeString = currentTime >= 0 && currentTime < 12 ? 'Morning' : currentTime >= 12 && currentTime < 18 ? 'Afternoon' : 'Evening'

    const navigate = useNavigate()

    const Redirect= e =>{
        //console.log(e)
        navigate(e)
    }

    useEffect(()=>{

    },[])

    return(
        <>
            <div>
                <div className = 'title'>Working It Out</div>
                <h1>Good {`${currentTimeString} ${'user'}`}</h1>
                <div className = "container">
                    <div className = "homeButtons ">
                        <button value = "/workoutlog" onClick = {e=>Redirect(e.target.value)}>Check in</button>
                        <button value = "/spotify" onClick = {e=>Redirect(e.target.value)}>Spotify Music</button>
                        <button value = "/timer" onClick = {e=>Redirect(e.target.value)}>Timer</button>
                    </div>
                </div>
                
            </div>

        </>
    )
}
export default Home;