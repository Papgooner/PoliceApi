import "./FrontPage.css";

function RecentUpdate() {
  const api_url = "https://data.police.uk/api/crime-last-updated";

  async function getapi3(url) {
    const response = await fetch(url);

    var dateUpdated = await response.json();
    document.getElementById("date").innerHTML = dateUpdated.date;
  }
  getapi3(api_url);
  return (
    <div>
      <div className="Outputs">
          <br></br>
          <h3 className="UpdateText">The Police Api was last updated on: {" "}
          <p className="UpdateText" id="date"></p>
          </h3>
      </div>
      </div>
  )
}

export default RecentUpdate;