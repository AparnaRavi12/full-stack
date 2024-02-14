




import './Login.css';
import {Nav} from 'rsuite';
import {Link} from 'react-router-dom';
const Login=()=>{
  return (
    <form className="login">
      <p>Please login</p>
      <input type="text" placeholder="User Name" />
      <input type="password" placeholder="Password" />
      {/* <input type="submit" defaultValue="Log In" /> */}
      <Link to={'/home'}>Log In</Link>
      <div className="links">
        <a href="#">Forgot password</a>
        <Nav>
        <Nav.Item><Link to={'/Signup'}>Signup</Link></Nav.Item>
        </Nav>
        
      </div>
    </form>
  );
}
export default Login;