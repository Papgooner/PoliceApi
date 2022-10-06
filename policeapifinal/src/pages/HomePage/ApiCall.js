import { useEffect } from "react";

useEffect(function ApiCall(props) {
    /* const api_url = "https://data.police.uk/api/forces/" + props.location; */
    const api_url = "https://data.police.uk/api/forces/leicestershire";
    async function fetchData(url) {
      const response = await fetch(url);
  
      var data = await response.json();
      console.log(data);
      props.onApiCallHandler(data);

    }
    fetchData(api_url);
  }
)

export default ApiCall;