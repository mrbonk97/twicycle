"use client";
import { Leftnav1 } from "../main/_componenets/nav/left-nav1";
import { SearchLeftnav } from "./_component/search-left-nav";
import { SearchTopnav } from "./_component/top-nav";
import { LocationList } from "./_component/location-list";
import { useState } from "react";
import { REGION } from "@/constants";
import { Rightnav } from "./_component/right-nav";

const SearchPage = () => {
  const [selectedRow, setSelectedRow] = useState(REGION[0]);

  return (
    <>
      <SearchTopnav />
      <Leftnav1 />
      <SearchLeftnav
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
      <Rightnav />
      <main className="pl-[31.5rem] pr-96 pb-5 pt-24 w-full">
        <h2 className="text-xl font-medium">{selectedRow.title}</h2>
        <LocationList filterRegion={selectedRow?.region} />
      </main>
    </>
  );
};

export default SearchPage;
