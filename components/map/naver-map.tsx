"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { initMap } from "@/components/map/map-utils";
import { Loader2Icon } from "lucide-react";

interface Props {
  setMap?: Dispatch<SetStateAction<naver.maps.Map | null>>;
  centerPosition?: { lat: number; lng: number } | null;
}

export const NaverMap = ({ setMap, centerPosition }: Props) => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.getElementById("naver-map-script");
    if (!mapDivRef.current || !script) return;

    const loadMap = () => {
      const map = initMap(mapDivRef, centerPosition);
      if (setMap) setMap(map);
    };

    const scriptLoaded = script.getAttribute("data-loaded");

    if (scriptLoaded == "true") loadMap();
    else {
      script.addEventListener("load", loadMap);
      return () => script.removeEventListener("load", loadMap);
    }
  }, [setMap]);

  return (
    <div className="h-full w-full flex2" ref={mapDivRef}>
      <Loader2Icon className="animate-spin text-blue-400" size={96} />
    </div>
  );
};
