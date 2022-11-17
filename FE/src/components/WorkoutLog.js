import {useState} from 'react';
import Tracker from './Tracker/Tracker';
import axios from 'axios';

const filteredData= [
    {
        "user_id": "1",
        "date": "2022-11-14",
    },
    {
        "user_id": "1",
        "date": "2022-11-15",
    },
    {
        "user_id": "1",
        "date": "2022-11-16"
    },
]

function WeeklyBar(props){
    const today = new Date().toISOString().split('T')[0]
    const [dates,setDates] = useState(filteredData)
    const [thisWeek, setThisWeek] = useState(currentWeekSet())
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

    function currentWeekSet(){
        const day = new Date();
        let weekday = day.toDateString().split(' ')[0];
        let startDate = new Date(day.getTime());

        for(let i =1;i<7;i++){
            if(weekday === 'Sun')break;
            startDate.setDate(day.getDate()-i);
            weekday = startDate.toDateString().split(' ')[0];
        };

        let dateSet = []
        for(let i=0;i<7;i++){
            const dateCopy = new Date(startDate.getTime());
            dateCopy.setDate(dateCopy.getDate() + i);
            dateSet.push(dateCopy.toISOString().split('T')[0])
        }
        return dateSet;
    };

    return(
        <>  
        <Tracker dates = {dates} thisWeek = {thisWeek}/>
        <form onSubmit={updateWorkout}>
            <button>Check in for {today}</button>
        </form>
        {message ? <div>{message}</div>: null}
        <button onClick = {()=>currentWeekSet()}>Day</button>
        </>
    )
}
export default WeeklyBar
