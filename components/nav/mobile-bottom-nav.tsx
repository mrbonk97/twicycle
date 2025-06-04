"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { LocationType } from "@/types/type";
import { LocateFixedIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NonExistList } from "../none-exist-list";

interface Props {
  curQ: string | undefined;
  location: LocationType | undefined;
  locations: LocationType[];
  handleOpen: (l: LocationType) => void;
}

const snapPoints = ["220px", 1];

export const MobileBottomNav = ({ curQ, location, locations, handleOpen }: Props) => {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);

  return (
    <Drawer
      open={true}
      modal={false}
      dismissible={false}
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <DrawerContent className="fixed sm:hidden z-[101] bottom-0 left-0 right-0 h-full max-h-[97%]">
        <DrawerHeader>
          <DrawerTitle>대여소</DrawerTitle>
        </DrawerHeader>
        <ul className="overflow-y-auto">
          {locations.length == 0 && <NonExistList />}

          {locations.map((item) => {
            return (
              <li key={`mobile-list-${item.id}`}>
                <Link
                  onClick={() => handleOpen(item)}
                  aria-checked={location && item.id == location.id}
                  href={curQ ? `/?id=${item.id}&q=${curQ}` : `/?id=${item.id}`}
                  className="block p-5 border-b space-y-1 aria-checked:bg-secondary"
                >
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="flex items-center gap-1 text-sm">
                    <MapPinIcon size={12} />
                    {item.address}
                  </p>
                  <p className="flex items-center gap-1 text-sm">
                    <LocateFixedIcon size={12} />
                    {item.location}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};
