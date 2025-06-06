"use client";

import { useEffect, useRef, useState } from "react";
import { NaverMap } from "./naver-map";
import { addMarker2 } from "./map-utils";

interface Props {
  setCoord: (c: string) => void;
}

export const NaverMapAddPin = ({ setCoord }: Props) => {
  const markerRef = useRef<naver.maps.Marker>(null);
  const mapRef = useRef<naver.maps.Map>(null);

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (!isMapLoaded || !mapRef.current) return;

    mapRef.current.addListener("click", (e) => {
      if (markerRef.current) {
        const pos = new naver.maps.LatLng(e.coord.y, e.coord.x);
        markerRef.current.setPosition(pos);
        setCoord(`lat: ${e.coord.y}, lng: ${e.coord.x}`);
      } else {
        markerRef.current = addMarker2(mapRef.current!, { lat: e.coord.y, lng: e.coord.x });
      }

      setCoord(`lat: ${e.coord.y}, lng: ${e.coord.x}`);
    });
  }, [isMapLoaded, setCoord]);

  return <NaverMap mapRef={mapRef} setIsMapLoaded={setIsMapLoaded} />;
};
