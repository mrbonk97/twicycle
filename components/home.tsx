"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { LocationType } from "@/types/type";
import { LocationModal } from "@/components/location-modal";
import { NaverMap } from "@/components/map/naver-map";
import { addMarker } from "@/components/map/map-utils";

interface Props {
  q: string | undefined;
  location: LocationType | undefined;
  locations: LocationType[];
}

export const Home = ({ q, locations, location }: Props) => {
  const router = useRouter();
  const mapRef = useRef<naver.maps.Map>(null);
  const markerRef = useRef<naver.maps.Marker[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleMarkerClick = useCallback(
    (l: LocationType) => {
      const params = new URLSearchParams({ id: l.id });
      if (q) params.set("q", q);
      router.push(`/?${params.toString()}`);
    },
    [q, router]
  );

  useEffect(() => {
    if (location) {
      setIsOpen(true);
      if (mapRef.current) mapRef.current.panTo({ lat: location.lat, lng: location.lng });
    }
  }, [location]);

  useEffect(() => {
    if (!isMapLoaded || !mapRef.current) return;

    markerRef.current.forEach((marker) => marker.setMap(null));
    markerRef.current = [];

    locations.forEach((item) => {
      const marker = addMarker(mapRef.current!, item, false, () => handleMarkerClick(item));
      markerRef.current.push(marker);
    });
  }, [isMapLoaded, locations, handleMarkerClick]);

  return (
    <main className="lg:pl-20 h-full w-full">
      {isOpen && location && (
        <LocationModal location={location} isMinimized={false} close={() => setIsOpen(false)} />
      )}
      <NaverMap mapRef={mapRef} setIsMapLoaded={setIsMapLoaded} />
    </main>
  );
};
