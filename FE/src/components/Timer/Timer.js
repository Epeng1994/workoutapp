import { useState, useEffect } from 'react';


const dummyLaps = [
    100,
    6000,
    36000
]


function Timer(props){
    const [time, setTime] = useState(0);
    const [lap, setLaps] = useState(dummyLaps)
    const [mode,setMode] = useState('Start')

    useEffect(()=>{

    },[mode])


    const modeChange = e =>{
        const {value}=e.target
        setMode(value)
    }

    const resetTimer = e =>{
        setMode('Start')
    }

    return(
        <>
            {time}
            <button value = {mode === 'Start' ? 'Stop' : mode === 'Stop' ? 'Resume' : 'Stop'} onClick = {e=>modeChange(e)}>{mode}</button>
            <button onClick = {resetTimer}>Lap/Reset</button>

        </>
    );
};

export default Timer;
/*
    display HH:MM:SS
    Start/Stop
    Reset
    Lap
*/