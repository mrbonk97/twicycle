"use client";

import { LocationType } from "@/types/type";
import { NaverMap } from "@/components/map/naver-map";
import { useEffect, useState } from "react";
import { addMarker } from "@/components/map/map-utils";

interface Props {
  location: LocationType;
}

export const NaverMapWithPin = ({ location }: Props) => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    if (!map) return;
    addMarker(map, location, false, false);
  }, [location, map]);

  return <NaverMap setMap={setMap} centerPosition={{ lat: location.lat, lng: location.lng }} />;
};
