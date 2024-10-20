import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import { useAuth } from "../store/auth"; // Assuming you have this custom hook for authentication

const googleMapsApiKey = "AIzaSyCxT2PuGQpdwLI4Tr_VrV0OxXbgHFvdNCE"; // Your Google Maps API key
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const EditIncident = ({ incidentId }) => {
  const [incidentData, setIncidentData] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const { token } = useAuth(); // Assuming you have this custom hook for authentication

  useEffect(() => {
    const fetchIncidentData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected string interpolation
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(`${backendUrl}/api/incidents/${incidentId}`, config); // Corrected string interpolation
        const incident = response.data;

        // Set initial marker position
        setMarkerPosition({
          lat: incident.location.coordinates[1],
          lng: incident.location.coordinates[0],
        });

        // Set incident data
        setIncidentData(incident);
      } catch (error) {
        console.error('Error fetching incident data:', error);
      }
    };

    fetchIncidentData();
  }, [incidentId, token]);

  const handleMarkerDrag = (event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newPosition);
    
    // Update the incident data with new coordinates
    if (incidentData) {
      setIncidentData((prev) => ({
        ...prev,
        location: {
          type: 'Point',
          coordinates: [newPosition.lng, newPosition.lat], // [lng, lat]
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!incidentData) return; // Prevent submission if data is not ready

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Corrected string interpolation
          "Content-Type": "application/json",
        },
      };
      const response = await axios.put(`${backendUrl}/api/incidents/${incidentId}`, incidentData, config); // Corrected string interpolation
      console.log('Incident updated successfully:', response.data);
      // Optionally redirect or show a success message here
    } catch (error) {
      console.error('Error updating incident:', error);
    }
  };

  if (!incidentData) return <div>Loading...</div>; // Show loading while fetching data

  return (
    <div>
      <h3>Edit Incident</h3>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '50vh' }}
          center={markerPosition}
          zoom={13}
        >
          <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={handleMarkerDrag} // Update position when dragged
          />
        </GoogleMap>
      </LoadScript>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={incidentData.description}
            onChange={(e) => setIncidentData({ ...incidentData, description: e.target.value })}
          />
        </div>

        <div>
          <label>Category</label>
          <select
            value={incidentData.category}
            onChange={(e) => setIncidentData({ ...incidentData, category: e.target.value })}
          >
            <option value="mistreatment">Mistreatment</option>
            <option value="hooligans">Hooligans</option>
            <option value="cat-calling">Cat-calling</option>
            <option value="shady-area">Shady Area</option>
          </select>
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            value={incidentData.date.split('T')[0]} // Handle date formatting
            onChange={(e) => setIncidentData({ ...incidentData, date: e.target.value })}
          />
        </div>

        <div>
          <label>Time</label>
          <input
            type="time"
            value={incidentData.time}
            onChange={(e) => setIncidentData({ ...incidentData, time: e.target.value })}
          />
        </div>

        <div>
          <label>Name</label>
          <input
            type="text"
            value={incidentData.name}
            onChange={(e) => setIncidentData({ ...incidentData, name: e.target.value })}
          />
        </div>

        <button type="submit">Update Incident</button>
      </form>
    </div>
  );
};

export default EditIncident;
