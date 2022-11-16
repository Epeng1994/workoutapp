import {useState, useEffect} from 'react'
import TrackerDate from './TrackerDate'
import './Tracker.css'



function scheduleBuilder(startDate, dataArray){
    const today = new Date(startDate)

    let calendarWeek = new Set();

    for(let data of dataArray){
        calendarWeek.add(data.date)
    }

    let dataToMap = [];
    for(let i = 6;i>=0;i--){
        const dateCopy = new Date(today.getTime());
        dateCopy.setDate(dateCopy.getDate() - i);
        let check = dateCopy.toISOString().split('T')[0]
        calendarWeek.has(check) ? dataToMap.push(true) : dataToMap.push(false)
    }
    return dataToMap;
}


function Tracker(props){
    const today = new Date().toISOString().split('T')[0]
    const {dates} = props
    const [selectedDate,setSelectedDate] = useState('')
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const [tracker, setTracker] = useState([])
    
    useEffect(()=>{
        setTracker(scheduleBuilder(today,dates))
    },[dates])


    return(
        <div  >
            <div className = 'weekday'>
                {
                    week.map(a=>{
                        return(
                            <div>
                                {a}
                            </div>
                        )
                    })
                }
            </div>

            <div className = 'tracker'>
                {
                    tracker.map(a=>{
                        return(
                            <div>
                                <TrackerDate exercise={a}/>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}
export default Tracker