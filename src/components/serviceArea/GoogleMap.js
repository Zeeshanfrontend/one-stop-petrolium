// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
`;

const mapStyles = {
  height: '100%',
  width: '100%'
};

const defaultCenter = {
  lat: 41.3851,
  lng: 2.1734
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <MapContainer>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </MapContainer>
    </LoadScript>
  );
};

export default GoogleMapComponent;
