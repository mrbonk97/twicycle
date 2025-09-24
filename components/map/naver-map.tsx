"use client";

import { RENTAL_LOCATION } from "@/asset/rental-location";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  location: (typeof RENTAL_LOCATION)[0] | null | undefined;
  locations: typeof RENTAL_LOCATION;
}

export function NaverMap({ className, location, locations }: Props) {
  const markerRef = useRef<naver.maps.Marker[]>([]);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const router = useRouter();

  const initMap = () => {
    if (!mapRef.current) {
      let pos = new naver.maps.LatLng(37.5850113953, 126.8205125895);
      if (location) pos = new naver.maps.LatLng(location.lat, location.lng);
      else if (locations.length > 0) pos = new naver.maps.LatLng(locations[0].lat, locations[0].lng);

      // 최초 1회만 생성
      const mapOptions = {
        center: pos,
        zoom: 16,
      };
      mapRef.current = new naver.maps.Map("map", mapOptions);
    }
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // 마커 갱신
    markerRef.current.forEach((marker) => marker.setMap(null));
    markerRef.current = [];

    locations.forEach((loc) => {
      const pos = new naver.maps.LatLng(loc.lat, loc.lng);
      const marker = new naver.maps.Marker({
        map: mapRef.current!,
        position: pos,
        draggable: false,
      });

      marker.addListener("click", () => {
        router.push(`/?id=${loc.id}`);
      });

      markerRef.current.push(marker);
    });

    // location이 있으면 지도 중심 이동
    if (location) {
      const pos = new naver.maps.LatLng(location.lat, location.lng);
      mapRef.current.panTo(pos);
    }
  }, [locations, location, router]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div id="map" className={cn("h-full w-full", className)} />
    </>
  );
}
