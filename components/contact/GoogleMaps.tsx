import { useMemo, useState } from "react";

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";

export default function GoogleMaps() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (googleMapsApiKey === undefined) {
    return <div className="text-white text-center mb-4">Error (╯°Д°）╯</div>;
  }

  return <Map googleMapsApiKey={googleMapsApiKey} />;
}

type Coordinates = {
  lat: number;
  lng: number;
};

type MapProps = {
  googleMapsApiKey: string;
};

function Map({ googleMapsApiKey }: MapProps) {
  const center = useMemo(() => ({ lat: 39.5977718, lng: -118.6189206 }), []);

  // infers type from default value
  const [selectedMarker, setSelectedMarker] = useState<Coordinates | null>(
    center
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="my-8 mx-20 md:my-10">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="mapContainer"
        >
          <MarkerF
            position={center}
            onClick={() => {
              setSelectedMarker(center);
            }}
          >
            {selectedMarker && (
              <InfoWindow
                onCloseClick={() => {
                  setSelectedMarker(null);
                }}
                position={center}
              >
                <a
                  href="https://www.google.com/maps/place/Hands+On+Physiotherapy+And+Rehab+Centre%2FPelvic+Health/@43.8713268,-79.2208979,17z"
                  target="_blank"
                  aria-label="open link to directions for Hands On Physiotherapy business"
                  className="underline hover:text-blue-550"
                >
                  Directions
                </a>
              </InfoWindow>
            )}
          </MarkerF>
        </GoogleMap>
      </div>
    </>
  );
}