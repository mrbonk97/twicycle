"use client";
import { PleaseRequestCard } from "@/components/card/please-request-card";
import { SearchLocationCard } from "@/components/card/search-location-card";
import { RENTAL_LOCATION } from "@/constants";
import { useSearchParams } from "next/navigation";

export const LocationList = () => {
  const searchParms = useSearchParams();
  const region = searchParms.get("region");
  const q = searchParms.get("q");

  const list = RENTAL_LOCATION.filter((item) => {
    if (region) return item.region == region;
    if (q) return item.title.includes(q);
    return true;
  });

  if (list.length == 0) return <PleaseRequestCard />;

  return (
    <ul className="pt-10 sm:pt-5 w-full flex flex-wrap justify-center gap-10">
      {list.map((item) => (
        <SearchLocationCard
          id={item.id}
          address={item.address}
          location={item.location}
          title={item.title}
          lat={item.lat}
          lng={item.lng}
          imageUrl={item.image}
        />
      ))}
    </ul>
  );
};
