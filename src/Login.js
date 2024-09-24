import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the black and white theme styles

const Login = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with your own validation logic
    if (username === 'admin' && password === 'admin123') { // Check for admin credentials
      setIsAdmin(true); // Set admin state
      navigate('/admin', { state: { adminName: username } }); // Pass the admin name to the AdminPage
    } else {
      setError('Incorrect Username or Password');
    }
  };

  return (
    <div className="loginpage">
      <div className="logincontainer">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Enter Admin Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>} {/* Display error if login fails */}
      </div>
    </div>
  );
};

export default Login;
