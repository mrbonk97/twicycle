import { Metadata } from "next";

import { Home } from "@/components/home";
import { getRental, getRentalByKeyword } from "@/actions/action";
import { resolveTitle2 } from "@/lib/utils";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  const title = resolveTitle2(sp["id"], sp["q"]);
  return { title: `${title} ${title ? "|" : ""} 이인거` };
}

const HomePage = async ({ searchParams }: Props) => {
  const sp = await searchParams;

  const locations = sp.q ? getRentalByKeyword(sp.q) : getRental();
  let location = undefined;

  if (sp.id) location = locations.find((item) => item.id == sp.id);
  else if (sp.q)
    location = locations.filter(
      (item) => item.title.includes(sp.q!) || item.address.includes(sp.q!)
    )[0];

  if (sp.id && !location) throw new Error(`ID에 해당하는 대여소가 없습니다. ID: ${sp.id}`);

  return <Home q={sp.q} locations={locations} location={location} />;
};

export default HomePage;
