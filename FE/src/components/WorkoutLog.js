import {useState} from 'react';
import Tracker from './Tracker/Tracker';
import axios from 'axios';

const filteredData= [
    {
        "user_id": "1",
        "date": "2022-11-10",
    },
    {
        "user_id": "2",
        "date": "2022-11-12",
    },
    {
        "user_id": "1",
        "date": "2022-11-14"
    },
]

function WeeklyBar(props){
    const today = new Date().toDateString()
    const [dates,setDates] = useState(filteredData)
    const [errorMsg, setErrorMsg] = useState('')

    const updateWorkout = e =>{
         e.preventDefault()

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