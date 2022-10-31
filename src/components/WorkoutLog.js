import {useState} from 'react';
import Tracker from './Tracker';
import axios from 'axios';




function WeeklyBar(props){
    const today = new Date().toDateString()
    const [dates,setDates] = useState([1,1,1,0,0,0,1])
    const [errorMsg, setErrorMsg] = useState('')

    const updateWorkout = e =>{
        console.log(e.target)
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
            Form to log work out
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