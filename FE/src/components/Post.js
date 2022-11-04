//User can edit whether he/she exercised this day via check box
//User has note section to make a post




function Post(props){
    const {date} = props

    const onChange = e =>{
        console.log(e.target.checked)
    }

    return(
        <div>
            <input placeholder='Enter here'/>
            <input type = 'checkbox' onChange = {onChange}/>
            {date}
            <button>Save</button>
            <button>Edit/Update</button>
        </div>
    )
}
export default Post