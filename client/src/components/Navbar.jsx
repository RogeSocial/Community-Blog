import "../styling/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="nav-title">Rabbit</h1>
        <input type="text" className="nav-search" placeholder="Search Rabbit" />
        <div className="nav-links">
            <a>POST</a>
            <a>Login</a>
            <a>Signup</a>
        </div>
    </nav>
  )
}

export default Navbar;