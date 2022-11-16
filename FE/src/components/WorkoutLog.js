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
    const today = new Date().toISOString().split('T')[0]
    const [dates,setDates] = useState(filteredData)
    const [errorMsg, setErrorMsg] = useState('')
    const [message,setMessage] = useState('')

    const updateWorkout = e =>{
        e.preventDefault()
        axios.post('http://localhost:9000/data/users/1',{user_id:1,date:today})
            .then(res=>{
                setMessage(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    //on submit will sent a post to backend stating workout on today
    return(
        <>  
            <Tracker dates = {dates}/>
            <form onSubmit={updateWorkout}>
                <label>Check in for {today}</label>
                <button>Submit</button>
            </form>
            <div>{errorMsg}</div>
            {message ? <div>{message}</div>: null}
        </>
    )
}
export default WeeklyBar