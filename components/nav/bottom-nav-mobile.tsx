"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { Bird, MapPin, MapPinned } from "lucide-react";
import { RENTAL_LOCATION } from "@/asset/rental-location";

interface Props {
  q: string | undefined;
  location: (typeof RENTAL_LOCATION)[0] | null | undefined;
  locations: typeof RENTAL_LOCATION;
}

const snapPoints = ["80px", 1];

export function BottomNavMobile({ q, location, locations }: Props) {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);

  useEffect(() => {
    if (location) setSnap(snapPoints[1]);
  }, [location]);

  return (
    <Drawer.Root open={true} modal={false} snapPoints={snapPoints} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
      <Drawer.Portal>
        <Drawer.Content className="z-[101] sm:hidden fixed bg-background rounded-t-xl border bottom-0 left-0 right-0 h-full max-h-[calc(100%-60px)]">
          <Drawer.Handle className="mt-2" />
          <Drawer.Title className="p-4 pb-0 font-semibold">{location ? location.title : "대여소 목록"}</Drawer.Title>
          <Drawer.Description className="px-4 text-sm font-medium">
            {location ? location.address : "지도에서 표시되는 대여소 목록입니다."}
          </Drawer.Description>
          {location ? (
            <div className="p-4 h-full pb-40 overflow-y-auto">
              <Image
                height={320}
                width={320}
                alt={location?.title ?? "placeholder"}
                src={location?.image ?? "/location-placeholder.jpg"}
                className="mt-2 h-40 w-full object-cover rounded-lg"
              />
              <hgroup className="mt-2">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-blue-400" />
                  <span className="text-sm font-medium opacity-80">{location?.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPinned size={16} className="text-blue-400" />
                  <span className="text-sm font-medium opacity-80">{location?.location}</span>
                </div>
              </hgroup>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <div className="font-semibold">
                    <span className="text-blue-400">·</span> <span className="opacity-60">운영기간</span>
                  </div>
                  <div className="font-medium opacity-80 whitespace-pre-line">{location?.businessMonth}</div>
                </li>
                <li>
                  <div className="font-semibold">
                    <span className="text-blue-400">·</span> <span className="opacity-60">운영시간</span>
                  </div>
                  <div className="font-medium opacity-80 whitespace-pre-line">{location?.businessHours}</div>
                </li>
                <li>
                  <div className="font-semibold">
                    <span className="text-blue-400">·</span> <span className="opacity-60">가격</span>
                  </div>
                  <div className="font-medium opacity-80 whitespace-pre-line">{location?.price}</div>
                </li>
                <li>
                  <div className="font-semibold">
                    <span className="text-blue-400">·</span> <span className="opacity-60">연락처</span>
                  </div>
                  <div className="font-medium opacity-80 whitespace-pre-line">{location?.contact}</div>
                </li>
              </ul>
            </div>
          ) : (
            <ul className={`mt-4 pb-40 border-t overflow-y-auto max-h-full`}>
              {locations.length === 0 && (
                <li className="border-b p-4 h-28 flex items-center justify-center gap-4">
                  <Bird className="text-blue-400" size={48} />
                  <p className="text-blue-400 font-semibold">등록된 장소가 없습니다.</p>
                </li>
              )}
              {locations.map((location) => (
                <li key={location.id}>
                  <Link
                    onClick={() => setSnap(snapPoints[0])}
                    href={`/?id=${location.id}${q ? `&q=${q}` : ""}`}
                    className="border-b p-4 h-28 flex justify-between gap-4 cursor-pointer hover:bg-secondary"
                  >
                    <hgroup>
                      <h4 className="font-semibold opacity-80 truncate">{location.title}</h4>
                      <p className="text-xs font-medium opacity-60 truncate">{location.address}</p>
                    </hgroup>
                    <Image
                      height={320}
                      width={320}
                      alt={location.title}
                      src={location.image ?? "/location-placeholder.jpg"}
                      className="shrink-0 h-20 w-20 rounded-lg object-cover"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
