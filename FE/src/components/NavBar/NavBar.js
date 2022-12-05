import { Link } from "react-router-dom";
import './NavBar.css'


function NavBar(props){
   


    return(
        <nav>
            <Link to='/' className = 'navBlock'>Home</Link>
            <Link to='/workoutlog' className = 'navBlock'>Workout Log</Link>
            <Link to='/spotify' className = 'navBlock'>Spotify</Link>
            <Link to='/report' className = 'navBlock'>Report</Link>
        </nav>
    )
}

export default NavBar