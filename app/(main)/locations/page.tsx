import { Metadata } from "next";

import { rt } from "@/lib/utils";
import { TopRegionNav } from "@/components/nav/top-region-nav";
import { LeftRegionNav } from "@/components/nav/left-region-nav";
import { TopLocationNav } from "@/components/nav/top-location-nav";
import { RENTAL_LOCATION } from "@/constants/rental-location";
import { LocationCard } from "@/components/location-card";
import { LocationHeader } from "@/components/location-header";
import { NonExistList } from "@/components/none-exist-list";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  const title = rt(sp.region, sp.q);
  return { title: `${title} | 이인거` };
}

const LoationsPage = async ({ searchParams }: Props) => {
  const sp = await searchParams;

  const title = rt(sp.region, sp.q);

  const locations = RENTAL_LOCATION.filter((item) => {
    if (sp.region) return item.region == sp.region;
    if (sp.q) return item.title.includes(sp.q);
    return true;
  });

  return (
    <>
      <TopLocationNav />
      <LeftRegionNav curRegion={sp.region} />
      <main className="pt-14 sm:pt-20 sm:pl-20 xl:pl-[23rem] min-h-[600px]">
        <TopRegionNav curRegion={sp.region} />
        <LocationHeader title={title} />
        <ul className="p-5 flex flex-wrap gap-10 justify-center xl:justify-start">
          {locations.length == 0 && <NonExistList />}
          {locations.map((item) => (
            <LocationCard key={item.id} loc={item} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default LoationsPage;
