import { Link } from "react-router-dom";
import react from 'react'


function NavBar(props){

    


    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/weeklybar'>Weekly Bar</Link>
            <Link to='/'>Calendar</Link>
            <Link to='/report'>Report</Link>
        </div>
    )
}

export default NavBar