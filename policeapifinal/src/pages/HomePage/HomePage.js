import NavBar from "../../NavBar";
import "./HomePage.css";
import { useState } from "react";
import DynamicButton from "./DynamicButtons";
import ApiCall from "./ApiCall";

function Home() {

    const [data, setData] = useState([]);

    function onApiCall(dataFromApi) {
      setData(dataFromApi);
    }

    function getValue(thing) {
      console.log(thing);
    }
    
    /* Key might need to be reworked, as Key value is the same as id value */
    const policeComponent = data?.map((pol) => <DynamicButton getValueHandler={getValue} key={pol.id} name={pol.name} id={pol.id} />)

    return (
        <div id="HomepageDiv">
            <NavBar />
        <ApiCall onApiCallHandler={onApiCall} />
        <div id="OutputDiv">
            <div id="TitleDiv">
        <p id="Title">Choose a police department</p>
        </div>
        <>{policeComponent}</>
        </div>
        </div>
    )
}

export default Home;