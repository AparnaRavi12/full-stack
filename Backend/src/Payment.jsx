import { Button } from 'rsuite';
import './Payment.css';
import {Link} from 'react-router-dom';
const Payment = () => {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Payment</title>
          <link rel="stylesheet" href="styles.css" />
          <h1>Payment</h1>
          <form id="paymentForm" action="process_payment.php" method="POST">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required /><br />
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required /><br />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" maxLength={3} required /><br />
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input type="text" id="nameOnCard" name="nameOnCard" required /><br />
            <label htmlFor="billingAddress">Billing Address:</label>
            <textarea id="billingAddress" name="billingAddress" required defaultValue={""} /><br />
            <input type="submit" defaultValue="Pay Now" />
            <Button><Link to={'/h'}>History</Link></Button>
          </form>
        </div>
      );
    }
export default Payment