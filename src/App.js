import './App.css';
import react, { useState, useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import Calendar from 'react-calendar'
import Post from './components/Post'
import User from './components/User'
import NavBar from './components/NavBar';
import Tracker from './components/Tracker';
import 'react-calendar/dist/Calendar.css';
import WeeklyBar from './components/WeeklyBar';


function App() {
  const [selectedDate, setSelectedDate] = useState('')

  const onChange = e => {
    setSelectedDate(JSON.stringify(e).substring(1,11))
  }


  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <User/>
      <NavBar/>
      <div>
        <Routes>
          <Route path = '/' element ={<Calendar className='calendar' onChange={onChange} maxDate = {new Date()}/>}/>
          <Route path = '/weeklybar' element ={<WeeklyBar dates = {[]}/>}/>
          <Route path = '/tracker' element ={<Tracker dates={[]}/>}/>
          <Route path = '/post' element ={<Post date= {selectedDate}></Post>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
