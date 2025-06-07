"use client";

import { useEffect, useRef, useState } from "react";
import { NaverMap } from "@/components/map/naver-map";
import { addMarker2 } from "@/components/map/map-utils";

interface Props {
  setCoord: (c: string) => void;
}

export const NaverMapAddPin = ({ setCoord }: Props) => {
  const markerRef = useRef<naver.maps.Marker>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    if (!map) return;

    map.addListener("click", (e) => {
      if (markerRef.current) {
        const pos = new naver.maps.LatLng(e.coord.y, e.coord.x);
        markerRef.current.setPosition(pos);
        setCoord(`lat: ${e.coord.y}, lng: ${e.coord.x}`);
      } else {
        markerRef.current = addMarker2(map, e.coord.y, e.coord.x);
      }

      setCoord(`lat: ${e.coord.y}, lng: ${e.coord.x}`);
    });
  }, [map, setCoord]);

  return <NaverMap setMap={setMap} />;
};
