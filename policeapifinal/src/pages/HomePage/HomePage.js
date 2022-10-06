import NavBar from "../../NavBar";
import "./HomePage.css";
import { useState, useEffect } from "react";
import DynamicButton from "./DynamicButtons";
import ApiCall from "./ApiCall";

function Home() {
    const [location, setLocation] = useState("avon-and-somerset");
    const placeHolder = [
        {name: "London Police", id: "London",}
    ]
    function handleClick(event) {
        let locationValue = event.target.value;
        setLocation(locationValue);
        console.log(location)
    }
    const [data, setData] = useState(placeHolder)

    function onApiCall(dataFromApi) {
      console.log(dataFromApi);
      for (let i = 0; i < dataFromApi.length; i++) {
        console.log(dataFromApi[0])
      }
      let dataArray = [dataFromApi];
      setData(dataArray);
    }
    
    const policeComponent = data?.map((pol) => <DynamicButton key={pol.id} name={pol.name} id={pol.id} />)

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