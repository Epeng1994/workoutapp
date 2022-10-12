import './App.css';
import react, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'

function App() {
  const today = new Date().today()
  const [selectedDate, setSelectedDate] = useState()
  const onChange = e => {
    setSelectedDate(e)
  }
  return (
    <div className="App">
      <Calendar className='calendar' onChange={onChange} />
      <div>{selectedDate}</div>
    </div>
  );
}

export default App;
