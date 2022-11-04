import './App.css';
import { useState, useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import Calendar from './components/Calendar'
import NavBar from './components/NavBar/NavBar';
import 'react-calendar/dist/Calendar.css';
import WorkoutLog from './components/WorkoutLog';
import Home from './components/HomePage/Home'
import Report from './components/Report/Report'

function App() {
  //grab data from backend for this week
  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <div className = 'title'>Working It Out</div>
      <div>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/calendar' element={<Calendar/>}/>
          <Route path = '/workoutlog' element ={<WorkoutLog/>}/>
          <Route path = '/report' element ={<Report/>}/>
        </Routes>
      </div>
      <NavBar/>
    </div>
  );
}

export default App;
