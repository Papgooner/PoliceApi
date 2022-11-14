import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link className="NavLinks" to="/">Home</Link>
            <Link className="NavLinks" to="/Home">Dashboard</Link>
        </nav>
    )
}

export default NavBar;