import NavBar from "../../components/NavBar";
import "./DisplayPage.css";
import { useEffect, useState } from "react";

function DisplayPage() {
  const [forceUrl, setForceUrl] = useState();

  const saved = localStorage.getItem("completeUrl");

  async function fetchData(url) {
    const response = await fetch(url);
    let res = await response.json();
    /** Attempting to display res using state makes html tags appear, elementById hides tags */
    document.getElementById("Name").innerHTML = res.name;
    document.getElementById("Description").innerHTML = res.description;
    document.getElementById("Telephone").innerHTML = res.telephone;
    setForceUrl(res.url)
    /* document.getElementById("Url").innerHTML = res.url; */
  }

  useEffect(() => {
    fetchData(saved)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="InfoPageDiv">
      <NavBar />
      <div id="InfoOutputsDiv">
        <p className="infoOutputs" id="Name"></p>
        <p className="infoOutputs" id="Description"></p>
        <label className="telephoneLabel" htmlFor="Telephone">Non-Emergency Number:
          <p className="telephoneNum" id="Telephone"></p>
        </label>
        <a className="DocumentationLink" href={forceUrl} id="Url">{forceUrl}</a>
      </div>
    </div>
  )
}

export default DisplayPage;