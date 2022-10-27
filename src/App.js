import './App.css';
import { useState, useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import Calendar from './components/Calendar'
import NavBar from './components/NavBar/NavBar';
import 'react-calendar/dist/Calendar.css';
import WorkoutLog from './components/WorkoutLog';
import Home from './components/HomePage/Home'

function App() {

  const [dates,setDates] = useState([1,1,1,0,0,0,1])

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <div className = 'title'>Working It Out</div>
      <div>
        <Routes>
          <Route exact path = '/' element = {<Home dates={dates}/>}/>
          <Route path = '/calendar' element={<Calendar/>}/>
          <Route path = '/workoutlog' element ={<WorkoutLog/>}/>
        </Routes>
      </div>
      <NavBar/>
    </div>
  );
}

export default App;
