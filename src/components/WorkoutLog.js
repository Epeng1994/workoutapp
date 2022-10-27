function WeeklyBar(props){
    const today = new Date().toDateString()
    const updateWorkout = e =>{
        console.log(e.target)
        e.preventDefault()
    }

    return(
        <>
            Form to log work out
            <form onSubmit={updateWorkout}>
                <label>Did you workout today on {today}? </label>
                <input type='checkbox'/>
                <button>Submit</button>
            </form>
        </>
    )
}
export default WeeklyBar