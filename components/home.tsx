"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LocationType } from "@/types/type";
import { LeftSearchNav } from "@/components/nav/left-search-nav";
import { MobileBottomNav } from "./nav/mobile-bottom-nav";
import { TopHomeNav } from "./nav/top-nav-location";
import { LocationModal } from "./location-modal";
import { NaverMap } from "./map/naver-map";
import { addMarker } from "./map/map-utils";
import { useRouter } from "next/navigation";

interface Props {
  q: string | undefined;
  location: LocationType | undefined;
  locations: LocationType[];
}

export const Home = ({ q, locations, location }: Props) => {
  const router = useRouter();
  const markerRef = useRef<naver.maps.Marker[]>([]);
  const mapRef = useRef<naver.maps.Map>(null);

  const [isOpen, setIsOpen] = useState(location ? true : false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMarkerClick = useCallback(
    (l: LocationType) => {
      const params = new URLSearchParams({ id: l.id });
      if (q) params.set("q", q);
      router.replace(`/?${params.toString()}`);
      setIsOpen(true);
    },
    [q, router]
  );

  const handleOpen = (l: LocationType) => {
    const marker = markerRef.current.find((item) => item.getTitle() == l.id);

    if (marker) {
      const map = marker.getMap();
      const pos = marker.getPosition();
      map?.panTo(pos);
    }

    setIsOpen(true);
  };

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
    <>
      <TopHomeNav />
      <LeftSearchNav
        curQ={q}
        handleOpen={handleOpen}
        location={location}
        locations={locations}
        isMinimized={isMinimized}
        handleMinimize={() => setIsMinimized((cur) => !cur)}
      />
      {isOpen && location && (
        <LocationModal
          isMinimized={isMinimized}
          location={location}
          close={() => setIsOpen(false)}
        />
      )}
      <MobileBottomNav curQ={q} location={location} locations={locations} handleOpen={handleOpen} />
      <main className="pl-0 sm:pl:20 h-full">
        <NaverMap
          mapRef={mapRef}
          setMapLoad={() => setIsMapLoaded(true)}
          centerPosition={location ? { lat: location.lat, lng: location.lng } : null}
        />
      </main>
    </>
  );
};
