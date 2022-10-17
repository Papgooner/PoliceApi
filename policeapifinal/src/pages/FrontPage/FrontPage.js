import "./FrontPage.css";
import RecentUpdate from "./recentUpdate";
import NavBar from "../../components/NavBar";
import "./FrontPage.css";

function Front() {
    return (
        <div id="FrontpageDiv">
            <NavBar />
            <div id="FrontpageText">
                <h1 id="polH1">Police Api Web Application</h1>
                <h2 id="polH2">Made using the Uk Police Api</h2>
                <h3 id="polH3">The Police Api documentation can be found at{" "}
                    <a href="https://data.police.uk/docs/" className="DocumentationLink">
                        https://data.police.uk/docs/
                    </a>
                </h3>
                <RecentUpdate />
            </div>
        </div>
    )
}

export default Front; 