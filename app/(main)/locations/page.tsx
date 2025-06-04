import { Metadata } from "next";
import { resolveTitle } from "@/lib/utils";

import { Topnav } from "@/components/nav/top-nav";
import { RegionTopNav } from "@/components/nav/region-top-nav";
import { RegionLeftNav } from "@/components/nav/region-left-nav";

import { RENTAL_LOCATION } from "@/constants/rental-location";
import { LocationCard } from "@/components/location-card";
import { LocationHeader } from "@/components/location-header";
import { NonExistList } from "@/components/none-exist-list";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  const title = resolveTitle(sp["region"], sp["q"]);
  return { title: `${title} | 이인거` };
}

const LoationsPage = async ({ searchParams }: Props) => {
  const sp = await searchParams;
  const region = sp["region"];
  const q = sp["q"];

  const title = resolveTitle(region, q);

  const locations = RENTAL_LOCATION.filter((item) => {
    if (region) return item.region == region;
    if (q) return item.title.includes(q[0]);
    return true;
  });

  return (
    <>
      <Topnav />
      <RegionLeftNav curRegion={region} />
      <main className="pt-14 sm:pt-20 sm:pl-20 xl:pl-[23rem] min-h-full">
        <RegionTopNav curRegion={region} />
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
