import {useState} from 'react'
import TrackerDate from './TrackerDate'



function Tracker(props){

    const {dates} = props

    const [tracker, setTracker] = useState(dates)

    return(
        <div>
            {
                tracker.map(a=>{
                    return(
                        <TrackerDate/>
                    )
                })
            }
        </div>
    )
}
export default Tracker