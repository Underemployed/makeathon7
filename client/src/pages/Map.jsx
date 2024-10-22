const Map = () => {
  // ... other code

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        {incidents.map((incident) => (
          <Marker
            key={incident._id}
            position={{
              lat: incident.location.coordinates[1],
              lng: incident.location.coordinates[0],
            }}
            onClick={() => setSelectedIncident(incident)}
          />
        ))}

        {selectedIncident && (
          <InfoWindow
            position={{
              lat: selectedIncident.location.coordinates[1],
              lng: selectedIncident.location.coordinates[0],
            }}
            onCloseClick={() => setSelectedIncident(null)}
          >
            <div>
              <h4>{selectedIncident.category}</h4>
              <p>{selectedIncident.description}</p>
              <p>Date: {new Date(selectedIncident.date).toLocaleDateString()}</p>
              <p>Time: {new Date(selectedIncident.date).toLocaleTimeString()}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};