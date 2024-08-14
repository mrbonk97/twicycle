import { LocationCard } from "./location-card";
import { LocationInfoModal } from "./location-info-modal";
import { Logo } from "@/components/logo";
import { RENTAL_LOCATION } from "@/constants";

export const Leftnav2 = () => {
  return (
    <>
      <aside className="fixed left-20 z-20 h-full w-96 bg-background border-r overflow-y-auto">
        <div className="w-full h-24 bg-blue-50 flex items-center justify-center border-b">
          <Logo />
        </div>
        <ul>
          {RENTAL_LOCATION.map((item) => (
            <LocationCard key={item.id} props={item} />
          ))}
        </ul>
      </aside>
      <LocationInfoModal />
    </>
  );
};
