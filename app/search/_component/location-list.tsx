import { SearchLocationCard } from "@/components/card/search-location-card";
import { RENTAL_LOCATION } from "@/constants";

interface LocationListProps {
  filterRegion: string;
}

export const LocationList = ({ filterRegion }: LocationListProps) => {
  return (
    <ul className="pt-10 sm:pt-5 w-full flex flex-wrap justify-center gap-10">
      {RENTAL_LOCATION.filter((item) => {
        if (filterRegion == "all") return item;
        if (filterRegion == item.region) return item;
      }).map((item) => (
        <SearchLocationCard
          key={item.id}
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
