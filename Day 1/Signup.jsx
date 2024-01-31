import React from 'react';
import './Signup.css'; // Import your Signup CSS file

const Signup = () => {
  return (
    <form className="signup">
      <p>Create an Account</p>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <input type="submit" value="Sign Up" />
      <div className="links">
        <a href="#">Already have an account? Log in</a>
      </div>
    </form>
  );
}

export default Signup;
