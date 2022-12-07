import { useState, useEffect } from 'react';


function Timer(props){
    const [time, setTime] = useState(0);



    return(
        <>
            {time}
            <button>Start/Resume/Stop</button>
            <button>Lap/Reset</button>
            {
                //use array to track user lap time, max 5?
            }
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