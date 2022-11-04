import Plot from 'react-plotly.js';


function Report(){

    //pull in state from store and use to populate Plotly graph

    return(
        <>
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
/*
    % of days worked out for this month


*/