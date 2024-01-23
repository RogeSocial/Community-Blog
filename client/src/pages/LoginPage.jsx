/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/account.css';
import { useAuth } from '../GlobalContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.text();
      console.log(responseData);

      if (response.ok) {
        console.log('Token:', responseData);
        login(responseData); // Use the login function from the useAuth hook
        window.location.href = '/';
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };  

  return (
    <div className="account-container">
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" className="input-field" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" className="input-field" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className="account-button" onClick={handleLogin}>
        Sign in
      </button>
      <p>
        Don't have an account? <Link to="/register" className="account-link">Register here</Link>.
      </p>
    </div>
  );
}

export default LoginPage;
