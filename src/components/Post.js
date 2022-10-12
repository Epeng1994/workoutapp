function Post(props){
    const {date} = props

    const onChange = e =>{
        console.log(e.target.checked)
    }

    return(
        <div>
            <input/>
            <input type = 'checkbox' onChange = {onChange}/>
            {date}
            <button>Save</button>
            <button>Edit/Update</button>
        </div>
    )
}
export default Post