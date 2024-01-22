import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/account.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
  
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields.');
      return;
    }
  
    console.log('Submitting registration:', { name, email, password, confirmPassword });
  
    try {
      const response = await fetch('http://localhost:8080/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          authority: 'USER', // Set default authority to USER
        }),
      });
  
      console.log('Registration response:', response);
  
      if (response.ok) {
        console.log('Registration successful');
        window.location.href = '/login';
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };  

  return (
    <div className="account-container">
      <h2>Register account</h2>
      <form>
        <label>
          Full Name:
          <input type="text" className="input-field" onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
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
        <label>
          Confirm Password:
          <input type="password" className="input-field" onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br />
        <button className="account-button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login" className="account-link">Login here</Link>.
      </p>
    </div>
  );
}

export default RegisterPage;
