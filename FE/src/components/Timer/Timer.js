import { useState, useEffect } from 'react';
import './Timer.css';

function Timer(props){
    const [time, setTime] = useState(0);
    const [lap, setLaps] = useState([])
    const [mode,setMode] = useState('Start')
    const [timer,setTimer] = useState(false)

    useEffect(()=>{
        if(timer){
            const interval = setInterval(() => {
                setTime(time=>time+1);
              }, 10);
              return () => clearInterval(interval);
        }
    },[timer])

    const modeChange = e =>{
        const {value}=e.target
        if(value==='Start'||value==='Resume'){
            setMode('Stop')
            setTimer(true)
        }else if(value==='Stop'){
            setMode('Resume')
            setTimer(false)
        }
    }

    const resetTimer = e =>{
        setMode('Start')
        setTime(0)
        setLaps([])
        setTimer(false)
    }

    const addLap = e =>{
        setLaps([time,...lap,])
    }

    return(
        <>
            <div>{(Math.floor(time/360000)%24<10?'0':'') + Math.floor(time/360000)%24}:{(Math.floor(time/6000)%60<10?'0':'') + Math.floor(time/6000)%60}:{(Math.floor(time/100)%60 < 10? `0`:'')+Math.floor(time/100)%60}:{(time%100 < 10? `0`:'')+time%100}</div>
            <button value = {mode} onClick = {e=>modeChange(e)}>{mode}</button>
            {
                time === 0 ? '' : timer===true ? <button onClick = {addLap}>Lap</button> : <button onClick = {resetTimer}>Reset</button>
            }
            
            <div className = 'lapContainer'>
                {lap.map((time,iterate)=>{
                    return(
                        <div>{lap.length-iterate} {(Math.floor(time/360000)%24<10?'0':'') + Math.floor(time/360000)%24}:{(Math.floor(time/6000)%60<10?'0':'') + Math.floor(time/6000)%60}:{(Math.floor(time/100)%60 < 10? `0`:'')+Math.floor(time/100)%60}:{(time%100 < 10? `0`:'')+time%100}</div>
                    )
                })}
            </div>
        </>
    );
};

export default Timer;
