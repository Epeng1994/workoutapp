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
            id:"home"
        },
        {
            src:"./checkmark.png",
            value:"/workoutlog",
            id:"workoutlog"
        },
        {
            src:"./spotify.png",
            value:"/spotify",
            id:"spotify"
        },
        {
            src:"./timer.png",
            value:"/timer",
            id:"timer"
        },
    ]


    useEffect(()=>{

    },[])

    return(
        <nav>
            <ul>
                {
                    navBarArray.map(item=>{
                        return(
                            <li>
                                <img className = "navBarIcon" src= {item.src} id = {item.id} value = {item.value} onClick = {Redirect}/>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar