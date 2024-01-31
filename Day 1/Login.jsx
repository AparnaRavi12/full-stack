import './Login.css';
import {Nav} from 'rsuite';
import {Link} from 'react-router-dom';
const Login=()=>{
  return (
    <form className="login">
      <p>Please login</p>
      <input type="text" placeholder="User Name" />
      <input type="password" placeholder="Password" />
      <input type="submit" defaultValue="Log In" />
      <div className="links">
        <a href="#">Forgot password</a>
        <Nav>
        <Nav.Item><Link to={'/Signup'}>Signup</Link></Nav.Item>
        </Nav>
        <a href="#">Signup</a>
      </div>
    </form>
  );
}
export default Login;