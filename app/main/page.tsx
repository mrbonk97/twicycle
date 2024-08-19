import { Leftnav1 } from "./_componenets/nav/left-nav1";
import { Leftnav2 } from "./_componenets/nav/left-nav2";
import { Topnav } from "@/components/nav/top-nav";
import { LocationInfoModal } from "./_componenets/nav/location-info-modal";
import { DefaultMap } from "@/components/map/default-map";

const MainPage = () => {
  return (
    <>
      <Topnav />
      <LocationInfoModal />
      <Leftnav1 />
      <Leftnav2 />
      <main className="h-full">
        <DefaultMap />
      </main>
    </>
  );
};

export default MainPage;
