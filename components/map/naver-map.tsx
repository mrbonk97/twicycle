"use client";
import { createSelectors } from "@/stores/create-selector";
import { useEffect, useRef } from "react";
import { Spinner } from "../spinner";
import { useBoundStore } from "@/stores/bound-store";

interface NaverMapProps {
  lat: number;
  lng: number;
}

export const NaverMap = ({ lat, lng }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const setNaverMap = createSelectors(useBoundStore).use.setNaverMap();

  useEffect(() => {
    const loadMap = () => {
      if (mapRef.current == undefined) return;

      let { naver } = window;
      const location = new naver.maps.LatLng(lat, lng);

      const mapOptions = {
        center: location,
        zoom: 16,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);
      setNaverMap(map);
    };

    const { naver } = window;
    if (naver) {
      loadMap();
      return;
    }

    document
      .getElementById("naver-map-script")!
      .addEventListener("load", loadMap);
  }, []);

  return (
    <div
      id="map"
      className="h-full w-full flex items-center justify-center"
      ref={mapRef}
    >
      <Spinner />
    </div>
  );
};
