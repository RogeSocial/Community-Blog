import { Link } from 'react-router-dom';
import '../styling/account.css';

function RegisterPage() {
  return (
    <div className="account-container">
      <h2>Register account</h2>
      <label>
        Full Name:
        <input type="text" className="input-field" />
      </label>
      <br />
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
      <label>
        Confirm Password:
        <input type="password" className="input-field" />
      </label>
      <br />
      <button className="account-button">Register</button>
      <p>
        Already have an account? <Link to="/login" className="account-link">Login here</Link>.
      </p>
    </div>
  );
}

export default RegisterPage;
