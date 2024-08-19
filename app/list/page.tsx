import { RENTAL_LOCATION } from "@/constants";
import { LocationList } from "./_component/location-list";

interface ListPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ListPage = ({ params, searchParams }: ListPageProps) => {
  const region = searchParams.region;
  const q = searchParams.q;

  const list = RENTAL_LOCATION.filter((item) => {
    if (region) return item.region == region;
    if (q) return item.title.includes(q[0]);
    return true;
  });
  return (
    <>
      <main className="pb-10 pr-3 pt-48 sm:pt-20 sm:pl-[14rem] md:pl-[19rem] lg:pl-[24rem] min-h-full w-full">
        <LocationList list={list} />
      </main>
    </>
  );
};

export default ListPage;
