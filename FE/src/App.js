import './App.css';
import { useState, useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'react-calendar/dist/Calendar.css';
import WorkoutLog from './components/WorkoutLog/WorkoutLog.js';
import Home from './components/HomePage/Home';
import Report from './components/Report/Report';
import Spotify from './components/SpotifyPage/Spotify';

function App() {
  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/workoutlog' element ={<WorkoutLog/>}/>
          <Route path = '/spotify' element ={<Spotify/>}/>
          <Route path = '/report' element ={<Report/>}/>
        </Routes>
      </div>
      <NavBar/>
    </div>
  );
}

export default App;
