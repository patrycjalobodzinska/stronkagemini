import { LatLngTuple } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet/dist/leaflet.css';

import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  MapContainerProps,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

export type MapBounds = {
  northWest: { latitude: number; longitude: number };
  northEast: { latitude: number; longitude: number };
  southWest: { latitude: number; longitude: number };
  southEast: { latitude: number; longitude: number };
};

const Map = () => {
  const mapRef = useRef(null);
  const center = [50.020440022901525, 22.014304822701135];
  const router = useRouter();

  useEffect(() => {
    const map = mapRef.current;
  }, []);

  const [zoom, setZoom] = useState<number>(12);
  const [delivery, setDelivery] = useState<string>('');

  const ref = useRef<null | HTMLDivElement>(null);
  const ref1 = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [delivery]);

  return (
    <div className={`flex w-full`}>
      <div className=" h-96 w-full mb-12  ">
        <MapContainer
          center={center as [number, number]}
          doubleClickZoom={false}
          closePopupOnClick
          dragging={true}
          trackResize={false}
          touchZoom={false}
          scrollWheelZoom={true}
          zoom={17}
          minZoom={6}
          style={{ height: '100%', width: '100%', borderRadius: '10px' }}
        >
          <Marker position={[50.020440022901525, 22.014304822701135]}></Marker>
          <Popup
            closeButton={false}
            closeOnEscapeKey={false}
            closeOnClick={false}
            position={[50.02044002290155, 22.014304822701135]}
          >
            <div className="flex flex-col ">
              <div className="font-semibold text-lg">GEMINI</div>
              <div className="text-base">al. Tadeusza Rejtana 36</div>
              <div className="flex items-end justify-end ">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    'https://www.google.pl/maps/dir//GEMINI+-+MONITORING,+KAMERY,+DRZWI+GERDA,+DRE,+BRAMY+GARA%C5%BBOWE,+ALARMY,+CENTRALNE+ODKURZACZE,+al.+Tadeusza+Rejtana+36,+35-326+Rzesz%C3%B3w/@50.0204411,22.0142894,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473cfa5ca791fab3:0x451fbfbf7d4e404c!2m2!1d22.0142894!2d50.0204411!3e0?entry=ttu'
                  }
                >
                  <div className="transition-all flex cursor-pointer  gap-2 justify-center items-center text-base px-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md p-2 mt-3">
                    Wyznacz trasę
                  </div>
                </a>
              </div>
            </div>
          </Popup>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
