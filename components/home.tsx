"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LocationType } from "@/types/type";
import { LocationModal } from "@/components/location-modal";
import { NaverMap } from "@/components/map/naver-map";
import { addMarker } from "./map/map-utils";

interface Props {
  q: string | undefined;
  location: LocationType | undefined;
  locations: LocationType[];
}

export const Home = ({ q, locations, location }: Props) => {
  const router = useRouter();

  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkerClick = useCallback(
    (l: LocationType) => {
      const params = new URLSearchParams({ id: l.id });
      if (q) params.set("q", q);
      router.push(`/?${params.toString()}`);
    },
    [q, router]
  );

  useEffect(() => {
    if (!location || !map) return;
    setIsOpen(true);
    map.panTo({ lat: location.lat, lng: location.lng });
  }, [map, location]);

  useEffect(() => {
    if (!map) return;
    const newMarkers: naver.maps.Marker[] = [];

    locations.forEach((item) => {
      const m = addMarker(map, item, false, item.id === location?.id, () =>
        handleMarkerClick(item)
      );
      newMarkers.push(m);
    });

    return () => {
      newMarkers.forEach((m) => m.setMap(null));
    };
  }, [map, locations, location, handleMarkerClick]);

  return (
    <main className="lg:pl-20 h-full w-full">
      {isOpen && location && (
        <LocationModal location={location} isMinimized={false} close={() => setIsOpen(false)} />
      )}
      <NaverMap
        setMap={setMap}
        centerPosition={location ? { lat: location.lat, lng: location.lng } : null}
      />
    </main>
  );
};
