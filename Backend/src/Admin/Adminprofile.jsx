import React, { useState, useEffect } from 'react';
import './Adminprofile.css';
function AdminProfilePage() {
  // Define state variables for admin data
  const [adminData, setAdminData] = useState({});

  // Simulated fetch admin data from the server on component mount
  useEffect(() => {
    fetchAdminData();
  }, []);

  // Simulated fetch function for admin data
  const fetchAdminData = () => {
    // Fetch admin data from the server
    // Update the 'adminData' state with fetched data
    const fetchedAdminData = { 
      name: "Admin Name",
      email: "admin@example.com",
      role: "Admin",
      // Add more admin details as needed
    }; // Simulated fetched data
    setAdminData(fetchedAdminData);
  };

  return (
    <div className="admin-profile">
      <h1>Admin Profile</h1>
      <div>
        <label>Name:</label>
        <span>{adminData.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{adminData.email}</span>
      </div>
      <div>
        <label>Role:</label>
        <span>{adminData.role}</span>
      </div>
      {/* Add more admin details display here */}
    </div>
  );
}

export default AdminProfilePage;