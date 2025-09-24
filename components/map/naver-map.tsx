"use client";

import { cn, LocationType } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface Props {
  q: string | undefined;
  location: LocationType | null | undefined;
  locations: LocationType[];
  className?: string;
}

export function NaverMap({ q, location, locations, className }: Props) {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker[]>([]);
  const router = useRouter();

  const initMap = () => {
    if (!mapDivRef.current) {
      throw new Error("지도를 초기화하는 중 오류발생");
    }

    let pos = new naver.maps.LatLng(37.5850113953, 126.8205125895);
    if (location) pos = new naver.maps.LatLng(location.lat, location.lng);
    else if (locations.length > 0) pos = new naver.maps.LatLng(locations[0].lat, locations[0].lng);

    const _map = new naver.maps.Map(mapDivRef.current, {
      center: pos,
      zoom: 16,
    });

    setMap(_map);
  };

  useEffect(() => {
    if (!map) {
      if (typeof window !== "undefined" && typeof window.naver !== "undefined") {
        initMap();
      }
      return;
    }

    // 마커 갱신
    markerRef.current.forEach((marker) => marker.setMap(null));
    markerRef.current = [];

    locations.forEach((loc) => {
      const pos = new naver.maps.LatLng(loc.lat, loc.lng);
      const marker = new naver.maps.Marker({
        map: map,
        position: pos,
        draggable: false,
      });

      marker.addListener("click", () => {
        const url = new URL("/", window.location.origin);
        if (loc) url.searchParams.set("id", loc.id);
        if (q) url.searchParams.set("q", q);
        router.push(url.toString());
      });

      markerRef.current.push(marker);
    });

    // location이 있으면 지도 중심 이동
    if (location) {
      const pos = new naver.maps.LatLng(location.lat, location.lng);
      map.panTo(pos);
    }
  }, [map, q, locations, location, router]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div ref={mapDivRef} className={cn("h-full w-full", className)} />
    </>
  );
}
