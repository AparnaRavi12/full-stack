//import CustomNavbar from "../Components/CustomNavbar"
//import './Home.css';
import './AddBooking.css';
const AddBooking = () => {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Boating House Booking</title>
          <link rel="stylesheet" href="styles.css" />
          <h1>Book a Boating House</h1>
          <form id="bookingForm" action="submit_booking.php" method="POST">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required /><br />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required /><br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required /><br />
            <label htmlFor="duration">Duration (hours):</label>
            <input type="number" id="duration" name="duration" min={1} required /><br />
            <input type="submit" defaultValue="Book Now" />
          </form>
        </div>
      );
    }
export default AddBooking