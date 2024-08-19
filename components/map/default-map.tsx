"use client";

import { RENTAL_LOCATION } from "@/constants";
import { addMarker } from "@/lib/utils";
import { useBoundStore } from "@/stores/bound-store";
import { createSelectors } from "@/stores/create-selector";
import { useEffect } from "react";
import { NaverMap } from "./naver-map";

export const DefaultMap = () => {
  const useStore = createSelectors(useBoundStore);
  const map = useStore.use.naverMap();
  const handleOpen = useStore.use.handleOpen();

  useEffect(() => {
    if (!map) return;
    RENTAL_LOCATION.map((item) => addMarker(map, item, () => handleOpen(item)));
  }, [map]);

  return (
    <section className="h-full w-full">
      <NaverMap lat={RENTAL_LOCATION[0].lat} lng={RENTAL_LOCATION[0].lng} />
    </section>
  );
};
