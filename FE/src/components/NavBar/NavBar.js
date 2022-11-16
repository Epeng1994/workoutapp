import { Link } from "react-router-dom";
import react from 'react'
import './NavBar.css'


function NavBar(props){

    


    return(
        <div className = 'container'>
            <nav>
                <Link to='/' className = 'navBlock'>Home</Link>
                <Link to='/workoutlog' className = 'navBlock'>Workout Log</Link>
                <Link to='/calendar' className = 'navBlock'>Calendar</Link>
                <Link to='/report' className = 'navBlock'>Report</Link>
            </nav>
        </div>
    )
}

export default NavBar