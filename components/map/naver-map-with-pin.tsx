"use client";

import { LocationType } from "@/types/type";
import { NaverMap } from "./naver-map";
import { useEffect, useRef, useState } from "react";
import { addMarker } from "./map-utils";

interface Props {
  location: LocationType;
}

export const NaverMapWithPin = ({ location }: Props) => {
  const mapRef = useRef<naver.maps.Map>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (isMapLoaded && mapRef.current) {
      addMarker(mapRef.current, location, false);
    }
  }, [location, isMapLoaded]);

  return (
    <NaverMap
      mapRef={mapRef}
      setMapLoad={() => setIsMapLoaded(true)}
      centerPosition={{ lat: location.lat, lng: location.lng }}
    />
  );
};
