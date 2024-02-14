import React, { useState, useEffect } from 'react';
import { fetchData } from './api'; // assuming you have an API module to fetch data
import './Dashboardboat.css';
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData(); // fetchData is a function that fetches data from your API
      setData(result);
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            {/* Render other data fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
