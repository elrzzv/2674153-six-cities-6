import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TCity, TPoint } from '../../types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/useMap';

type MapProps = {
  block?: string;
  city: TCity;
  points: TPoint[];
  selectedPoint?: TPoint | null;
}

type TIconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
}

const defaultCastomIcon: TIconConfig = {
  url: URL_MARKER_DEFAULT,
  width: 40,
  height: 40,
  anchorX: 20,
  anchorY: 40,
};

const currentCustomIcon: TIconConfig = {
  url: URL_MARKER_CURRENT,
  width: 40,
  height: 40,
  anchorX: 20,
  anchorY: 40,
};

function createIcon(config: TIconConfig) {
  return new Icon({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY]
  });
}

export default function Map({ block, city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng], city.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(
          (selectedPoint && selectedPoint.title === point.title)
            ? createIcon(currentCustomIcon)
            : createIcon(defaultCastomIcon)
        ).addTo(markerLayer);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={`${block}__map map`} ref={mapRef}
    />
  );
}
