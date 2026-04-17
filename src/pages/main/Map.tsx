import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TCity, TPoint } from '../../types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: TCity;
  points: TPoint[];
  selectedPoint: TPoint | null;
}

function Map({ city, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const defaultCustomIcon = leaflet.icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const currentCustomIcon = leaflet.icon({
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    if (map) {
      points.forEach((point) => {
        if (selectedPoint && selectedPoint.title === point.title) {
          leaflet
            .marker({
              lat: point.lat,
              lng: point.lng,
            }, {
              icon: currentCustomIcon,
            })
            .addTo(map);
        } else {
          leaflet
            .marker({
              lat: point.lat,
              lng: point.lng,
            }, {
              icon: defaultCustomIcon,
            })
            .addTo(map);
        }
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{ height: '500px', width: '200px' }}
      ref={mapRef}
      className="cities__right-section cities__map map"
    />
  );
}

export default Map;
