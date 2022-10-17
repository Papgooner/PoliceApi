import NavBar from "../../components/NavBar";
import "./DisplayPage.css";
import { useEffect } from "react";

function DisplayPage() {

  const saved = localStorage.getItem("completeUrl");
  console.log(saved);

  async function fetchData(url) {
    const response = await fetch(url);
    console.log("call made");
    let res = await response.json();
    /** Attempting to display res using state makes html tags appear, elementById hides tags */
    document.getElementById("Name").innerHTML = res.name;
    document.getElementById("Description").innerHTML = res.description;
    document.getElementById("Telephone").innerHTML = res.telephone;
    document.getElementById("Url").innerHTML = res.url;
  }

  useEffect(() => {
    fetchData(saved)
  }, []);

  return (
    <div id="InfoPageDiv">
      <NavBar />
      <div id="InfoOutputsDiv">
        <h1 className="infoOutputs" id="Name"></h1>
        <p className="infoOutputs" id="Description"></p>
        <p className="infoOutputs" id="Telephone"></p>
        <p className="infoOutputs" id="Url"></p>
      </div>
    </div>
  )
}

export default DisplayPage;