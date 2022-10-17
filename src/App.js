import './App.css';
import react, { useState, useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import Calendar from './components/Calendar'
import User from './components/User'
import NavBar from './components/NavBar';
import Tracker from './components/Tracker';
import 'react-calendar/dist/Calendar.css';
import WeeklyBar from './components/WeeklyBar';


function App() {

  const [dates,setDates] = useState([1,1,1,0,0,0,1])

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <User/>
      <NavBar/>
      <div>
        <Routes>
          <Route path = '/calendar' element={<Calendar/>}/>
          <Route path = '/weeklybar' element ={<WeeklyBar dates = {[]}/>}/>
          <Route path = '/tracker' element ={<Tracker dates={dates}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
