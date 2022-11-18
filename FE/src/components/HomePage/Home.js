

function Home(props){
    const {dates} = props;
    const currentTime = new Date().getHours();
    const currentTimeString = currentTime >= 0 && currentTime < 12 ? 'Morning' : currentTime >= 12 && currentTime < 18 ? 'Afternoon' : 'Evening'




    return(
        <>
            <div>
                <h1>Good {`${currentTimeString} ${'user'}`}</h1>
            </div>

        </>
    )
}
export default Home;