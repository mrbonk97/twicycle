"use client";
import { RENTAL_LOCATION } from "@/constants";
import { createSelectors } from "@/stores/create-selector";
import { useNaverMapStoreBase } from "@/stores/useNaverStoreBase";
import { useEffect, useRef } from "react";
import { Spinner } from "../spinner";

interface NaverMapProps {
  lat: number;
  lng: number;
}

export const NaverMap = ({ lat, lng }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const useNaverStore = createSelectors(useNaverMapStoreBase);
  const setNaverMap = useNaverStore.use.setNaverMap();

  useEffect(() => {
    const loadMap = () => {
      if (mapRef.current == undefined) return;

      let { naver } = window;
      const location = new naver.maps.LatLng(lat, lng);

      const mapOptions = {
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        center: location,
        zoom: 16,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);
      setNaverMap(map);

      RENTAL_LOCATION.map((item) => {
        const loc = new naver.maps.LatLng(item.lat, item.lng);

        const marker = new naver.maps.Marker({
          position: loc,
          map,
        });

        naver.maps.Event.addListener(marker, "click", function (e) {
          marker.setAnimation(naver.maps.Animation.BOUNCE);
          map.panTo(e.coord);
        });
      });
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
