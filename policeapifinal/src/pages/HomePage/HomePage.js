import NavBar from "../../NavBar";
import "./HomePage.css";
import { useState } from "react";
import DynamicButton from "./DynamicButtons";
import ApiCall from "./ApiCall";

function Home() {

    const [data, setData] = useState([]);

    function onApiCall(dataFromApi) {
      for (let i = 0; i < dataFromApi.length; i++) {
        console.log(dataFromApi[i])
      }
      console.log(dataFromApi);
      console.log(dataFromApi[0]);
      setData(dataFromApi);
    }

    function getValue(thing) {
      console.log(thing);
    }
    
    const policeComponent = data?.map((pol) => <DynamicButton getValueHandler={getValue} name={pol.name} id={pol.id} />)

    return (
        <div id="HomepageDiv">
            <NavBar />
        <ApiCall onApiCallHandler={onApiCall} />
        <div id="OutputDiv">
            <div id="TitleDiv">
        <p id="Title">Home page</p>
        </div>
        <>{policeComponent}</>
        </div>
        </div>
    )
}

export default Home;