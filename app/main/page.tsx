"use client";
import { Topnav } from "@/components/nav/top-nav";
import { LeftRouternav } from "@/components/nav/left-router-nav";
import { Leftnav } from "./_componenets/nav/left-nav";
import { DefaultMap } from "@/components/map/default-map";
import { LocationInfoModal } from "./_componenets/nav/location-info-modal";
import { useSearchParams } from "next/navigation";
import { RENTAL_LOCATION } from "@/constants";

const MainPage = () => {
  const searchParms = useSearchParams();
  const id = searchParms.get("id");
  const q = searchParms.get("q");

  const list = RENTAL_LOCATION.filter((item) => {
    if (id) return item.id == parseInt(id);
    if (q) return item.title.includes(q);
    return true;
  });

  return (
    <>
      <Topnav />
      <LocationInfoModal />
      <LeftRouternav />
      <Leftnav locationList={list} />
      <main className="h-full">
        <DefaultMap locationList={list} />
      </main>
    </>
  );
};

export default MainPage;
