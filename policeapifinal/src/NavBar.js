import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link className="NavLinks" to="/">Front Page</Link>
            <Link className="NavLinks" to="/Home">Dashboard</Link> 
        </nav>
    )
}

export default NavBar;