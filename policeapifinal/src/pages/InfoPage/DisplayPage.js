import NavBar from "../../components/NavBar";
import "./DisplayPage.css";
import { useEffect } from "react";

function DisplayPage(props) {
    const saved = localStorage.getItem("completeUrl");
    console.log(saved);
    async function fetchData(url) {
        const response = await fetch(url);
        console.log("call made");
        var data = await response.json();
        console.log(data);
  
      }
      useEffect(() => {
        fetchData(saved)
      },[]);

    return (
        <div id="InfoPageDiv">
            <NavBar />
            <div id="InfoOutputsDiv">
        <p>This is the info page</p>
        </div>
        </div>
    )
}

export default DisplayPage;