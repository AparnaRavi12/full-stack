//import CustomNavbar from "../Components/CustomNavbar"
import { Button } from 'rsuite';
import './Viewallboats.css';
const Viewallboats = () => {
return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>View All Boats</title>
      <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n            margin: 0;\n            padding: 0;\n        }\n\n        .container {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color: #fff;\n            border-radius: 5px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n\n        h2 {\n            text-align: center;\n            color: #333;\n        }\n\n        .boat {\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            padding: 10px;\n            margin-bottom: 10px;\n            background-color: #f9f9f9;\n        }\n\n        .boat h3 {\n            margin-top: 0;\n        }\n\n        .boat p {\n            margin-bottom: 5px;\n        }\n    " }} />
      <div className="container">
        <h2>View All Boats</h2>
        <div className="boat">
          <h3>Boat 1</h3>
          <p>Type: Sailboat</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Price: $100</p>
        </div>
        <div className="boat">
          <h3>Boat 2</h3>
          <p>Type: Motorboat</p>
          <p>Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Price: $200</p>
        </div>
        <div className="boat">
          <h3>Boat 3</h3>
          <p>Type: Yachts</p>
          <p>Description: Yachts are luxurious, privately-owned boats often used for leisure cruising and entertainment.</p>
          <p>Price: $300</p>
        </div>
        <div className="boat">
          <h3>Boat 4</h3>
          <p>Type: Fishing Boats</p>
          <p>Description: Fishing boats are designed specifically for angling and commercial fishing purposes..</p>
          <p>Price: $400</p>
        </div>
        <div className="boat">
          <h3>Boat 5</h3>
          <p>Type: Pontoon Boats</p>
          <p>Description: Pontoon boats have flat decks mounted on pontoons</p>
          <p>Price: $500</p>
        </div>
        <Button>ADD BOOKING</Button>
        {/* Add more boat listings here */}
      </div>
    </div>
  );
}
export default Viewallboats
