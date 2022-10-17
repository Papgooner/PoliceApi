import NavBar from "../../components/NavBar";
import "./HomePage.css";
import { useState } from "react";
import DynamicButton from "./DynamicButtons";
import ApiCall from "./ApiCall";
import { Navigate } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);

    function onApiCall(dataFromApi) {
      setData(dataFromApi);
    }

    function getValue(thing) {
      console.log(thing);
      let first = "https://data.police.uk/api/forces/";
      let complete = first + thing;
      localStorage.setItem("completeUrl", complete)
      console.log(complete);
      setIsShown(true);
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
        {isShown && (
          <Navigate to="/Info" />
        )}
        </div>
        </div>
    )
}

export default Home;