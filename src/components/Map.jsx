import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <div
      className="h-full w-full"
      style={{ flex: "1", position: "relative", height: "100%" }}
    >
      <MapContainer
        center={[10.3764, 7.7095]}
        zoom={6}
        scrollWheelZoom={false}
        height="100%"
        width=" 100%"
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      </MapContainer>
    </div>
  );
}

export default Map;
