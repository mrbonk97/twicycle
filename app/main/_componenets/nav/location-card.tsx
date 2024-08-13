"use client";
import { createSelectors } from "@/stores/create-selector";
import { useNaverMapStoreBase } from "@/stores/useNaverStoreBase";
import { ChevronRight, LocateFixedIcon, MapPinIcon } from "lucide-react";

interface LocationCardProps {
  title: string;
  address: string;
  location: string;
  lat: number;
  lng: number;
  isFocused: boolean;
  onOpen: () => void;
}

export const LocationCard = ({
  title,
  address,
  location,
  lat,
  lng,
  isFocused,
  onOpen,
}: LocationCardProps) => {
  const useNaverStore = createSelectors(useNaverMapStoreBase);
  const naverMap = useNaverStore.use.naverMap();

  const handleClick = () => {
    if (!naverMap) return;
    naverMap.panTo({ y: lat, x: lng });
    onOpen();
  };

  return (
    <li
      className={`p-3 pr-5 h-32 w-full flex items-center justify-between border-b cursor-pointer group duration-150
        hover:bg-blue-50/20
        ${isFocused && "bg-blue-50"}`}
      onClick={handleClick}
    >
      <hgroup className="h-full">
        <h4 className={`text-lg ${isFocused && "font-medium"}`}>{title}</h4>
        <div className="mt-0.5 text-sm flex items-center gap-1 break-keep">
          <MapPinIcon size={12} />
          {address}
        </div>
        <div className="mt-1 text-xs flex items-center gap-1 break-keep">
          <LocateFixedIcon size={12} />
          {location}
        </div>
      </hgroup>
      <ChevronRight className="opacity-80 group-hover:text-blue-400 group-hover:translate-x-2 duration-200" />
    </li>
  );
};
