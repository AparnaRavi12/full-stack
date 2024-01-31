return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>User Profile</title>
      <link rel="stylesheet" href="styles.css" />
      <h1>User Profile</h1>
      <div className="user-details">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <h2>Booking History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Boat</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-01-28</td>
              <td>Boat #123</td>
              <td>2 hours</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}