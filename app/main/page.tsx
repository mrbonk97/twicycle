"use client";
import { NaverMap } from "@/components/map/naver-map";
import { RENTAL_LOCATION } from "@/constants";
import { Leftnav1 } from "./_componenets/nav/left-nav1";
import { Leftnav2 } from "./_componenets/nav/left-nav2";
import { Topnav } from "@/components/nav/top-nav";
import { useEffect } from "react";
import { createSelectors } from "@/stores/create-selector";
import { useBoundStore } from "@/stores/bound-store";
import { LocationType } from "@/types";

const MainPage = () => {
  const useStore = createSelectors(useBoundStore);
  const map = useStore.use.naverMap();
  const handleOpen = useStore.use.handleOpen();

  const addMarker = (content: LocationType) => {
    if (!map) return;

    const coordinate = new naver.maps.LatLng(content.lat, content.lng);
    const marker = new naver.maps.Marker({
      position: coordinate,
      map,
    });

    naver.maps.Event.addListener(marker, "click", function (e) {
      marker.setAnimation(naver.maps.Animation.BOUNCE);
      setTimeout(() => marker.setAnimation(null), 2150);
      map.panTo(e.coord);
      handleOpen(content);
    });
  };

  useEffect(() => {
    RENTAL_LOCATION.map((item) => {
      if (!map) return;
      addMarker(item);
    });
  }, [map]);

  return (
    <>
      <Topnav />
      <main className="h-full w-full flex">
        <Leftnav1 />
        <Leftnav2 />
        <section className="h-full w-full">
          <NaverMap lat={RENTAL_LOCATION[0].lat} lng={RENTAL_LOCATION[0].lng} />
        </section>
      </main>
    </>
  );
};

export default MainPage;
