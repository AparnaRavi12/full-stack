import React, { useState, useEffect } from 'react';

function AdminViewBoatPage() {
  // Define state variables for boat data
  const [boats, setBoats] = useState([]);

  // Simulated fetch boats data from the server on component mount
  useEffect(() => {
    fetchBoatsData();
  }, []);

  // Simulated fetch function for boats data
  const fetchBoatsData = () => {
    // Simulated data
    const fetchedBoats = [
      { id: 1, name: 'Boat 1', type: 'Sailboat', capacity: 6 },
      { id: 2, name: 'Boat 2', type: 'Yacht', capacity: 10 },
      { id: 3, name: 'Boat 3', type: 'Fishing Boat', capacity: 4 },
      { id: 3, name: 'Boat 4', type: 'Motorboat', capacity: 7 },
      { id: 3, name: 'Boat 5', type: 'Pontoon Boat', capacity: 9 },
      { id: 3, name: 'Boat 6', type: 'Kayaks and Canoes', capacity: 3 },
      { id: 3, name: 'Boat 7', type: 'Catamarans', capacity: 12 },
      { id: 3, name: 'Boat 8', type: 'Dinghies', capacity: 17 },
      { id: 3, name: 'Boat 9', type: 'Houseboats', capacity:  5 },
      { id: 3, name: 'Boat 10', type: 'Personal Watercraft', capacity:  8 }
    ];
    setBoats(fetchedBoats);
  };

  return (
    <div className="admin-view-boat">
      <h1>Admin ViewBoat</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {boats.map((boat) => (
            <tr key={boat.id}>
              <td>{boat.id}</td>
              <td>{boat.name}</td>
              <td>{boat.type}</td>
              <td>{boat.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminViewBoatPage;
