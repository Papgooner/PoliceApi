import NavBar from "../../NavBar";
import "./HomePage.css";
import { useState } from "react";
import DynamicButton from "./DynamicButtons";
import ApiCall from "./ApiCall";

function Home() {
    const [location, setLocation] = useState("avon-and-somerset");

    function handleClick(event) {
        let locationValue = event.target.value;
        setLocation(locationValue);
    }
    const [data, setData] = useState([]);

    function onApiCall(dataFromApi) {
      for (let i = 0; i < dataFromApi.length; i++) {
        console.log(dataFromApi[i])
      }
      console.log(dataFromApi);
      console.log(dataFromApi[0]);
      setData(dataFromApi);
    }
    
    const policeComponent = data?.map((pol) => <DynamicButton name={pol.name} id={pol.id} />)

    return (
        <div>
            <NavBar />
        <p>Home page</p>
        <ApiCall onApiCallHandler={onApiCall} />
        <button onClick={handleClick}>click</button>
        <p>{policeComponent}</p>
        </div>
    )
}

export default Home;