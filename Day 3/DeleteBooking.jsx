//import CustomNavbar from "../Components/CustomNavbar"
import './DeleteBooking.css';
const DeleteBooking = () => {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Delete Booking</title>
          <link rel="stylesheet" href="styles.css" />
          <h1>Delete Booking</h1>
          <form id="deleteForm" action="delete_booking.php" method="POST">
            <label htmlFor="bookingID">Booking ID:</label>
            <input type="text" id="bookingID" name="bookingID" required /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />
            <input type="submit" defaultValue="Delete Booking" />
          </form>
        </div>
      );
    }
export default DeleteBooking