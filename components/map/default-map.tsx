"use client";

import { RENTAL_LOCATION } from "@/constants";
import { addMarker } from "@/lib/utils";
import { useBoundStore } from "@/stores/bound-store";
import { createSelectors } from "@/stores/create-selector";
import { useEffect, useState } from "react";
import { NaverMap } from "./naver-map";

interface DefaultMapProps {
  locationList: typeof RENTAL_LOCATION;
}

export const DefaultMap = ({ locationList }: DefaultMapProps) => {
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const useStore = createSelectors(useBoundStore);
  const map = useStore.use.naverMap();
  const handleOpen = useStore.use.handleOpen();

  useEffect(() => {
    if (!map) return;
    markers.map((item) => item.setMap(null));

    const _markers: naver.maps.Marker[] = [];
    locationList.map((item) => {
      const marker = addMarker(map, item, () => handleOpen(item));
      if (marker) _markers.push(marker);
    });
    setMarkers(_markers);
  }, [map, locationList]);

  return (
    <section className="h-full w-full">
      <NaverMap
        lat={locationList.length > 0 ? locationList[0].lat : 37.5850113953}
        lng={locationList.length > 0 ? locationList[0].lng : 126.8205125895}
      />
    </section>
  );
};
