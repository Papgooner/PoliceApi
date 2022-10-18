import { useEffect } from "react";

function ApiCall(props) {
  /* const api_url = "https://data.police.uk/api/forces/" + props.location; */
  const api_url = "https://data.police.uk/api/forces";
  async function fetchData(url) {
    const response = await fetch(url);
    var data = await response.json();
    props.onApiCallHandler(data);

  }
  useEffect(() => {
    fetchData(api_url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default ApiCall;