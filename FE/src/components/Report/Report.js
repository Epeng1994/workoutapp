import Plot from 'react-plotly.js';
import Tracker from '../Tracker/Tracker';
import {useState} from 'react';

const filteredData= [
    {
        "user_id": "1",
        "date": "2022-11-14",
    },
    {
        "user_id": "1",
        "date": "2022-11-15",
    },
    {
        "user_id": "1",
        "date": "2022-11-16"
    },
]

function currentWeekSet(){
    const day = new Date();
    let weekday = day.toDateString().split(' ')[0];
    let startDate = new Date(day.getTime());

    for(let i =1;i<7;i++){
        if(weekday === 'Sun')break;
        startDate.setDate(day.getDate()-i);
        weekday = startDate.toDateString().split(' ')[0];
    };

    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let dateSet = []
    for(let i=0;i<7;i++){
        const dateCopy = new Date(startDate.getTime());
        dateCopy.setDate(dateCopy.getDate() + i);
        dateSet.push(`${week[i]} ${dateCopy.toISOString().split('T')[0].substring(5)}`)
    }
    return dateSet;
};

function Report(){
    const [dates,setDates] = useState(filteredData)
    const [thisWeek, setThisWeek] = useState(currentWeekSet())
    
    return(
        <>
        <Tracker dates = {dates} thisWeek = {thisWeek}/>
        <Plot
            data={[{
                values: [75, 25],
                labels: ['Check In', 'No'],
                type: 'pie',
                textinfo: "label+percent",
                insidetextorientation: "radial"
              }]}
            layout={ {
                height: 400,
                width: 300
              } }
        />
        </>
    )
};

export default Report;
