import { NaverMap } from "@/components/map/naver-map";
import { RENTAL_LOCATION } from "@/constants";
import { Leftnav1 } from "./_componenets/nav/left-nav1";
import { Leftnav2 } from "./_componenets/nav/left-nav2";

const MainPage = () => {
  return (
    <main className="h-full w-full flex">
      <Leftnav1 />
      <Leftnav2 />

      <section className="h-full w-full">
        <NaverMap lat={RENTAL_LOCATION[0].lat} lng={RENTAL_LOCATION[0].lng} />
      </section>
    </main>
  );
};

export default MainPage;
