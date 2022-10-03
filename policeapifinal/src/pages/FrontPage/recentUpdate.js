import "./FrontPage.css";

function RecentUpdate() {
  const api_url = "https://data.police.uk/api/crime-last-updated";

  async function getapi3(url) {
    const response = await fetch(url);

    var data1 = await response.json();
    document.getElementById("date").innerHTML = data1.date;
  }
  getapi3(api_url);
  return (
    <div>
      <div className="Outputs">
          <br></br>
          <h3>The Police Api was last updated on: {""}
          <p id="date"></p>
          </h3>
      </div>
      </div>
  )
}

export default RecentUpdate;