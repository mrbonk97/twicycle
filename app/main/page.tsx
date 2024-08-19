import { Topnav } from "@/components/nav/top-nav";
import { LeftRouternav } from "@/components/nav/left-router-nav";
import { Leftnav } from "./_componenets/nav/left-nav";
import { DefaultMap } from "@/components/map/default-map";
import { LocationInfoModal } from "./_componenets/nav/location-info-modal";
import { RENTAL_LOCATION } from "@/constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

const MainPage = ({ searchParams }: Props) => {
  const list = RENTAL_LOCATION.filter((item) => {
    if (searchParams.id) return item.id == parseInt(searchParams.id[0]);
    if (searchParams.q) return item.title.includes(searchParams.q[0]);
    return true;
  });

  return (
    <>
      <Topnav />
      <LocationInfoModal />
      <LeftRouternav />
      <Leftnav locationList={list} />
      <main className="h-full">
        <DefaultMap locationList={list} />
      </main>
    </>
  );
};

export default MainPage;
