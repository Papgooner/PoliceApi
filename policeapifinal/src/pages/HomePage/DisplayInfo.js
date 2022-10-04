import { useState } from "react";

function DisplayInfo(props) {
    const [displayName, setDisplayName] = useState();
    const [displayDescription, setDisplayDescription] = useState();
    const [displayUrl, setDisplayUrl] = useState();
    const [bruh, setBruh] = useState();

    const api_url = "https://data.police.uk/api/forces/" + props.location;
    console.log(api_url);
    async function apiCall(url) {
        console.log(url);
        const response = await fetch(url);
        var recieved = await response.json();
        setDisplayName(recieved.name);
        setDisplayDescription(recieved.description);
        setDisplayUrl(recieved.url);
        setBruh("yooo");
    }
    apiCall(api_url);
    return (
        <div>
        <div className="Outputs">
            <br></br>
        <p className="title" id="Name">{displayName}</p>
        <p className="titles" id="Description">{displayDescription}</p>
        <p className="titles" id="URL">{displayUrl}</p>
        <p className="titles" id="bruh">{bruh}</p>
        </div>
        </div>
    )
}

export default DisplayInfo;