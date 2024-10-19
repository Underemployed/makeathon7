import React, { useState } from 'react';
import './SignUp.css'; // Optional styling for signup

const SignUp = () => {
  const [name, setName] = useState(''); // State for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      console.log('Name:', name); // Logging name
      console.log('Email:', email);
      console.log('Password:', password);
      // Add sign-up logic here, like API call
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text"  // Corrected input type for Name
            value={name} 
            onChange={(e) => setName(e.target.value)} // Set name state
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
        </div>
        <button type="button" className="btn" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
