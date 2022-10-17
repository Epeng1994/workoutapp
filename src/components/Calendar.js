import {useState} from 'react'
import Post from './Post'
import CalendarComp from 'react-calendar'


function Calendar(props){


    const [selectedDate, setSelectedDate] = useState('')

    const onChange = e => {
      setSelectedDate(JSON.stringify(e).substring(1,11))
    }
  
  
    return(
        <div>
            <CalendarComp className='calendar' onChange={onChange} maxDate = {new Date()}/>
            <Post date= {selectedDate}/>
        </div>
    )
}

export default Calendar