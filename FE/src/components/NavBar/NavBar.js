import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './NavBar.css'


function NavBar(props){
    const navigate = useNavigate()

    const Redirect= e =>{
        navigate(e.target.attributes.value.value)
    }

    const navBarArray = [
        {
            src:"./homepage.png",
            value:"/",
            id:"home",
            name:'Home'
        },
        {
            src:"./checkmark.png",
            value:"/workoutlog",
            id:"workoutlog",
            name:'Check In'
        },
        {
            src:"./spotify.png",
            value:"/spotify",
            id:"spotify",
            name:'Spotify'
        },
        {
            src:"./timer.png",
            value:"/timer",
            id:"timer",
            name:'Timer'
        },
    ]


    return(
        <nav className = 'nav-bar'>
            {
                navBarArray.map(item=>{
                    return(
                        <div onClick = {Redirect}>
                            <img className = "navBarIcon" src= {item.src} id = {item.id} value = {item.value}/>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default NavBar