import { MapContainer, TileLayer } from "react-leaflet";
import { riverLevels } from "../data/data";

function Map() {
  return (
    <div className="h-auto" style={{ flex: "1", position: "relative" }}>
      <div className="shadow-shadowPri absolute left-[50%] top-[14px] z-[1000] flex w-fit translate-x-[-50%]">
        {riverLevels.map((level, i) => (
          <div
            className="flex w-[140px] items-center justify-center px-6 py-1 text-center text-white"
            style={{ backgroundColor: level.color }}
            key={i}
          >
            {level.level}
          </div>
        ))}
      </div>
      <MapContainer
        center={[10.3764, 7.7095]}
        zoom={13}
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
