import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  const handleSignUpSuccess = () => {
    alert('Sign up successful!');
  };

  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
    </div>
  );
};

export default SignUpPage;
