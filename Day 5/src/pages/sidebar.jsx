import { Navbar, Sidebar } from "rsuite";
import Login from Login;
const Login=()=>{
return (

    <div className="sidebar">
      {/*   This section should be at the top */}
      <div className="section">
        <div className="item">Messages</div>
        <div className="item">Friends</div>
        <div className="item">User Profile</div>
      </div>
      {/*   This section should be at the bottom */}
      <div className="section">
        <div className="item">Settings</div>
        <div className="item">Question?</div>
      </div>
    </div>
  );
}
export default Sidebar;
