import { PleaseRequestCard } from "@/components/card/please-request-card";
import { SearchLocationCard } from "@/components/card/search-location-card";
import { RENTAL_LOCATION } from "@/constants";

interface LocationListProps {
  list: typeof RENTAL_LOCATION;
}

export const LocationList = ({ list }: LocationListProps) => {
  if (list.length == 0) return <PleaseRequestCard />;

  return (
    <ul className="pt-10 sm:pt-5 w-full flex flex-wrap justify-center gap-10">
      {list.map((item) => (
        <SearchLocationCard
          key={item.id}
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
