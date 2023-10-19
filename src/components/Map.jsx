import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      center={[10.3764, 7.7095]}
      zoom={13}
      scrollWheelZoom={false}
      height="100%"
      width=" 100%"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default Map;
