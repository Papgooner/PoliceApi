import NavBar from "../../NavBar";
import "./HomePage.css";
import DisplayInfo from "./DisplayInfo";
import { useState } from "react";

function Home() {
    const [location, setLocation] = useState("avon-and-somerset");
    function handleClick(event) {
        let locationValue = event.target.value;
        setLocation(locationValue);
        console.log(location)
    }

    return (
        <div>
            <NavBar />
        <p>Home page</p>
        <button value="leicestershire" onClick={handleClick}>Leicestershire</button>
        <button value="Derby" onClick={handleClick}>Derby</button>
        <DisplayInfo location={location} />
        </div>
    )
}

export default Home;