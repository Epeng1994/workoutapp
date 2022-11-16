import './TrackerDate.css'



function TrackerDate(props){
    const{exercise} = props

    return(
        <div className = {exercise===true? 'completed':'default'}>

        </div>
    )
}
export default TrackerDate