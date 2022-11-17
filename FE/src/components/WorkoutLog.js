import {useState} from 'react';
import Tracker from './Tracker/Tracker';
import axios from 'axios';

const filteredData= [
    {
        "user_id": "1",
        "date": "2022-11-14",
    },
    {
        "user_id": "2",
        "date": "2022-11-16",
    },
    {
        "user_id": "1",
        "date": "2022-11-16"
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

    const currentWeek = e =>{
        const day = new Date();
        let weekday = day.toDateString().split(' ')[0];
        let startDate = new Date(day.getTime());

        for(let i =1;i<7;i++){
            if(weekday === 'Sun')break;
            startDate.setDate(day.getDate()-i);
            weekday = startDate.toDateString().split(' ')[0];
        };
        //console.log(startDate)
        return startDate;
    };




    return(
        <>  
            <Tracker dates = {dates}/>
            <form onSubmit={updateWorkout}>
                <label>Check in for {today}</label>
                <button>Submit</button>
            </form>
            <div>{errorMsg}</div>
            {message ? <div>{message}</div>: null}
            <button onClick = {()=>currentWeek()}>Day</button>
        </>
    )
}
export default WeeklyBar
