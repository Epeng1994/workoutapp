import './App.css';
import react, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import Post from './components/Post'
import User from './components/User'
import NavBar from './components/NavBar';
import Tracker from './components/Tracker';
import 'react-calendar/dist/Calendar.css';



function App() {
  const today = new Date().getDate()
  const [selectedDate, setSelectedDate] = useState('')
  const onChange = e => {
    setSelectedDate(JSON.stringify(e).substring(1,11))
  }
  return (
    <div className="App">
      <User/>
      <NavBar/>
      <Calendar className='calendar' onChange={onChange}/>
      <Tracker dates={[]}/>
      <Post date= {selectedDate}></Post>
    </div>
  );
}

export default App;
