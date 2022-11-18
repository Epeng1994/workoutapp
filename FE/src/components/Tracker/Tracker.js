import {useState, useEffect} from 'react'
import './Tracker.css'

function scheduleBuilder(weekArray, dataArray){
    let dataToMap = [];
    let dateSet = new Set()
    for(let date of dataArray){
        dateSet.add(date.date)
    }
    for(let i = 0;i<7;i++){
        let currentDate = weekArray[i]
        if(dateSet.has(currentDate)){
            dataToMap.push(true)
        }else{
            dataToMap.push(false)
        }
    }
    return dataToMap;
}

function Tracker(props){
    const {dates, thisWeek} = props
    const [tracker, setTracker] = useState([])
    
    useEffect(()=>{
        setTracker(scheduleBuilder(thisWeek,dates))
    },[])

    return(
        <div  >
            <div className = 'weekday'>
                {
                    thisWeek.map(a=>{
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
                                <div className = {a===true? 'completed':'default'}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Tracker