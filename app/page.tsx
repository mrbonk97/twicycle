import { NaverMap } from "@/components/map/naver-map";
import { TopnavMobile } from "@/components/nav/top-nav-mobile";
import { LocationLeftnav } from "@/components/nav/location-left-nav";
import { LocationBottomnav } from "@/components/nav/location-bottom-nav";
import { getFilteredLocations2 } from "@/lib/utils";

interface Props {
  searchParams: Promise<{ id: string; q: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { id, q } = await searchParams;
  const locations = getFilteredLocations2(q, undefined);
  const location = id ? locations.find((l) => l.id == id) : null;
  if (id && !location) throw new Error(`장소를 찾을 수 없습니다. ID: ${id}`);

  return (
    <>
      <TopnavMobile baseUrl="/" />
      <LocationLeftnav q={q} location={location} locations={locations} />
      <main className="sm:pl-20 h-full">
        <NaverMap q={q} location={location} locations={locations} />
      </main>
      <LocationBottomnav q={q} location={location} locations={locations} />
    </>
  );
}
