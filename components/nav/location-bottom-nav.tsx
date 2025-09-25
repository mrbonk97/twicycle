"use client";

import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { LocationList } from "../section/location-list";
import { LocationInfoArticle } from "../section/location-info-article";
import { LocationType } from "@/lib/utils";

interface Props {
  q: string | undefined;
  location: LocationType | null | undefined;
  locations: LocationType[];
}

const snapPoints = ["80px", 1];

export function LocationBottomnav({ q, location, locations }: Props) {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);

  const toggle = () => {
    setSnap((cur) => (cur == 1 ? "80px" : 1));
  };

  useEffect(() => {
    if (location) {
      setSnap(snapPoints[1]);
      return;
    }

    if (q) {
      setSnap(snapPoints[1]);
      return;
    }
  }, [q, location]);

  return (
    <Drawer.Root open={true} modal={false} snapPoints={snapPoints} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
      <Drawer.Portal>
        <Drawer.Content className="z-[101] sm:hidden fixed bg-background rounded-t-xl border bottom-0 left-0 right-0 h-full max-h-[calc(100%-60px)]">
          <button onClick={toggle} className="block pt-2 pb-6 w-full">
            <Drawer.Handle className="mx-auto" />
          </button>
          <Drawer.Title className="sr-only">대여소 목록</Drawer.Title>
          <Drawer.Description className="sr-only">지도에서 표시되는 대여소 목록입니다.</Drawer.Description>
          <div className="h-full w-[200%] overflow-x-hidden">
            <div className={`h-full grid grid-cols-2 ${location ? "-translate-x-1/2" : "duration-300"}`}>
              <LocationList q={q} locations={locations} />
              <LocationInfoArticle q={q} location={location} />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
