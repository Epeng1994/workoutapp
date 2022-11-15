import {useState} from 'react';
import Tracker from './Tracker';
import axios from 'axios';

const filteredData= [
    {
        "workout_id": 1,
        "user_id": "1",
        "workout_Date": "20220101",
        "Completed": 1
    },
    {
        "workout_id": 1,
        "user_id": "1",
        "workout_Date": "20220102",
        "Completed": 1
    },
    {
        "workout_id": 1,
        "user_id": "1",
        "workout_Date": "20220104",
        "Completed": 1
    },
]

function WeeklyBar(props){
    const today = new Date().toDateString()
    const [dates,setDates] = useState(filteredData)
    const [errorMsg, setErrorMsg] = useState('')

    const updateWorkout = e =>{
         e.preventDefault()
        Promise.resolve('Task completed').then(value=>{
            axios
            .get('SomeUrl')
            .then(res=>setErrorMsg(res||value))
            .catch(err=>setErrorMsg(err.message))
        })
    }
    //on submit will sent a post to backend stating workout on today
    return(
        <>  
            <Tracker dates = {dates}/>
            <form onSubmit={updateWorkout}>
                <label>Did you workout today on {today}? </label>
                <input type='checkbox'/>
                <button>Submit</button>
            </form>
            <div>{errorMsg}</div>
        </>
    )
}
export default WeeklyBar