/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styling/account.css';

function LoginPage() {
  return (
    <div className="account-container">
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" className="input-field" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" className="input-field" />
      </label>
      <br />
      <button className="account-button">Sign in</button>
      <p> 
      Don't have an account? <Link to="/register" className="account-link">Register here</Link>.
      </p>
    </div>
  );
}

export default LoginPage;
