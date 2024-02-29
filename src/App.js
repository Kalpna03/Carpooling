
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import "./index.css"

function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  //const [rideOptions, setRideOptions] = useState([]);

  const findRide = () => {
    if (pickupLocation && dropLocation) {
     // const rideOption = {
      //  pickupLocation: pickupLocation,
       // dropLocation: dropLocation,
      

     // setRideOptions((prevRideOptions) => [...prevRideOptions, rideOption]);
    }
  };

  return (
    <div className="App">
      <div className="box-with-circular-ends">
      <div className="header">
        <h1><strong>Where can we Pickup?</strong></h1>
      </div>
      <div className="form-container">
        <div className="pickup-location">
         
          <input
            type="text"
            placeholder="Add a pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div><br />
        <div className="drop-location">
         
          <input
            type="text"
            placeholder="Enter Your Destination"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
          />
        </div><br />
        <button onClick={findRide}>Ride Now</button>
      </div><br /></div>
      <div className="map-container">
        
        <MapContainer center={{ lat: 12.9545, lng: 80.2155 }} zoom={15} style={{ height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {pickupLocation && (
            <Marker position={{ lat: 12.9545, lng: 80.2155 }}>
              <Popup>
                {pickupLocation}
              </Popup>
            </Marker>
          )}
          {dropLocation && (
            <Marker position={{ lat: 12.9545, lng: 80.2155 }}>
              <Popup>
                {dropLocation}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      </div>
  );
}

export default App;