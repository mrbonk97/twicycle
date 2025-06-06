"use client";

import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import { initMap } from "@/components/map/map-utils";
import { Loader2Icon } from "lucide-react";

interface Props {
  mapRef?: RefObject<naver.maps.Map | null>;
  setIsMapLoaded?: Dispatch<SetStateAction<boolean>>;
  centerPosition?: { lat: number; lng: number } | null;
}

export const NaverMap = ({ mapRef, setIsMapLoaded, centerPosition }: Props) => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.getElementById("naver-map-script");
    if (!mapDivRef.current || !script) return;

    const handleLoad = () => {
      script.setAttribute("data-loaded", "true");
      const map = initMap(mapDivRef, centerPosition);
      if (mapRef) mapRef.current = map;
      if (setIsMapLoaded) setIsMapLoaded(true);
    };

    if (script.getAttribute("data-loaded") === "true") {
      handleLoad();
    } else {
      script.addEventListener("load", () => handleLoad());
      return () => script.removeEventListener("load", handleLoad);
    }
  }, [mapRef, setIsMapLoaded, centerPosition]);

  return (
    <div className="h-full w-full flex2" ref={mapDivRef}>
      <Loader2Icon className="animate-spin text-blue-400" size={96} />
    </div>
  );
};
