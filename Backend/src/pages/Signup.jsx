import React from 'react';
import './Signup.css'; // Import your Signup CSS file
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <form className="signup">
      <p>Create an Account</p>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <Link to={'/home'}>SignUp</Link>
      <div className="links">
      <Link to={'/login'}>log in</Link>
        
      </div>
    </form>
  );
}

export default Signup;
