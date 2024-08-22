"use client";
import { Topnav } from "@/components/nav/top-nav";
import { LeftRouternav } from "@/components/nav/left-router-nav";
import { Leftnav } from "./_componenets/nav/left-nav";
import { DefaultMap } from "@/components/map/default-map";
import { LocationInfoModal } from "./_componenets/nav/location-info-modal";
import { RENTAL_LOCATION } from "@/constants";
import { Bottomnav } from "./_componenets/nav/bottom-nav";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [list, setList] = useState<typeof RENTAL_LOCATION>([]);
  const sp = useSearchParams();
  const id = sp.get("id");
  const q = sp.get("q");

  useEffect(() => {
    const _list = RENTAL_LOCATION.filter((item) => {
      if (id) return item.id == parseInt(id);
      if (q) return item.title.includes(q);
      return true;
    });

    setList(_list);
  }, [id, q]);

  return (
    <>
      <Topnav />
      <LocationInfoModal />
      <LeftRouternav />
      <Leftnav locationList={list} />
      <main className="h-screen">
        <DefaultMap locationList={list} />
      </main>
      <Bottomnav locationList={list} />
    </>
  );
};

export default MainPage;
