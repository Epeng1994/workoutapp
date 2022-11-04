import './TrackerDate.css'



function TrackerDate(props){
    const{exercise} = props

    return(
        <div className = {exercise===1? 'completed':'default'}>

        </div>
    )
}
export default TrackerDate