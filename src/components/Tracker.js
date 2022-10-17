import {useState} from 'react'
import TrackerDate from './TrackerDate'
import './Tracker.css'


function Tracker(props){

    const {dates} = props
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const [tracker, setTracker] = useState(dates)

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