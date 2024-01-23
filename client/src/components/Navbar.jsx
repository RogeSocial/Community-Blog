import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
import { useAuth } from '../GlobalContext';

function Navbar() {
  const { token, logout } = useAuth(); // Use the useAuth hook to get the token and logout function

  return (
    <nav className="navbar">
      <Link to="/" className="nav-title">
        <h1>Rabbit</h1>
      </Link>
      <input type="text" className="nav-search" placeholder="Search Rabbit" />
      <div className="nav-links">
        <Link to="/create-post" className="nav-links">POST</Link>
        {token ? (
          // If the user is logged in, show the "Sign Out" link
          <button className="sign-out-button" onClick={logout}>
            Sign Out
          </button>
        ) : (
          // If the user is not logged in, show the "Login" and "Register" links
          <>
            <Link to="/login" className="nav-links">Login</Link>
            <Link to="/register" className="nav-links">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;