"use client";
import { ArrowLeftToLine, ArrowRightToLine, BirdIcon } from "lucide-react";
import { LocationCard } from "./location-card";
import { Logo } from "@/components/logo";
import { RENTAL_LOCATION } from "@/constants";
import { Button } from "@/components/ui/button";
import { createSelectors } from "@/stores/create-selector";
import { useBoundStore } from "@/stores/bound-store";

interface LeftnavProps {
  locationList: typeof RENTAL_LOCATION;
}

export const Leftnav = ({ locationList }: LeftnavProps) => {
  const useStore = createSelectors(useBoundStore);
  const isMinimized = useStore.use.isMinimized();
  const changeMinimized = useStore.use.changeMinimized();

  return (
    <aside
      className={`fixed z-[103] left-0 lg:left-20 hidden md:block pb-10 h-full w-80 lg:w-96 bg-primary-foreground border-r overflow-y-auto duration-500
          ${isMinimized && "-translate-x-[17rem] lg:-translate-x-80"}`}
    >
      <div className="px-2 h-24 bg-secondary flex items-center justify-between border-b">
        <div />
        <Logo />
        <Button size={"icon"} variant={"secondary"} onClick={changeMinimized}>
          <ArrowRightToLine
            className={`opacity-80 ${!isMinimized && "hidden"}`}
          />
          <ArrowLeftToLine
            className={`opacity-80 ${isMinimized && "hidden"}`}
          />
        </Button>
      </div>
      <ul>
        {locationList.map((item) => (
          <LocationCard key={item.id} props={item} />
        ))}
        {locationList.length == 0 && (
          <li className="p-3 pr-5 h-32 w-full flex2 gap-5 border-b duration-150 hover:bg-secondary/50">
            <BirdIcon className="text-blue-400" />
            <span>일치하는 항목이 없습니다.</span>
          </li>
        )}
      </ul>
    </aside>
  );
};
