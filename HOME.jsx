import {useNavigate} from "react-router-dom";

function Home(){

    const navigate=useNavigate();
    const goToAbout=()=>{
        navigate("/About")
    }
    return(
        <>
        <h1>welcome to home page!</h1>
        <button onClick={goToAbout}>Go To About</button>
        </>
    )
}
export default Home
