import { NaverMap } from "@/components/map/naver-map";
import { LeftNav } from "@/components/nav/left-nav";
import { MainLeftSection } from "@/components/section/main-left-section";
import { TopnavMobile } from "@/components/nav/top-nav-mobile";
import { BottomNavMobile } from "@/components/nav/bottom-nav-mobile";
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
      <LeftNav />
      <TopnavMobile baseUrl="/" />
      <MainLeftSection q={q} location={location} locations={locations} />
      <BottomNavMobile q={q} location={location} locations={locations} />
      <main className="sm:pl-20 h-full">
        <NaverMap location={location} locations={locations} />
      </main>
    </>
  );
}
