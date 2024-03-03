import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import L from "leaflet";
import pickupIconUrl from "./location-icon.png";
import dropIconUrl from "./location-icon.png";

const pickupIcon = new L.Icon({
  iconUrl: pickupIconUrl,
  iconSize: [38, 38], 
});

const dropIcon = new L.Icon({
  iconUrl: dropIconUrl,
  iconSize: [38, 38], 
});


function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [rideType, setRideType] = useState("standard");
  

  const findRide = () => {
   
  };

  return (
    <div className="App">
      <div className="ride-type-selector">
        <label>
          <input
            type="radio"
            value="standard"
            checked={rideType === "standard"}
            onChange={() => setRideType("standard")}
          />
          Standard
        </label>
        <label>
          <input
            type="radio"
            value="premium"
            checked={rideType === "premium"}
            onChange={() => setRideType("premium")}
          />
          Premium
        </label>
        
      </div>
      <div className="box-with-circular-ends">
      <div className="header">
        <h2><strong>Where can we Pickup?</strong></h2>
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
        
        <MapContainer center={{ lat: 28.6139, lng: 77.2090 }} zoom={15} style={{ height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {pickupLocation && (
            <Marker position={{ lat: 28.6139, lng: 77.2090 }} icon={pickupIcon}>
            <Popup>Pickup Location: {JSON.stringify({ lat: 28.6139, lng: 77.2090 })}</Popup>
           </Marker>
          )}
           {dropLocation && (
             <Marker position={{ lat: 28.6129, lng: 77.2295 }} icon={dropIcon}>
              <Popup>Drop Location: {JSON.stringify({ lat: 28.6139, lng: 77.2090 })}</Popup>
             </Marker>
)}
        {pickupLocation && dropLocation && (
         <Polyline positions={[[28.6139, 77.2090], [28.6129, 77.2295]]} color="blue" />
)}
        </MapContainer>
      </div>
      </div>
  );
}

export default App;