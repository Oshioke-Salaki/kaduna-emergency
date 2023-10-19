import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { airQualityLevel } from "../data/data";
import { useGeolocation } from "../hooks/useGeolocation";
import { useEffect, useState } from "react";

function Map() {
  const [mapPosition, setMapPosition] = useState([10.3764, 7.7095]);
  const { getPosition, position: geoLocationPosition } = useGeolocation();

  useEffect(
    function () {
      // getPosition();
      // setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    },
    [getPosition, geoLocationPosition],
  );

  useEffect(
    function () {
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    },
    [geoLocationPosition],
  );

  return (
    <div className="h-auto" style={{ flex: "1", position: "relative" }}>
      <div className="absolute left-[50%] top-[14px] z-[1000] flex w-fit translate-x-[-50%] shadow-shadowPri">
        {airQualityLevel.map((level, i) => (
          <div
            className="flex w-fit items-center justify-center px-6 py-1 text-center text-[12px] text-white"
            style={{ backgroundColor: level.color }}
            key={i}
          >
            {level.level}
          </div>
        ))}
      </div>
      <MapContainer
        center={mapPosition}
        zoom={15}
        scrollWheelZoom={false}
        height="100%"
        width=" 100%"
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          // openstreetmap.org/{z}/{x}/{y}.png
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
