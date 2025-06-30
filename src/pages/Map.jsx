import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';



export default 
function Mapping () {
// Fix default marker icon (optional but common fix)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});


  const ilorinPosition = [8.4966, 4.5421]; // Example: Coordinates for Ilorin, Kwara

  return (
    <div className="w-full h-32 bg-gray-300 rounded-md flex items-center justify-center text-gray-600">
      <MapContainer center={ilorinPosition} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ilorinPosition}>
          <Popup>
            You're here! 📍<br /> Ilorin, Kwara State
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};