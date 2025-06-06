import { Home } from "@/components/home";
import { RENTAL_LOCATION } from "@/constants/rental-location";

import { LeftMenuNav } from "@/components/nav/left-menu-nav";
import { TopHomeNav } from "@/components/nav/top-nav-location";
import { LeftSearchNav } from "@/components/nav/left-search-nav";
import { MobileBottomNav } from "@/components/nav/mobile-bottom-nav";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;

  if (sp.id) {
    const location = RENTAL_LOCATION.find((item) => item.id == sp.id);
    if (!location) throw new Error(`Id에 해당하는 대여소가 없습니다. ID: ${sp.id}`);

    return {
      title: location.title,
    };
  }

  if (sp.q)
    return {
      title: `검색: ${sp.q} | 이인거`,
    };

  return { title: `이인거` };
}

const HomePage = async ({ searchParams }: Props) => {
  const sp = await searchParams;

  const locations = RENTAL_LOCATION.filter((item) => {
    if (sp.q) return item.address.includes(sp.q) || item.title.includes(sp.q);
    return true;
  });

  const location = RENTAL_LOCATION.find((item) => {
    if (locations.length == 1) return item.id == locations[0].id;
    else if (sp.id) return item.id == sp.id;
    return false;
  });

  return (
    <>
      <TopHomeNav />
      <LeftMenuNav />
      <LeftSearchNav id={sp.id} q={sp.q} locations={locations} />
      <MobileBottomNav id={sp.id} q={sp.q} locations={locations} />
      <Home q={sp.q} location={location} locations={locations} />
    </>
  );
};

export default HomePage;
