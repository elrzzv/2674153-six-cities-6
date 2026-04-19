import { useEffect, useState, useRef } from 'react';
import leaflet, { Map, TileLayer } from 'leaflet';
import { TCity } from '../types';
import { TILE_LAYER, COPYRIGHT } from '../const';

export default function useMap(
  mapRef: React.RefObject<HTMLDivElement> | null,
  city: TCity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef && mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(TILE_LAYER, {
        attribution: COPYRIGHT
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
