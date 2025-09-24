"use client";

import { cn } from "@/lib/utils";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
}

export function NaverMapPinnable({ className }: Props) {
  const [coor, setCoor] = useState<string>("");
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);

  const updateCoor = (latlng: naver.maps.LatLng) => {
    setCoor(`위도: ${latlng.y} 경도: ${latlng.x}`);
  };

  const initMap = () => {
    if (!mapDivRef.current) {
      throw new Error("지도를 초기화하는 중 오류발생");
    }

    const pos = new naver.maps.LatLng(37.5850113953, 126.8205125895);

    const _map = new naver.maps.Map(mapDivRef.current, {
      center: pos,
      zoom: 16,
    });

    // 지도 클릭 시 마커 생성/이동
    naver.maps.Event.addListener(_map, "click", (e) => {
      const point = e.coord;
      updateCoor(point);

      if (!markerRef.current) {
        markerRef.current = new naver.maps.Marker({
          map: _map,
          position: point,
          draggable: true,
        });

        // 드래그 종료 시 좌표 업데이트
        naver.maps.Event.addListener(markerRef.current, "dragend", (evt) => {
          const newPos = evt.coord || markerRef.current!.getPosition();
          updateCoor(newPos);
        });
      } else {
        markerRef.current.setPosition(point);
      }

      setMap(map);
    });
  };

  useEffect(() => {
    if (map) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    if (typeof window.naver === "undefined") {
      return;
    }

    initMap();
  }, [map]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <input
        required
        name="coor"
        value={coor}
        onChange={() => {}}
        className="mt-1 p-4 border rounded-lg"
        placeholder="지도를 클릭해서 위치를 설정해주세요"
      />
      <div ref={mapDivRef} className={cn("h-full w-full", className)} />
    </>
  );
}
