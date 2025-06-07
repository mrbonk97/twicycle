import { Home } from "@/components/home";
import { RENTAL_LOCATION } from "@/constants/rental-location";

import { LeftMenuNav } from "@/components/nav/left-menu-nav";
import { TopHomeNav } from "@/components/nav/top-home-nav";
import { LeftSearchNav } from "@/components/nav/left-search-nav";
import { MobileBottomNav } from "@/components/nav/mobile-bottom-nav";
import { Metadata } from "next";
import { rt2 } from "@/lib/utils";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  return { title: rt2(sp.id, sp.q) };
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
