"use client";
import { Leftnav1 } from "../main/_componenets/nav/left-nav1";
import { SearchLeftnav } from "./_component/search-left-nav";
import { LocationList } from "./_component/location-list";
import { useState } from "react";
import { REGIONS } from "@/constants";
import { Topnav1 } from "./_component/top-nav1";
import { Topnav2 } from "./_component/top-nav2";

const SearchPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <>
      <Topnav1 />
      <Topnav2
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Leftnav1 />
      <SearchLeftnav
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      {/* <Rightnav /> */}
      <main className="pb-10 pt-48 sm:pt-20 sm:pl-[14rem] md:pl-[19rem] lg:pl-[24rem] min-h-full w-full">
        <h2 className="hidden sm:block text-xl font-medium">
          {REGIONS.find((item) => (item.region = selectedRegion))?.title}
        </h2>
        <LocationList filterRegion={selectedRegion} />
      </main>
    </>
  );
};

export default SearchPage;
