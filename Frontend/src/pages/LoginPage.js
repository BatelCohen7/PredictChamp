import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
