import './App.css';
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import WorkoutLog from './components/WorkoutLog/WorkoutLog.js';
import Home from './components/HomePage/Home';
import Report from './components/Report/Report';
import Spotify from './components/SpotifyPage/Spotify';
import Timer from './components/Timer/Timer';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/workoutlog' element ={<WorkoutLog/>}/>
          <Route path = '/spotify' element ={<Spotify/>}/>
          <Route path = '/timer' element ={<Timer/>}/>
          <Route path = '/report' element ={<Report/>}/>
        </Routes>
      </div>
      <NavBar/>
    </div>
  );
}

export default App;
