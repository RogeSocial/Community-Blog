import "../styling/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/"><h1 className="nav-title">Rabbit</h1></Link>
        <input type="text" className="nav-search" placeholder="Search Rabbit" />
        <div className="nav-links">
            <a>POST</a>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
  )
}

export default Navbar;