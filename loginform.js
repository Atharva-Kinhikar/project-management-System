// LoginForm.js
import React from 'react';
import useLogin from './useLogin';

const LoginForm = () => {
  const {
    isLoggedIn,
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
  } = useLogin();

  if (isLoggedIn) {
    // Redirect to dashboard or conditionally render it
    window.location.href = '/dash';
  }

  return (
    <form id="login-form" onSubmit={handleLogin}>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <a href="#" className="forgot">
        Forgot password?
      </a>
      <p id="error-message" className="error">
        {errorMessage}
      </p>
    </form>
  );
};

export default LoginForm;