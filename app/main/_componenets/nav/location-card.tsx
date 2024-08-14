"use client";
import { useBoundStore } from "@/stores/bound-store";
import { createSelectors } from "@/stores/create-selector";
import { LocationType } from "@/types";
import { ChevronRight, LocateFixedIcon, MapPinIcon } from "lucide-react";

interface LocationCardProps {
  props: LocationType;
}

export const LocationCard = ({ props }: LocationCardProps) => {
  const useStore = createSelectors(useBoundStore);
  const focusedId = useStore.use.content()?.id;
  const handleOpen = useStore.use.handleOpen();
  const naverMap = useStore.use.naverMap();

  const handleClick = () => {
    if (!naverMap) return;
    naverMap.panTo({ y: props.lat, x: props.lng });
    handleOpen(props);
  };

  return (
    <li
      className={`p-3 pr-5 h-32 w-full flex items-center justify-between border-b cursor-pointer group duration-150
        hover:bg-secondary/50
        ${props.id == focusedId && "bg-primary-foreground"}`}
      onClick={handleClick}
    >
      <hgroup className="h-full">
        <h4 className={`text-lg ${props.id == focusedId && "font-medium"}`}>
          {props.title}
        </h4>
        <div className="mt-0.5 text-sm flex items-center gap-1 break-keep">
          <MapPinIcon size={12} />
          {props.address}
        </div>
        <div className="mt-1 text-xs flex items-center gap-1 break-keep">
          <LocateFixedIcon size={12} />
          {props.location}
        </div>
      </hgroup>
      <ChevronRight className="opacity-80 group-hover:text-blue-400 group-hover:translate-x-2 duration-200" />
    </li>
  );
};
