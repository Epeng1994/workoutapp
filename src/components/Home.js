import Tracker from './Tracker';



function Home(props){
    const {dates} = props
    return(
        <div>
            <Tracker dates = {dates}/>
        </div>
    )
}
export default Home;