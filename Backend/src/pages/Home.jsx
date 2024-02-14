import CustomNavbar from "../Components/CustomNavbar"
import './Home.css';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className="container">
      <header>
        <CustomNavbar/>
      </header>
      <div className="cu_body">
      <h2 className="fade-in">  </h2>
      <div id="content" className="fade-in-2">
        <ul type="none">
          <li><Link to={'/explore'}>Explore</Link></li>
          <li><Link to={'/add'}>Add Booking</Link></li>
          <li><Link to={'/delete'}>Delete Booking</Link></li>
          {/* <li><Link to={'/admin'}>Admin</Link></li> */}
        </ul> 
      </div>
      <div className="banner-text">
            <h1>WATERFRONT RETREAT BOOKING</h1>
            <p>"AquaVoyage" suggests a water-related activity or service, possibly related to boating, water sports, or marine tourism. "Cloudport" appended to it may imply a cloud-based platform or service related to AquaVoyage, possibly for booking, managing, or providing information about water-related activities, rentals, or tours.Online Booking: Users can book boat rentals, tours, or other aquatic activities through the platform.Information Hub: Providing details about destinations, activities, safety guidelines, and more.Management Tools: For businesses in the water tourism sector, offering tools to manage bookings, schedules, and customer interactions.</p>
      <div className="footer">
      </div>
      </div>
    </div>
    </div>
  );
}
export default Home;