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
    return <div>Error</div>;
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
  const center = useMemo(() => ({ lat: 43.871323, lng: -79.2208979 }), []);

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
          mapContainerClassName="map-container"
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
                  href="https://www.google.com/maps/dir/Milton,+ON,+Canada/Hands+On+Physiotherapy+And+Rehab+Centre%2FPelvic+Health,+Copper+Creek+Drive,+Markham,+ON,+Canada/"
                  target="_blank"
                  aria-label="open link to directions to hands on physiotherapy and rehab centre"
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
