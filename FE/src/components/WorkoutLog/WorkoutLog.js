import {useState} from 'react';
import axios from 'axios';
import './WorkoutLog.css';


function WeeklyBar(props){
    const today = new Date().toISOString().split('T')[0]
    const [message,setMessage] = useState('')

    const updateWorkout = e =>{
        e.preventDefault()
        axios.post('http://localhost:9000/workouts/1',{user_id:1,date:today})
            .then(res=>{
                setMessage(res.data)
            })
            .catch(err=>{
                setMessage(err.response.data)
            })
    }


    return(
        <div className = "container">  
            <h2>Check in for {today}</h2>
            <button className = "button-option" onClick = {()=>updateWorkout()}>Check in</button>
            {message ? <div>{message}</div>: null}
        </div>
    )
}
export default WeeklyBar
