import { RENTAL_LOCATION } from "@/asset/rental-location";
import { RegionButton } from "@/components/buttons/region-button";
import { RegionSection } from "@/components/section/region-section";
import { SearchSection } from "@/components/section/search-section";
import { getFilteredLocations, getRegionName } from "@/lib/utils";
import { Bird } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ q: string; region: string }>;
}

async function LocationsPage({ searchParams }: Props) {
  const { q, region } = await searchParams;
  const title = region ? getRegionName(region) : "전체";
  const locations = getFilteredLocations(undefined, q, region);

  return (
    <>
      <RegionSection region={region ?? "all"} />
      <main className="sm:pl-60 lg:pl-80 pb-20">
        <SearchSection baseUrl="/locations" />
        <header className="z-10 sticky top-12 sm:top-0 mt-12 sm:mt-0 pr-0 pl-2 sm:pl-4 p-4 h-12 sm:h-16 flex items-center justify-between border-b bg-card">
          <h1 className="font-semibold">지역: {title}</h1>
          <RegionButton className="sm:hidden" />
        </header>
        <ul className="p-2 sm:p-4 grid grid-cols-2 sm:flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-8">
          {locations.length == 0 && (
            <li className="col-span-2 mt-8 sm:mt-0 p-4 w-full">
              <Bird className="mx-auto text-blue-400" size={72} />
              <p className="mt-2 text-center text-blue-400 font-semibold">
                등록된 장소가 없습니다.
              </p>
            </li>
          )}
          {locations.map((l) => (
            <Card location={l} key={l.id} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default LocationsPage;

const Card = ({ location }: { location: (typeof RENTAL_LOCATION)[0] }) => (
  <li key={location.id} className="w-full sm:max-w-80">
    <Link
      href={`/locations/${location.id}`}
      className="block sm:p-4 sm:border rounded-lg sm:hover:bg-secondary duration-150"
    >
      <header className="hidden sm:block">
        <h4 className="font-semibold opacity-80">{location.title}</h4>
      </header>
      <Image
        priority
        height={512}
        width={512}
        alt={location.title}
        src={location.image ?? "/location-placeholder.jpg"}
        className="mt-2 h-40 sm:h-52 w-full aspect-square object-cover rounded sm:rounded-lg"
      />
      <p className="sm:hidden text-sm font-medium">{location.title}</p>
      <p className="sm:mt-4 sm:text-center text-xs sm:text-sm font-medium opacity-70">
        {location.address}
      </p>
    </Link>
  </li>
);
